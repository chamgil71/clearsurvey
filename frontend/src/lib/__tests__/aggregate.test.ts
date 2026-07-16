import { describe, it, expect } from "vitest";
import {
  aggCategory,
  aggNumericSum,
  aggMultiValue,
  filterRows,
  matchesPattern,
  buildChartItems,
} from "@/lib/aggregate";
import type { ChartItem, Row } from "@/types/dashboard";

const rows: Row[] = [
  { 지역: "서울", 부서: "개발팀", 점수: 90 },
  { 지역: "부산", 부서: "영업팀", 점수: 85 },
  { 지역: "서울", 부서: "개발팀", 점수: null },
  { 지역: "대구", 부서: "영업팀", 점수: "" },
  { 지역: "서울", 부서: "기획팀", 점수: 70 },
];

// ── aggCategory ──────────────────────────────────────────────────────────────

describe("aggCategory", () => {
  it("빈도순으로 정렬된 카테고리 카운트를 반환한다", () => {
    const result = aggCategory(rows, "지역");
    const keys = Object.keys(result);
    expect(keys[0]).toBe("서울");
    expect(result["서울"]).toBe(3);
    expect(result["부산"]).toBe(1);
    expect(result["대구"]).toBe(1);
  });

  it("빈 문자열 값은 집계에서 제외한다", () => {
    const result = aggCategory([{ a: "" }, { a: "X" }], "a");
    expect(result).toEqual({ X: 1 });
  });

  it("null/undefined 값은 집계에서 제외한다", () => {
    const result = aggCategory([{ a: null }, { a: undefined }, { a: "Y" }], "a");
    expect(result).toEqual({ Y: 1 });
  });

  it("빈 rows 배열이면 빈 객체를 반환한다", () => {
    expect(aggCategory([], "지역")).toEqual({});
  });

  it("존재하지 않는 컬럼이면 빈 객체를 반환한다", () => {
    expect(aggCategory(rows, "없는컬럼")).toEqual({});
  });
});

// ── aggNumericSum ─────────────────────────────────────────────────────────────

describe("aggNumericSum", () => {
  it("숫자 값의 합계를 반환한다", () => {
    expect(aggNumericSum(rows, "점수")).toBe(245);
  });

  it("null·undefined·빈 문자열은 0으로 처리한다", () => {
    const r: Row[] = [{ v: null }, { v: undefined }, { v: "" }, { v: 10 }];
    expect(aggNumericSum(r, "v")).toBe(10);
  });

  it("숫자로 변환 불가한 문자열은 0으로 처리한다", () => {
    const r: Row[] = [{ v: "abc" }, { v: "5" }];
    expect(aggNumericSum(r, "v")).toBe(5);
  });

  it("빈 rows 배열이면 0을 반환한다", () => {
    expect(aggNumericSum([], "점수")).toBe(0);
  });
});

// ── aggMultiValue ─────────────────────────────────────────────────────────────

describe("aggMultiValue", () => {
  it("구분자로 분리된 값을 개별 카운트한다", () => {
    const r: Row[] = [{ 목적: "교육,연구" }, { 목적: "교육" }, { 목적: "상업" }];
    const result = aggMultiValue(r, "목적");
    expect(result["교육"]).toBe(2);
    expect(result["연구"]).toBe(1);
    expect(result["상업"]).toBe(1);
  });

  it("빈도순으로 정렬된다", () => {
    const r: Row[] = [{ v: "A,B" }, { v: "B,C" }, { v: "B" }];
    const keys = Object.keys(aggMultiValue(r, "v"));
    expect(keys[0]).toBe("B");
  });

  it("커스텀 구분자를 지원한다", () => {
    const r: Row[] = [{ v: "X|Y" }];
    const result = aggMultiValue(r, "v", "|");
    expect(result["X"]).toBe(1);
    expect(result["Y"]).toBe(1);
  });

  it("빈 값은 집계에서 제외한다", () => {
    const r: Row[] = [{ v: "" }, { v: null }, { v: "A" }];
    expect(aggMultiValue(r, "v")).toEqual({ A: 1 });
  });
});

