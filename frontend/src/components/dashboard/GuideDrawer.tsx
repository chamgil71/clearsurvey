import React from "react";
import { BookOpen, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRANSFORM_RULES = [
  // 기본
  { rule: "copy", group: "기본", desc: "원본 값을 그대로 출력합니다." },
  { rule: "exclude", group: "기본", desc: "해당 컬럼을 정제 결과에서 제외합니다." },
  // 정규화
  { rule: "norm_date", group: "정규화", desc: "날짜 문자열을 YYYY-MM-DD 형식으로 표준화합니다." },
  {
    rule: "norm_date_parts",
    group: "정규화",
    desc: "날짜 + 연/월/일 파생열 4개를 자동 생성합니다.",
  },
  { rule: "date_year", group: "정규화", desc: "날짜에서 연도만 추출합니다." },
  {
    rule: "norm_phone",
    group: "정규화",
    desc: "전화번호를 표준 형식(02-1234-5678)으로 정규화합니다.",
  },
  {
    rule: "norm_company",
    group: "정규화",
    desc: "회사명의 법인 형태(주식회사→㈜ 등)를 약어로 통일합니다.",
  },
  {
    rule: "norm_text",
    group: "정규화",
    desc: "앞뒤 공백 제거, 연속 공백 단일화 등 텍스트 기본 정규화를 수행합니다.",
  },
  {
    rule: "norm_num",
    group: "정규화",
    desc: "숫자 문자열을 float으로 변환합니다. 쉼표·단위 제거 포함.",
  },
  {
    rule: "norm_position",
    group: "정규화",
    desc: "직함을 공식 표기로 통일합니다 (부장→부장, 대리→대리 등).",
  },
  // 검증
  {
    rule: "val_email",
    group: "검증",
    desc: "이메일 주소 형식 유효성을 검사합니다. 잘못된 값은 플래그 처리됩니다.",
  },
  { rule: "val_url", group: "검증", desc: "URL 형식(http/https) 유효성을 검사합니다." },
  { rule: "val_brn", group: "검증", desc: "사업자등록번호 체크섬(10자리) 유효성을 검사합니다." },
  // 마스킹
  { rule: "mask_name", group: "마스킹", desc: "이름 중간 글자를 * 처리합니다. 예: 홍*동" },
  { rule: "mask_rrn", group: "마스킹", desc: "주민등록번호 뒷자리 6자리를 *로 마스킹합니다." },
  // 변환
  {
    rule: "to_binary",
    group: "변환",
    desc: "flag_keyword 포함 시 1, 아니면 0으로 변환합니다. flag_keyword 인수 필수.",
  },
  {
    rule: "split_binary",
    group: "변환",
    desc: "복수 선택 응답을 키워드별로 여러 개의 이진(0/1) 파생열로 분리합니다. flag_keyword 인수 필수.",
  },
  { rule: "to_pct", group: "변환", desc: '퍼센트 문자열("85%")을 float(0.85)으로 변환합니다.' },
  // 주소
  {
    rule: "addr_split",
    group: "주소",
    desc: "주소 문자열을 시도·시군구·상세·전체 파생열 4개로 분할합니다.",
  },
  // 집계
  {
    rule: "group_sum",
    group: "집계",
    desc: "복수 원본 컬럼 값을 합산합니다. source_cols 인수 필요.",
  },
  {
    rule: "jang",
    group: "집계",
    desc: "주 열 값이 비어 있을 때 보조 열 값으로 대체합니다(주+보조 병합). backup_col 인수 필요.",
  },
];

// 정제 규칙 그룹 배지 — 7개 그룹이 서로 구분돼야 하는 범주형 팔레트다.
// 차트 팔레트(--chart-1~5)와 같은 성격이라 테마 토큰(primary/muted 등)으로 치환하지 않는다.
// 전부 테마 색을 따르게 하면 7색이 한 가지 톤으로 뭉쳐 그룹을 구별할 수 없다.
// TODO: 테마별 범주형 팔레트가 생기면 그때 --chart-N 계열로 옮긴다(theme_system_plan §2-D).
const GROUP_COLORS: Record<string, string> = {
  기본: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  정규화: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  검증: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  마스킹: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  변환: "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  주소: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  집계: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
};

export const GuideDrawer: React.FC<GuideDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-[480px] sm:w-[480px] max-w-full overflow-y-auto flex flex-col p-0">
        <SheetHeader className="px-5 py-4 border-b border-border bg-muted/30 shrink-0">
          <SheetTitle className="flex items-center gap-2 text-base">
            <BookOpen className="h-5 w-5 text-primary" />
            설문 정제 가이드
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 px-5 py-4 overflow-y-auto">
          <Tabs defaultValue="transform" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="transform" className="text-xs">
                정제 규칙 (Transform)
              </TabsTrigger>
              <TabsTrigger value="cli" className="text-xs">
                CLI 명령어
              </TabsTrigger>
            </TabsList>

            {/* ── Transform 탭 ── */}
            <TabsContent value="transform" className="space-y-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                컬럼 매핑 편집기의 <strong>정제 규칙(transform)</strong> 드롭다운에서 선택 가능한
                전체 규칙 목록입니다. 그룹별로 색상이 구분됩니다.
              </p>

              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50 text-[11px]">
                    <TableRow>
                      <TableHead className="w-[140px] font-semibold">규칙명</TableHead>
                      <TableHead className="w-[60px] font-semibold text-center">그룹</TableHead>
                      <TableHead className="font-semibold">설명</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-xs">
                    {TRANSFORM_RULES.map(({ rule, group, desc }) => (
                      <TableRow key={rule}>
                        <TableCell className="font-mono text-primary font-medium py-2">
                          {rule}
                        </TableCell>
                        <TableCell className="py-2 text-center">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${GROUP_COLORS[group]}`}
                          >
                            {group}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground py-2 leading-snug">
                          {desc}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="p-3 bg-amber-50/50 border border-amber-200/60 rounded-md dark:bg-amber-950/10 dark:border-amber-900/30">
                <p className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold mb-1">
                  추가 인수가 필요한 규칙
                </p>
                <ul className="text-[11px] text-muted-foreground space-y-0.5">
                  <li>
                    <code className="bg-muted px-1 rounded font-mono">to_binary</code> —
                    flag_keyword: 이 키워드 포함 시 1, 아니면 0
                  </li>
                  <li>
                    <code className="bg-muted px-1 rounded font-mono">group_sum</code> —
                    source_cols: 합산할 원본 열번호 목록 (예: 1,2,3 또는 1-3)
                  </li>
                  <li>
                    <code className="bg-muted px-1 rounded font-mono">jang</code> — backup_col:
                    주 열이 비었을 때 대신 사용할 보조 열번호
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-muted/40 border border-border rounded-md">
                <p className="text-[11px] text-foreground font-semibold mb-1">
                  Excel 설정 가져오기 전용 규칙
                </p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  <code className="bg-muted px-1 rounded font-mono">budget_level</code>,{" "}
                  <code className="bg-muted px-1 rounded font-mono">map_category</code>,{" "}
                  <code className="bg-muted px-1 rounded font-mono">map_division</code>은 예산
                  데이터 전용 규칙으로, 위 웹 편집기 드롭다운에는 포함되어 있지 않습니다. 이
                  규칙이 필요하면 설정 Excel 파일의 transform 열에 직접 입력해 가져오세요.
                </p>
              </div>
            </TabsContent>

            {/* ── CLI 탭 ── */}
            <TabsContent value="cli" className="space-y-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                터미널(PowerShell/CMD)에서 직접 정제 엔진을 실행하는 주요 명령어입니다. 웹 관리자
                마법사(Admin 페이지)를 사용하면 이 과정이 UI로 자동화됩니다.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-md space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    1단계: 엑셀 구조 분석 및 Draft 설정 생성
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all whitespace-pre-wrap">
                    {`python main.py analyze storage/raw/파일명.xlsx \\
  --project 프로젝트명 --save-project`}
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    원본 엑셀을 스캔하여 컬럼 구조를 자동 파악하고{" "}
                    <code className="bg-muted px-1 rounded">projects/프로젝트명/</code> 폴더에 draft
                    xlsx 및 config.yaml을 생성합니다.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    2단계: 데이터 정제 실행
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all">
                    {`python main.py run projects/프로젝트명/config.yaml`}
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    config.yaml의 transform 규칙에 따라 원본 데이터를 정제하고{" "}
                    <code className="bg-muted px-1 rounded">projects/프로젝트명/output/</code>에
                    cleaned.xlsx를 저장합니다.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    3단계: 웹 대시보드 JSON 내보내기
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all">
                    {`python main.py export projects/프로젝트명/config.yaml`}
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    cleaned.xlsx에서 대시보드 렌더링용 JSON을 생성하여{" "}
                    <code className="bg-muted px-1 rounded">web/public/data/</code>에 저장합니다.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    설정 사전 검증
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all">
                    {`python main.py validate projects/프로젝트명/config.yaml`}
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    transform 이름, 컬럼 참조 번호, summary/slicer 등 설정 오류를 실행 전에 미리
                    검사합니다.
                  </p>
                </div>

                <div className="p-3 rounded-md space-y-1.5 bg-green-50/40 border border-green-200/60 dark:bg-green-950/10 dark:border-green-900/30">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-green-700 dark:text-green-400">
                    <CheckCircle className="h-3.5 w-3.5" />
                    [권장] FastAPI 백엔드 서버 가동
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-foreground overflow-x-auto select-all">
                    {`python -m uvicorn app.main:app --reload \\
  --host 127.0.0.1 --port 8000`}
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    백엔드를 가동하면 웹 관리자 마법사(<strong>/admin</strong>)에서 파일 업로드·정제
                    실행·설정 저장을 UI로 제어할 수 있습니다.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />웹 프론트엔드 개발 서버
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all">
                    {`cd web && npm run dev`}
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    Vite 개발 서버를{" "}
                    <code className="bg-muted px-1 rounded">http://localhost:5173</code>(또는
                    8080/8081)에 기동합니다. 백엔드와 동시에 실행해야 관리자 기능이 활성화됩니다.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
};
