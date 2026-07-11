import React, { useState, useRef } from "react";
import {
  FolderOpen,
  FileUp,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Play,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ProjectListItem } from "@/types/dashboard";

interface Step1Props {
  isBackendAlive: boolean;
  projects: ProjectListItem[];
  onSelectProject: (name: string) => void;
  onCreateProject: (name: string, file: File, copyFromProject?: string) => Promise<void>;
  onCreateMergeProject?: (
    name: string,
    files: File[],
    options: {
      dedup_strategy: "first" | "last" | "none";
      key_cols: string[];
      add_source_col: boolean;
      source_col_name: string;
    },
    copyFromProject?: string,
  ) => Promise<void>;
  loading: boolean;
}

export const Step1_ProjectUpload: React.FC<Step1Props> = ({
  isBackendAlive,
  projects,
  onSelectProject,
  onCreateProject,
  onCreateMergeProject,
  loading,
}) => {
  const [newProjectName, setNewProjectName] = useState("");
  const [copyFromProject, setCopyFromProject] = useState<string>("none");
  const [uploadMode, setUploadMode] = useState<"single" | "merge">("single");

  // Single upload
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Merge upload
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dedupStrategy, setDedupStrategy] = useState<"first" | "last" | "none">("none");
  const [keyCols, setKeyCols] = useState("");
  const [addSourceCol, setAddSourceCol] = useState(true);
  const [sourceColName, setSourceColName] = useState("_출처파일");

  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (isBackendAlive) setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (!isBackendAlive) return;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      if (uploadMode === "single") {
        const file = files[0];
        if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
          setSelectedFile(file);
        } else {
          toast.error("Excel 파일(.xlsx, .xls)만 업로드할 수 있습니다.");
        }
      } else {
        const validFiles = Array.from(files).filter(
          (file) => file.name.endsWith(".xlsx") || file.name.endsWith(".xls"),
        );
        if (validFiles.length !== files.length) {
          toast.error("Excel 파일(.xlsx, .xls)만 업로드할 수 있습니다.");
        }
        if (validFiles.length > 0) {
          setSelectedFiles((prev) => [...prev, ...validFiles]);
        }
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (uploadMode === "single") {
        setSelectedFile(files[0]);
      } else {
        setSelectedFiles((prev) => [...prev, ...Array.from(files)]);
      }
    }
  };

  const removeMergeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = newProjectName.trim();
    if (!name) return;

    try {
      if (uploadMode === "single") {
        if (!selectedFile) return;
        await onCreateProject(
          name,
          selectedFile,
          copyFromProject !== "none" ? copyFromProject : undefined,
        );
        setSelectedFile(null);
      } else {
        if (selectedFiles.length < 2) {
          toast.error("병합을 위해 최소 2개 이상의 파일을 업로드하십시오.");
          return;
        }
        if (!onCreateMergeProject) {
          toast.error("병합 기능 API가 지원되지 않는 백엔드입니다.");
          return;
        }
        const parsedKeyCols = keyCols
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean);

        if (dedupStrategy !== "none" && parsedKeyCols.length === 0) {
          toast.error("중복 제거 기준 컬럼명을 1개 이상 쉼표로 연결해 입력해 주세요.");
          return;
        }

        await onCreateMergeProject(
          name,
          selectedFiles,
          {
            dedup_strategy: dedupStrategy,
            key_cols: parsedKeyCols,
            add_source_col: addSourceCol,
            source_col_name: sourceColName.trim() || "_출처파일",
          },
          copyFromProject !== "none" ? copyFromProject : undefined,
        );
        setSelectedFiles([]);
        setKeyCols("");
      }
      setNewProjectName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Backend Status Banner */}
      {!isBackendAlive && (
        <Alert
          variant="destructive"
          className="bg-destructive/10 border-destructive text-destructive-foreground"
        >
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="font-bold">정적 모드(데모 모드) 실행 중</AlertTitle>
          <AlertDescription className="text-xs leading-relaxed mt-1">
            로컬 백엔드 서버(FastAPI)가 비가동 상태입니다. 프로젝트 설정 변경, 신규 엑셀 분석 및
            파이프라인 실행은 로컬 백엔드를 켰을 때(
            <code>python -m uvicorn app.main:app --reload</code>)만 동작합니다. 현재 화면에서는
            가이드를 참조하시거나 우측 설정 탭을 통해 데모 설정 다운로드만 가능합니다.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Load Existing Project */}
        <Card className="flex flex-col border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <FolderOpen className="h-4 w-4 text-primary" />
              기존 프로젝트 불러오기
            </CardTitle>
            <CardDescription className="text-xs">
              백엔드 저장소에 이미 설정이 완료되어 분석된 프로젝트 목록입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between min-h-[300px]">
            <div className="space-y-3 flex-1">
              <label className="text-xs font-semibold text-muted-foreground block">
                등록된 프로젝트 목록 ({projects.length}개)
              </label>

              {projects.length === 0 ? (
                <div className="p-8 text-center text-xs text-muted-foreground bg-muted/10 border border-dashed rounded-md h-[180px] flex flex-col items-center justify-center">
                  <FolderOpen className="h-8 w-8 text-muted-foreground/40 mb-2" />
                  등록된 프로젝트가 없습니다.
                  <br />
                  우측에서 신규 파일을 분석하여 시작해보세요.
                </div>
              ) : (
                <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => isBackendAlive && onSelectProject(p.id)}
                      className="group p-3 border rounded-lg bg-background hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer flex items-center justify-between shadow-sm"
                    >
                      <div className="space-y-1">
                        <div
                          className="font-bold text-xs text-foreground group-hover:text-primary transition-colors truncate max-w-[200px]"
                          title={p.name}
                        >
                          {p.name}
                        </div>
                        <div className="text-[10px] text-muted-foreground font-mono">
                          {p.updated ? `최종 업데이트: ${p.updated}` : "수정 이력 없음"}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-[10px] px-2.5 font-bold border group-hover:bg-primary group-hover:text-white transition-colors"
                        disabled={!isBackendAlive}
                      >
                        설정 편집
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Create New Project / Upload File */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <FileUp className="h-4 w-4 text-primary" />
              신규 설문 데이터 생성
            </CardTitle>
            <CardDescription className="text-xs">
              새로운 단일 파일 분석 또는 여러 엑셀 파일을 병합하여 Draft 설정을 생성합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Mode selection buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4 border p-1 rounded-lg bg-muted/20">
              <button
                type="button"
                onClick={() => setUploadMode("single")}
                className={`py-1.5 text-xs font-bold rounded-md transition-all ${
                  uploadMode === "single"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                단일 파일 분석
              </button>
              <button
                type="button"
                onClick={() => setUploadMode("merge")}
                className={`py-1.5 text-xs font-bold rounded-md transition-all ${
                  uploadMode === "merge"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                다중 파일 병합 (Merge)
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="projectName"
                  className="text-xs font-semibold text-muted-foreground"
                >
                  새 프로젝트 이름
                </label>
                <Input
                  id="projectName"
                  placeholder="예: customer_satisfaction_2026"
                  value={newProjectName}
                  onChange={(e) =>
                    setNewProjectName(e.target.value.replace(/[^a-zA-Z0-9_\-가-힣]/g, ""))
                  }
                  disabled={!isBackendAlive || loading}
                  required
                  className="h-9 text-xs"
                />
                <p className="text-[10px] text-muted-foreground">
                  * 한글, 영문, 숫자, 기호(_,-)만 사용하실 수 있습니다.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground block">
                  기존 설정 복사하기 (선택)
                </label>
                <Select value={copyFromProject} onValueChange={setCopyFromProject}>
                  <SelectTrigger className="w-full h-9 text-xs">
                    <SelectValue placeholder="복사할 프로젝트를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" className="text-xs">
                      사용 안 함 (새로 구성)
                    </SelectItem>
                    {projects.map((p) => (
                      <SelectItem key={p.id} value={p.id} className="text-xs">
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-[10px] text-muted-foreground">
                  기존 프로젝트의 정제 규칙과 대시보드 설정을 가져와 적용합니다.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground block">
                  {uploadMode === "single"
                    ? "설문지 엑셀 원본 파일"
                    : "병합할 복수 엑셀 파일 리스트"}
                </label>

                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => isBackendAlive && !loading && fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer transition-colors duration-150 ${
                    isDragOver
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-muted/10"
                  } ${(!isBackendAlive || loading) && "opacity-50 cursor-not-allowed"}`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".xlsx"
                    multiple={uploadMode === "merge"}
                    className="hidden"
                    title="설문지 엑셀 파일 선택"
                    disabled={!isBackendAlive || loading}
                  />
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <div className="text-center space-y-1">
                    <p className="text-xs font-medium text-foreground">
                      {uploadMode === "single"
                        ? "클릭 또는 파일을 여기에 드래그 앤 드롭"
                        : "클릭 또는 복수 파일을 여기에 드래그 앤 드롭"}
                    </p>
                    <p className="text-[10px] text-muted-foreground">Excel 통합 문서 (*.xlsx)</p>
                  </div>
                </div>
              </div>

              {/* Display selected files */}
              {uploadMode === "single" && selectedFile && (
                <div className="p-3 border rounded-lg bg-muted/10 flex items-center justify-between text-xs">
                  <span className="font-semibold truncate max-w-[240px]">{selectedFile.name}</span>
                  <span className="text-[10px] text-muted-foreground">
                    ({(selectedFile.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
              )}

              {uploadMode === "merge" && selectedFiles.length > 0 && (
                <div className="space-y-1.5 max-h-[140px] overflow-y-auto border p-2.5 rounded-lg bg-muted/5">
                  <p className="text-[10px] font-semibold text-muted-foreground mb-1">
                    업로드할 파일 ({selectedFiles.length}개)
                  </p>
                  {selectedFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs p-1.5 bg-background border rounded-md"
                    >
                      <span className="truncate max-w-[200px] text-[11px] font-medium">
                        {file.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-muted-foreground">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeMergeFile(idx);
                          }}
                          className="text-destructive hover:text-red-700 transition-colors p-0.5"
                          title="삭제"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Merge settings form */}
              {uploadMode === "merge" && (
                <Card className="border border-border/60 bg-muted/10">
                  <CardContent className="p-3.5 space-y-3">
                    <p className="text-xs font-bold text-foreground">
                      🔗 데이터 병합 및 중복 제거 설정
                    </p>

                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[10px] font-semibold text-muted-foreground block">
                          중복 제거 전략 (Dedup)
                        </label>
                        <Select
                          value={dedupStrategy}
                          onValueChange={(v) => setDedupStrategy(v as "first" | "last" | "none")}
                        >
                          <SelectTrigger className="h-7 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none" className="text-xs">전체 행 허용 (strategy: none)</SelectItem>
                            <SelectItem value="first" className="text-xs">첫 행 보존 (strategy: first)</SelectItem>
                            <SelectItem value="last" className="text-xs">마지막 행 보존 (strategy: last)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-semibold text-muted-foreground block">
                          중복 기준 컬럼 (Key Columns)
                        </label>
                        <Input
                          placeholder="예: 답변ID, 응답자번호"
                          value={keyCols}
                          onChange={(e) => setKeyCols(e.target.value)}
                          disabled={dedupStrategy === "none"}
                          className="h-7 text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t pt-2.5">
                      <div className="space-y-0.5">
                        <label className="text-[10px] font-semibold text-foreground block">
                          출처 파일 컬럼 기록
                        </label>
                        <span className="text-[9px] text-muted-foreground">
                          가공 행이 어느 엑셀에서 추출되었는지 기록합니다.
                        </span>
                      </div>
                      <Switch checked={addSourceCol} onCheckedChange={setAddSourceCol} />
                    </div>

                    {addSourceCol && (
                      <div className="space-y-1">
                        <label className="text-[10px] font-semibold text-muted-foreground block">
                          출처 정보 컬럼명
                        </label>
                        <Input
                          placeholder="_출처파일"
                          value={sourceColName}
                          onChange={(e) => setSourceColName(e.target.value)}
                          className="h-7 text-xs"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <Button
                type="submit"
                disabled={
                  !isBackendAlive ||
                  !newProjectName.trim() ||
                  (uploadMode === "single" ? !selectedFile : selectedFiles.length < 2) ||
                  loading
                }
                className="w-full text-xs h-9 font-semibold"
              >
                {loading
                  ? "자동 정밀 병합 및 분석 중..."
                  : uploadMode === "single"
                    ? "설문 구조 자동 분석 및 생성"
                    : "복수 엑셀 병합 및 자동 분석 생성"}
                {!loading && <Play className="h-3 w-3 ml-1.5" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