// ── filterRows ────────────────────────────────────────────────────────────────

describe("filterRows", () => {
  it("search·filters가 모두 비어있으면 전체 rows를 반환한다", () => {
    expect(filterRows(rows, "", {})).toEqual(rows);
  });

  it("search 문자열로 전체 컬럼을 대소문자 무시 검색한다", () => {
    const result = filterRows(rows, "서울", {});
    expect(result).toHaveLength(3);
  });

  it("filters로 특정 컬럼 값을 정확히 필터링한다", () => {
    const result = filterRows(rows, "", { 부서: "개발팀" });
    expect(result).toHaveLength(2);
    result.forEach((r) => expect(r.부서).toBe("개발팀"));
  });

  it("search와 filters를 동시에 적용한다 (AND 조건)", () => {
    const result = filterRows(rows, "서울", { 부서: "영업팀" });
    expect(result).toHaveLength(0);
  });

  it("콤마로 구분된 셀 값에 대한 필터도 정확히 동작한다", () => {
    const r: Row[] = [{ 목적: "교육,연구" }, { 목적: "상업" }];
    const result = filterRows(r, "", { 목적: "교육" });
    expect(result).toHaveLength(1);
  });

  it("필터 값이 빈 문자열이면 해당 필터는 무시한다", () => {
    const result = filterRows(rows, "", { 부서: "" });
    expect(result).toEqual(rows);
  });

  it("빈 rows 배열이면 빈 배열을 반환한다", () => {
    expect(filterRows([], "서울", {})).toEqual([]);
  });
});

// ── matchesPattern ────────────────────────────────────────────────────────────

describe("matchesPattern", () => {
  it("정확 일치를 수행한다", () => {
    expect(matchesPattern("서울", "서울")).toBe(true);
    expect(matchesPattern("부산", "서울")).toBe(false);
  });

  it("콤마 구분 멀티밸류 셀에서 부분 일치한다", () => {
    expect(matchesPattern("교육,연구", "교육")).toBe(true);
    expect(matchesPattern("교육,연구", "상업")).toBe(false);
  });

  it("<> 부정 연산자는 다른 값만 통과시킨다", () => {
    expect(matchesPattern("부산", "<>서울")).toBe(true);
    expect(matchesPattern("서울", "<>서울")).toBe(false);
  });

  it("!= 부정 연산자도 동일하게 동작한다", () => {
    expect(matchesPattern("부산", "!=서울")).toBe(true);
    expect(matchesPattern("서울", "!=서울")).toBe(false);
  });

  it("<>*kw* 는 포함하지 않는 값을 통과시킨다", () => {
    expect(matchesPattern("부산", "<>*서울*")).toBe(true);
    expect(matchesPattern("서울 강남", "<>*서울*")).toBe(false);
  });

  it("*kw* 는 포함 검색이다", () => {
    expect(matchesPattern("서울 강남", "*서울*")).toBe(true);
    expect(matchesPattern("부산", "*서울*")).toBe(false);
  });

  it("kw* 는 시작 검색이다", () => {
    expect(matchesPattern("서울 강남", "서울*")).toBe(true);
    expect(matchesPattern("강남 서울", "서울*")).toBe(false);
  });

  it("*kw 는 끝 검색이다", () => {
    expect(matchesPattern("서울 강남", "*강남")).toBe(true);
    expect(matchesPattern("강남 서울", "*강남")).toBe(false);
  });

  it("= 접두사는 무시하고 정확 일치한다", () => {
    expect(matchesPattern("서울", "=서울")).toBe(true);
    expect(matchesPattern("부산", "=서울")).toBe(false);
  });
});

// ── filterRows — 패턴 매칭 필터 ───────────────────────────────────────────────

