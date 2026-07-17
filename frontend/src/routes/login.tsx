import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { LogIn, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";

// lucide 1.0에서 브랜드 아이콘이 상표 문제로 전부 제거되어 <Github />를 더 이상 쓸 수 없다.
// OAuth 버튼의 제공자 로고는 식별 용도라 로컬 SVG로 대체한다(아이콘 하나 때문에 별도 패키지를
// 들이지 않는다). GitHub 브랜드 가이드는 "Sign in with GitHub" 용도의 마크 사용을 허용한다.
function GithubMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "로그인 — ClearSurvey Admin" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // URL search param에서 redirect 추출
  const redirectTo =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("redirect") || "/admin"
      : "/admin";

  const isLocalDev = (supabase as any).isPlaceholder;

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLocalDev) {
        // 로컬 개발용 세션 임시 주입
        const dummyUser = { email: email || "admin@clearsurvey.local" };
        localStorage.setItem("sb-local-session", JSON.stringify(dummyUser));
        toast.success("로컬 개발 모드: 로그인 우회 성공");
        setTimeout(() => {
          window.location.href = redirectTo;
        }, 500);
        return;
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      window.location.href = redirectTo;
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "로그인 실패");
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    if (isLocalDev) {
      // 로컬 개발용 세션 임시 주입
      const dummyUser = { email: "github-local-dev@clearsurvey.local" };
      localStorage.setItem("sb-local-session", JSON.stringify(dummyUser));
      toast.success("로컬 개발 모드: GitHub 로그인 우회 성공");
      setTimeout(() => {
        window.location.href = redirectTo;
      }, 500);
      return;
    }
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${window.location.origin}${redirectTo}` },
    });
    if (error) toast.error(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-10 border rounded-2xl bg-card shadow-lg">
        {/* Logo */}
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart3 className="h-9 w-9 text-primary" />
            <span className="text-3xl font-black tracking-tight">ClearSurvey</span>
          </div>
          <p className="text-base text-muted-foreground">관리자 계정으로 로그인하세요</p>
          {isLocalDev && (
            <div className="mt-3 inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-warning/15 border border-warning/40 text-warning-foreground dark:text-warning animate-pulse">
              ⚠️ 로컬 개발 모드 (임의 계정 우회 로그인 가능)
            </div>
          )}
        </div>

        {/* Email form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="이메일"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 text-base"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-12 text-base"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full h-12 text-base font-bold"
            disabled={loading}
          >
            <LogIn className="h-5 w-5 mr-2" />
            {loading ? "로그인 중..." : "로그인"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative pt-2 pb-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm uppercase">
            <span className="bg-card px-4 text-muted-foreground font-medium">또는</span>
          </div>
        </div>

        {/* GitHub OAuth */}
        <Button
          variant="outline"
          size="lg"
          className="w-full h-12 text-base font-bold"
          onClick={handleGitHubLogin}
        >
          <GithubMark className="h-5 w-5 mr-2" />
          GitHub 계정으로 로그인
        </Button>

        {/* Public dashboard link */}
        <p className="text-center text-sm text-muted-foreground pt-2">
          <a
            href="/"
            className="underline underline-offset-4 hover:text-foreground font-medium transition-colors"
          >
            공개 대시보드로 이동 →
          </a>
        </p>
      </div>
    </div>
  );
}
