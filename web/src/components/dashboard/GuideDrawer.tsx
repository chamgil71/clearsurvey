import React from "react";
import { X, BookOpen, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export const GuideDrawer: React.FC<GuideDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/40 backdrop-blur-sm z-[899] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-[56px] right-0 w-[460px] h-[calc(100vh-56px)] bg-card border-l border-border shadow-2xl z-[900] overflow-y-auto transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="font-bold text-base text-foreground">설문 정제 가이드</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 p-5 overflow-y-auto">
          <Tabs defaultValue="transform" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="transform" className="text-xs">
                🔄 정제 규칙 (Transform)
              </TabsTrigger>
              <TabsTrigger value="cli" className="text-xs">
                💻 CLI 명령어
              </TabsTrigger>
            </TabsList>

            {/* Transform Tab */}
            <TabsContent value="transform" className="space-y-4">
              <div className="text-xs text-muted-foreground mb-3 leading-relaxed">
                설문 원본 데이터(Raw Excel)의 컬럼별 변환 및 검증 필터를 구성하기 위한 정제 규칙(Transform) 일람입니다. 10열 매핑 화면에서 선택 가능합니다.
              </div>

              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50 text-[11px]">
                    <TableRow>
                      <TableHead className="w-[110px] font-semibold">규칙명 (Rule)</TableHead>
                      <TableHead className="font-semibold">설명 및 예시</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-xs">
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">exclude</TableCell>
                      <TableCell className="text-muted-foreground">해당 열을 정제 결과에서 제외합니다.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">norm_date_parts</TableCell>
                      <TableCell className="text-muted-foreground">연/월/일 컬럼을 파싱하여 정제된 날짜로 병합/규격화합니다.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">address_split</TableCell>
                      <TableCell className="text-muted-foreground">주소 컬럼을 파싱하여 [시/도], [시/군/구]로 자동 분할합니다.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">val_range</TableCell>
                      <TableCell className="text-muted-foreground">
                        수치 범위 검증. <code className="bg-muted px-1 rounded">min:1, max:5</code> 형태로 설정.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">val_in</TableCell>
                      <TableCell className="text-muted-foreground">
                        특정 값들만 허용. <code className="bg-muted px-1 rounded">M, F</code> 또는 <code className="bg-muted px-1 rounded">예, 아니오</code> 형태로 쉼표 구분.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">val_regex</TableCell>
                      <TableCell className="text-muted-foreground">정규표현식 검증. 패턴 불일치 시 경고/오류 발생.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">to_string</TableCell>
                      <TableCell className="text-muted-foreground">문자열 타입 강제 형변환.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">to_numeric</TableCell>
                      <TableCell className="text-muted-foreground">숫자(정수/실수) 타입 강제 형변환 및 빈 값 0 치환.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">to_category</TableCell>
                      <TableCell className="text-muted-foreground">카테고리형 코드로 인코딩 및 고유 카운트 매칭.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">mask_email</TableCell>
                      <TableCell className="text-muted-foreground">
                        이메일 주소 마스킹. <code className="bg-muted px-1 rounded">a***@domain.com</code> 형태로 변환.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">mask_phone</TableCell>
                      <TableCell className="text-muted-foreground">
                        전화번호 마스킹. <code className="bg-muted px-1 rounded">010-****-1234</code> 형태로 변환.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-primary font-medium">mask_name</TableCell>
                      <TableCell className="text-muted-foreground">이름 마스킹. 중간 글자를 * 처리 (예: 홍*동).</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* CLI Tab */}
            <TabsContent value="cli" className="space-y-4">
              <div className="text-xs text-muted-foreground mb-3 leading-relaxed">
                서버 터미널 또는 CMD에서 백엔드 엔진을 실행하거나 테스트하는 주요 CLI 명령어 가이드입니다.
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-md space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    1단계: 설문지 엑셀 분석 및 설정 초안 생성
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all">
                    python main.py analyze storage/raw_survey.xlsx --name "my_survey"
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    지정한 원본 엑셀 파일을 스캔하여 컬럼 구조 파악 및 draft 엑셀 설정 시트를 생성합니다.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    2단계: 데이터 정제 실행
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all">
                    python main.py run projects/my_survey/config.yaml
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    작성된 설정(config.yaml)에 맞춰 원본 데이터를 정제하고 클렌징된 엑셀을 `output/`에 출력합니다.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    3단계: 웹 대시보드 JSON 데이터 추출
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-primary overflow-x-auto select-all">
                    python main.py export projects/my_survey/config.yaml
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    정제 완료된 엑셀 파일로부터 대시보드 렌더링에 적합한 JSON 데이터를 생성하여 웹에 공급합니다.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md space-y-1 bg-green-50/30 border border-green-200/50 dark:bg-green-950/10 dark:border-green-900/30">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400">
                    <CheckCircle className="h-3.5 w-3.5" />
                    [권장] 로컬 개발 서버 가동
                  </div>
                  <pre className="text-[11px] font-mono p-2 bg-background rounded text-foreground overflow-x-auto">
                    python -m uvicorn app.main:app --reload
                  </pre>
                  <p className="text-[10px] text-muted-foreground">
                    백엔드 FastAPI 서버를 `http://localhost:8000`에 가동하여 웹 브라우저에서 실시간으로 마법사를 통해 업로드 및 정제 전체 제어가 가능해집니다.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};
