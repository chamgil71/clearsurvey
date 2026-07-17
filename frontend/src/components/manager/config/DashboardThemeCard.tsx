import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Palette, LayoutTemplate } from "lucide-react";
import type { DashboardTheme, DashboardLayout } from "@/types/dashboard";
import { THEME_PRESETS, DEFAULT_THEME_ID } from "@/theme/registry";

/**
 * 테마·레이아웃 설정 카드.
 *
 * 프리셋 목록은 theme/registry.ts 에서 온다 — 여기에 `<option value="toss">` 를 박으면
 * 테마를 추가할 때마다 이 파일을 고쳐야 한다(theme_system_plan §4-E 원칙 1).
 *
 * 구 로컬 ThemeConfig/LayoutConfig 인터페이스는 제거했다. types/dashboard.ts 의
 * DashboardTheme 과 필드가 어긋나 있었고(preset/borderRadius 누락), 애초에 이 카드 자체가
 * 어디에도 연결되지 않은 죽은 코드였다.
 */

interface DashboardThemeCardProps {
  theme?: DashboardTheme;
  layout?: DashboardLayout;
  onUpdateTheme: (patch: Partial<DashboardTheme>) => void;
  onUpdateLayout: (patch: Partial<DashboardLayout>) => void;
}

export const DashboardThemeCard: React.FC<DashboardThemeCardProps> = ({
  theme,
  layout,
  onUpdateTheme,
  onUpdateLayout,
}) => {
  const presetId = theme?.preset ?? DEFAULT_THEME_ID;
  const selected = THEME_PRESETS.find((p) => p.id === presetId);

  return (
    <>
      <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="py-4 border-b bg-muted/10">
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            테마 및 디자인 설정
          </CardTitle>
          <CardDescription className="text-xs">
            대시보드의 색상 테마와 브랜드 표기를 설정합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground" htmlFor="theme-preset">
                테마
              </label>
              <select
                id="theme-preset"
                value={presetId}
                onChange={(e) => onUpdateTheme({ preset: e.target.value })}
                className="w-full h-9 px-3 rounded-md border border-input bg-card text-xs font-medium"
              >
                {THEME_PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
              {selected?.description && (
                <p className="text-[11px] text-muted-foreground leading-snug">
                  {selected.description}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground" htmlFor="theme-mode">
                기본 컬러 모드
              </label>
              <select
                id="theme-mode"
                value={theme?.mode ?? "라이트 모드"}
                onChange={(e) => onUpdateTheme({ mode: e.target.value as DashboardTheme["mode"] })}
                className="w-full h-9 px-3 rounded-md border border-input bg-card text-xs font-medium"
              >
                <option value="라이트 모드">라이트 모드</option>
                <option value="다크 모드">다크 모드</option>
              </select>
              <p className="text-[11px] text-muted-foreground leading-snug">
                방문자가 헤더에서 바꾸면 그 선택이 우선합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground" htmlFor="theme-logo">
                브랜드 로고 텍스트
              </label>
              <Input
                id="theme-logo"
                placeholder="ClearSurvey"
                value={theme?.logoText ?? ""}
                onChange={(e) => onUpdateTheme({ logoText: e.target.value })}
                className="h-9 text-xs"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground" htmlFor="theme-brand">
                브랜드 타이틀
              </label>
              <Input
                id="theme-brand"
                placeholder="예: 데이터 분석 플랫폼"
                value={theme?.brandTitle ?? ""}
                onChange={(e) => onUpdateTheme({ brandTitle: e.target.value })}
                className="h-9 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-foreground" htmlFor="theme-radius">
              모서리 둥글기 (선택)
            </label>
            <Input
              id="theme-radius"
              placeholder="테마 기본값 사용 — 예: 16px"
              value={theme?.borderRadius ?? ""}
              onChange={(e) => onUpdateTheme({ borderRadius: e.target.value })}
              className="h-9 text-xs"
            />
            <p className="text-[11px] text-muted-foreground leading-snug">
              비워두면 테마가 정한 값을 씁니다.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
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
                <label className="text-[11px] font-bold text-muted-foreground">
                  배너 메인 타이틀
                </label>
                <Input
                  placeholder="메인 타이틀 입력"
                  value={layout?.heroTitle ?? ""}
                  onChange={(e) => onUpdateLayout({ heroTitle: e.target.value })}
                  className="h-8 text-xs"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-muted-foreground">
                  배너 서브 텍스트
                </label>
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
            <label
              className="text-xs font-bold text-foreground block mb-2 mt-2"
              htmlFor="list-view-mode"
            >
              목록 항목 클릭 동작
            </label>
            <select
              id="list-view-mode"
              value={layout?.listViewMode ?? "Drawer"}
              onChange={(e) =>
                onUpdateLayout({ listViewMode: e.target.value as DashboardLayout["listViewMode"] })
              }
              className="w-full h-9 px-3 rounded-md border border-input bg-card text-xs font-medium"
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
