import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  contextName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in ErrorBoundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center p-6 bg-destructive/5 border border-destructive/20 rounded-xl m-4 space-y-4">
          <AlertTriangle className="h-10 w-10 text-destructive/70" />
          <div className="text-center">
            <h2 className="text-lg font-bold text-destructive">화면 렌더링 중 오류가 발생했습니다.</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {this.props.contextName ? `[${this.props.contextName}] ` : ""}오류로 인해 컴포넌트를 표시할 수 없습니다.
            </p>
          </div>
          <div className="bg-background p-4 rounded-md w-full max-w-2xl overflow-auto border shadow-inner text-xs font-mono text-muted-foreground">
            {this.state.error?.message}
          </div>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md shadow hover:bg-primary/90 transition-colors"
          >
            다시 시도
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
