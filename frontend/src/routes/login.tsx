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

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
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
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${window.location.origin}${redirectTo}` },
    });
    if (error) toast.error(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm space-y-6 p-8 border rounded-xl bg-card shadow-sm">
        {/* Logo */}
        <div className="space-y-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BarChart3 className="h-7 w-7 text-primary" />
            <span className="text-2xl font-black tracking-tight">ClearSurvey</span>
          </div>
          <p className="text-sm text-muted-foreground">관리자 계정으로 로그인하세요</p>
        </div>

        {/* Email form */}
        <form onSubmit={handleEmailLogin} className="space-y-3">
          <Input
            type="email"
            placeholder="이메일"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            <LogIn className="h-4 w-4 mr-2" />
            {loading ? "로그인 중..." : "로그인"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">또는</span>
          </div>
        </div>

        {/* GitHub OAuth */}
        <Button variant="outline" className="w-full" onClick={handleGitHubLogin}>
          <Github className="h-4 w-4 mr-2" />
          GitHub 계정으로 로그인
        </Button>

        {/* Public dashboard link */}
        <p className="text-center text-xs text-muted-foreground">
          <a href="/" className="underline underline-offset-4 hover:text-foreground">
            공개 대시보드로 이동 →
          </a>
        </p>
      </div>
    </div>
  );
}
