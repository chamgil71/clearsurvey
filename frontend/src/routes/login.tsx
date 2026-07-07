import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Github, LogIn, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";

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
            <div className="mt-3 inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 border border-amber-200 text-amber-800 dark:bg-amber-950/20 dark:border-amber-800 dark:text-amber-300 animate-pulse">
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
          <Button type="submit" size="lg" className="w-full h-12 text-base font-bold" disabled={loading}>
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
        <Button variant="outline" size="lg" className="w-full h-12 text-base font-bold" onClick={handleGitHubLogin}>
          <Github className="h-5 w-5 mr-2" />
          GitHub 계정으로 로그인
        </Button>

        {/* Public dashboard link */}
        <p className="text-center text-sm text-muted-foreground pt-2">
          <a href="/" className="underline underline-offset-4 hover:text-foreground font-medium transition-colors">
            공개 대시보드로 이동 →
          </a>
        </p>
      </div>
    </div>
  );
}
