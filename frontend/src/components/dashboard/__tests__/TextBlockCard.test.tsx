import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextBlockCard } from "@/components/dashboard/TextBlockCard";
import type { TextBlockItem } from "@/types/dashboard";

describe("TextBlockCard", () => {
  it("text를 그대로 보여준다", () => {
    render(<TextBlockCard item={{ type: "text", text: "설명 문구입니다" }} />);
    expect(screen.getByText("설명 문구입니다")).toBeInTheDocument();
  });

  it("줄바꿈을 보존한다(whitespace-pre-wrap)", () => {
    const item: TextBlockItem = { type: "text", text: "첫 줄\n둘째 줄" };
    const { container } = render(<TextBlockCard item={item} />);
    const p = container.querySelector("p");
    expect(p).toHaveClass("whitespace-pre-wrap");
    expect(p?.textContent).toBe("첫 줄\n둘째 줄");
  });

  it("layout 미지정 시 기본 2x1(col-span-2)로 렌더링된다", () => {
    const { container } = render(<TextBlockCard item={{ type: "text", text: "x" }} />);
    expect(container.firstChild).toHaveClass("col-span-2");
  });

  it("layout=full이면 col-span-full이 적용된다", () => {
    const { container } = render(
      <TextBlockCard item={{ type: "text", text: "x", layout: "full" }} />,
    );
    expect(container.firstChild).toHaveClass("col-span-full");
  });

  it("layout=1x1이면 열 확장 클래스가 없다", () => {
    const { container } = render(
      <TextBlockCard item={{ type: "text", text: "x", layout: "1x1" }} />,
    );
    expect(container.firstChild).not.toHaveClass("col-span-2");
    expect(container.firstChild).not.toHaveClass("col-span-full");
  });

  it("text가 빈 문자열이어도 크래시하지 않는다", () => {
    const { container } = render(<TextBlockCard item={{ type: "text", text: "" }} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
