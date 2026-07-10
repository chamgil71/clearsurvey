import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Palette, LayoutTemplate } from "lucide-react";

export interface ThemeConfig {
  mode?: "라이트 모드" | "다크 모드";
  primaryColor?: string;
  brandTitle?: string;
  logoText?: string;
}

export interface LayoutConfig {
  useHeroBanner?: boolean;
  heroTitle?: string;
  heroSubtitle?: string;
  listViewMode?: "Drawer" | "Modal" | "Page";
}

interface DashboardThemeCardProps {
  theme?: ThemeConfig;
  layout?: LayoutConfig;
  onUpdateTheme: (patch: Partial<ThemeConfig>) => void;
  onUpdateLayout: (patch: Partial<LayoutConfig>) => void;
}

export const DashboardThemeCard: React.FC<DashboardThemeCardProps> = ({
  theme,
  layout,
  onUpdateTheme,
  onUpdateLayout,
}) => {
  return (
    <>
      <Card className="border-border bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="py-4 border-b bg-muted/10">
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            테마 및 디자인 설정
          </CardTitle>
          <CardDescription className="text-xs">
            대시보드의 색상, 모드 및 로고를 설정합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">주 색상 (Primary Color)</label>
              <select
                value={theme?.primaryColor ?? "indigo"}
                onChange={(e) => onUpdateTheme({ primaryColor: e.target.value })}
                className="w-full h-9 px-3 rounded-md border border-input text-xs font-medium"
              >
                <option value="indigo">기본 인디고</option>
                <option value="blue">블루</option>
                <option value="emerald">에메랄드</option>
                <option value="rose">로즈</option>
                <option value="slate">슬레이트</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">컬러 모드</label>
              <select
                value={theme?.mode ?? "라이트 모드"}
                onChange={(e) => onUpdateTheme({ mode: e.target.value as any })}
                className="w-full h-9 px-3 rounded-md border border-input text-xs font-medium"
              >
                <option value="라이트 모드">라이트 모드</option>
                <option value="다크 모드">다크 모드</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">브랜드 로고 텍스트</label>
              <Input
                placeholder="예: ClearSurvey"
                value={theme?.logoText ?? ""}
                onChange={(e) => onUpdateTheme({ logoText: e.target.value })}
                className="h-9 text-xs"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">브랜드 타이틀</label>
              <Input
                placeholder="예: 데이터 분석 플랫폼"
                value={theme?.brandTitle ?? ""}
                onChange={(e) => onUpdateTheme({ brandTitle: e.target.value })}
                className="h-9 text-xs"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="py-4 border-b bg-muted/10">
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4 text-primary" />
            레이아웃 및 배너 설정
          </CardTitle>
          <CardDescription className="text-xs">
            상단 배너 및 목록 뷰 방식을 설정합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <label className="flex items-center gap-2 text-xs font-bold text-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={layout?.useHeroBanner ?? false}
              onChange={(e) => onUpdateLayout({ useHeroBanner: e.target.checked })}
              className="rounded border-input text-primary focus:ring-primary h-4 w-4"
            />
            <span>상단 Hero 배너 표시</span>
          </label>
          {(layout?.useHeroBanner ?? false) && (
            <div className="pl-6 space-y-3 border-l-2 border-primary/20">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-muted-foreground">배너 메인 타이틀</label>
                <Input
                  placeholder="메인 타이틀 입력"
                  value={layout?.heroTitle ?? ""}
                  onChange={(e) => onUpdateLayout({ heroTitle: e.target.value })}
                  className="h-8 text-xs"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-muted-foreground">배너 서브 텍스트</label>
                <Input
                  placeholder="서브 텍스트 입력"
                  value={layout?.heroSubtitle ?? ""}
                  onChange={(e) => onUpdateLayout({ heroSubtitle: e.target.value })}
                  className="h-8 text-xs"
                />
              </div>
            </div>
          )}

          <div className="pt-2 border-t mt-4">
            <label className="text-xs font-bold text-foreground block mb-2 mt-2">
              목록 항목 클릭 동작
            </label>
            <select
              value={layout?.listViewMode ?? "Drawer"}
              onChange={(e) => onUpdateLayout({ listViewMode: e.target.value as any })}
              className="w-full h-9 px-3 rounded-md border border-input text-xs font-medium"
            >
              <option value="Drawer">사이드 우측 서랍(Drawer) 열기</option>
              <option value="Modal">중앙 팝업(Modal) 열기</option>
              <option value="Page">상세 페이지로 이동</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
