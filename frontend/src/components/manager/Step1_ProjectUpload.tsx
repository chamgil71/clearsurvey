import React, { useState, useRef } from "react";
import { FolderOpen, FileUp, Upload, CheckCircle2, AlertTriangle, Play } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { ProjectListItem } from "@/types/dashboard";

interface Step1Props {
  isBackendAlive: boolean;
  projects: ProjectListItem[];
  onSelectProject: (name: string) => void;
  onCreateProject: (name: string, file: File) => Promise<void>;
  loading: boolean;
}

export const Step1_ProjectUpload: React.FC<Step1Props> = ({
  isBackendAlive,
  projects,
  onSelectProject,
  onCreateProject,
  loading,
}) => {
  const [newProjectName, setNewProjectName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
      const file = files[0];
      if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
        setSelectedFile(file);
      } else {
        toast.error("Excel 파일(.xlsx, .xls)만 업로드할 수 있습니다.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim() || !selectedFile) return;
    try {
      await onCreateProject(newProjectName.trim(), selectedFile);
      setNewProjectName("");
      setSelectedFile(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Backend Status Banner */}
      {!isBackendAlive && (
        <Alert variant="destructive" className="bg-destructive/10 border-destructive text-destructive-foreground">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="font-bold">정적 모드(데모 모드) 실행 중</AlertTitle>
          <AlertDescription className="text-xs leading-relaxed mt-1">
            로컬 백엔드 서버(FastAPI)가 비가동 상태입니다. 프로젝트 설정 변경, 신규 엑셀 분석 및 파이프라인
            실행은 로컬 백엔드를 켰을 때(<code>python -m uvicorn app.main:app --reload</code>)만 동작합니다.
            현재 화면에서는 가이드를 참조하시거나 우측 설정 탭을 통해 데모 설정 다운로드만 가능합니다.
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
                  등록된 프로젝트가 없습니다.<br />우측에서 신규 파일을 분석하여 시작해보세요.
                </div>
              ) : (
                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => isBackendAlive && onSelectProject(p.id)}
                      className="group p-3 border rounded-lg bg-background hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer flex items-center justify-between shadow-sm"
                    >
                      <div className="space-y-1">
                        <div className="font-bold text-xs text-foreground group-hover:text-primary transition-colors truncate max-w-[200px]" title={p.name}>
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
              신규 설문 엑셀 파일 분석
            </CardTitle>
            <CardDescription className="text-xs">
              새로운 설문 문항 원본 엑셀 파일을 업로드해 문항 구조를 자동 분석하고 Draft 설정을 생성합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="projectName" className="text-xs font-semibold text-muted-foreground">
                  새 프로젝트 이름
                </label>
                <Input
                  id="projectName"
                  placeholder="예: customer_satisfaction_2026"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ""))}
                  disabled={!isBackendAlive || loading}
                  required
                  className="h-9 text-xs"
                />
                <p className="text-[10px] text-muted-foreground">
                  * 영문, 숫자, 하이픈(_,-) 기호만 사용하실 수 있습니다.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground block">
                  설문지 엑셀 원본 파일
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
                    accept=".xlsx, .xls"
                    className="hidden"
                    title="설문지 엑셀 원본 파일 선택"
                    disabled={!isBackendAlive || loading}
                  />
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  {selectedFile ? (
                    <div className="text-center space-y-1">
                      <p className="text-xs font-semibold text-foreground truncate max-w-[280px]">
                        {selectedFile.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        ({(selectedFile.size / 1024).toFixed(1)} KB)
                      </p>
                    </div>
                  ) : (
                    <div className="text-center space-y-1">
                      <p className="text-xs font-medium text-foreground">
                        클릭 또는 파일을 여기에 드래그 앤 드롭
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Excel 파일 (*.xlsx, *.xls)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={!isBackendAlive || !newProjectName.trim() || !selectedFile || loading}
                className="w-full text-xs h-9 font-semibold"
              >
                {loading ? "자동 정밀 분석 중..." : "설문 구조 자동 분석 및 생성"}
                {!loading && <Play className="h-3 w-3 ml-1.5" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
