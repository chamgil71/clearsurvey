import type { TextBlockItem } from "@/types/dashboard";
import { cn } from "@/lib/utils";

/** 차트 사이에 끼워 넣는 일반 설명 문구 박스. ChartCard와 같은 그리드 span 규칙을 쓴다. */
export function TextBlockCard({ item }: { item: TextBlockItem }) {
  const layout = item.layout || "2x1";

  const cardClassName = cn(
    "bg-card border border-border/60 rounded-xl p-4 shadow-sm flex items-center",
    (layout === "1x1" || layout === "0.5x1") && "max-w-[560px]",
    layout === "2x1" && "col-span-2 max-sm:col-span-1",
    layout === "2x2" && "col-span-2 max-sm:col-span-1 row-span-2",
    layout === "full" && "col-span-full",
  );

  return (
    <div className={cardClassName}>
      <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
        {item.text || ""}
      </p>
    </div>
  );
}