describe("filterRows — 패턴 매칭 필터", () => {
  it("<> 부정 연산자 필터는 일치하지 않는 행만 반환한다", () => {
    const result = filterRows(rows, "", { 지역: "<>서울" });
    expect(result).toHaveLength(2);
    result.forEach((r) => expect(r.지역).not.toBe("서울"));
  });

  it("*keyword* 와일드카드 필터는 포함 검색을 수행한다", () => {
    const r: Row[] = [{ 지역: "서울" }, { 지역: "서울 강남" }, { 지역: "부산" }];
    expect(filterRows(r, "", { 지역: "*서울*" })).toHaveLength(2);
  });

  it("keyword* 와일드카드 필터는 시작 검색을 수행한다", () => {
    const r: Row[] = [{ 지역: "서울" }, { 지역: "서울 강남" }, { 지역: "부산" }];
    expect(filterRows(r, "", { 지역: "서울*" })).toHaveLength(2);
  });

  it("*keyword 와일드카드 필터는 끝 검색을 수행한다", () => {
    const r: Row[] = [{ 지역: "서울 강남" }, { 지역: "인천 강남" }, { 지역: "부산" }];
    expect(filterRows(r, "", { 지역: "*강남" })).toHaveLength(2);
  });
});

// ── buildChartItems (PPT/차트 데이터 추출) ────────────────────────────────────

describe("buildChartItems", () => {
  it("bar 타입: 카테고리 빈도를 값 내림차순으로 집계한다", () => {
    const chart = { type: "bar", col: "지역" } as ChartItem;
    const result = buildChartItems(chart, rows);
    expect(result).toEqual([
      { name: "서울", value: 3 },
      { name: "부산", value: 1 },
      { name: "대구", value: 1 },
    ]);
  });

  it("max_items로 상위 항목만 절삭한다", () => {
    const chart = { type: "bar", col: "지역", max_items: 1 } as ChartItem;
    const result = buildChartItems(chart, rows);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({ name: "서울", value: 3 });
  });

  it("max_items=0 이면 전체를 반환한다", () => {
    const chart = { type: "bar", col: "지역", max_items: 0 } as ChartItem;
    expect(buildChartItems(chart, rows)).toHaveLength(3);
  });

  it("sort_by=name_asc 이면 이름 가나다순으로 정렬한다", () => {
    const chart = { type: "bar", col: "지역", sort_by: "name_asc" } as ChartItem;
    const names = buildChartItems(chart, rows).map((i) => i.name);
    expect(names).toEqual(["대구", "부산", "서울"]);
  });

  it("histogram 타입은 bar와 동일하게 카테고리 집계로 폴백한다", () => {
    const bar = buildChartItems({ type: "bar", col: "지역" } as ChartItem, rows);
    const hist = buildChartItems({ type: "histogram", col: "지역" } as ChartItem, rows);
    expect(hist).toEqual(bar);
  });

  it("multibar 타입: 각 컬럼의 수치 합을 시리즈로 만든다", () => {
    const chart = {
      type: "multibar",
      cols: [
        { col: "점수", label: "점수합" },
        { col: "없는열", label: "빈열" },
      ],
    } as ChartItem;
    const result = buildChartItems(chart, rows);
    // 점수 합 = 90 + 85 + 70 = 245, 없는열 = 0 → 값 내림차순
    expect(result).toEqual([
      { name: "점수합", value: 245 },
      { name: "빈열", value: 0 },
    ]);
  });

  it("value_col 지정 시 그룹별 수치 합계를 낸다", () => {
    const chart = { type: "bar", col: "지역", value_col: "점수" } as unknown as ChartItem;
    const result = buildChartItems(chart, rows);
    const seoul = result.find((r) => r.name === "서울");
    // 서울 점수: 90 + (null→0) + 70 = 160
    expect(seoul?.value).toBe(160);
  });
});
