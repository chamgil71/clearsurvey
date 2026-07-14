import { describe, it, expect } from "vitest";
import { parseSourceColsInput } from "@/components/manager/config/ColumnConfigTab";

describe("parseSourceColsInput", () => {
  it("콤마로 구분된 목록을 파싱한다", () => {
    expect(parseSourceColsInput("3, 5, 7")).toEqual([3, 5, 7]);
  });

  it("범위 문법(3-7)을 콤마 목록과 동일하게 확장한다", () => {
    expect(parseSourceColsInput("3-7")).toEqual([3, 4, 5, 6, 7]);
  });

  it("역순 범위(7-3)도 오름차순으로 확장한다", () => {
    expect(parseSourceColsInput("7-3")).toEqual([3, 4, 5, 6, 7]);
  });

  it("범위와 콤마 목록을 함께 지정할 수 있다", () => {
    expect(parseSourceColsInput("1, 3-5, 9")).toEqual([1, 3, 4, 5, 9]);
  });

  it("세미콜론 구분자도 지원한다", () => {
    expect(parseSourceColsInput("1;2;3")).toEqual([1, 2, 3]);
  });

  it("중복 값을 제거한다", () => {
    expect(parseSourceColsInput("1, 2, 1, 2-3")).toEqual([1, 2, 3]);
  });

  it("숫자가 아닌 토큰은 무시한다", () => {
    expect(parseSourceColsInput("1, abc, 3")).toEqual([1, 3]);
  });

  it("빈 입력은 빈 배열을 반환한다", () => {
    expect(parseSourceColsInput("")).toEqual([]);
  });
});
