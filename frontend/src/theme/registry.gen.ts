// 생성물 — bun scripts/build-themes.mjs. 직접 수정하지 말 것.
// catalog.json 에서 활성 테마의 메타데이터만 뽑았다(번들 크기 때문 — registry.ts 주석 참조).

export interface ThemePresetMeta {
  id: string;
  label: string;
  description: string;
  source: string;
  hasDark: boolean;
  darkFirst: boolean;
}

export const THEME_PRESET_META: ThemePresetMeta[] = [
  {
    id: "light",
    label: "기본 (라이트)",
    description: "ClearSurvey 기본 테마",
    source: "src/styles.css",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "dark",
    label: "기본 (다크)",
    description: "ClearSurvey 기본 테마 · 다크 우선",
    source: "src/styles.css",
    hasDark: false,
    darkFirst: true,
  },
  {
    id: "airbnb",
    label: "에어비앤비",
    description: "Rausch 핑크 액센트와 큰 라운드 사진 카드의 환대 톤",
    source: "design_system_guides/airbnb.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "anthropic",
    label: "앤스로픽",
    description: "크림 캔버스(#F0EEE6)에 코럴 액센트와 세리프 헤드라인의 인문적 AI 톤",
    source: "design_system_guides/anthropic.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "apple-hig",
    label: "애플 휴먼 인터페이스 가이드라인",
    description: "SF Pro와 vibrancy 블러가 만드는 콘텐츠 우선의 깊이감",
    source: "design_system_guides/apple-hig.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "claude",
    label: "클로드",
    description: "크림 캔버스 + 점토 오렌지 + 세리프의 인본주의 AI",
    source: "design_system_guides/claude.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "datadog",
    label: "데이터독",
    description: "보라 강아지 로고와 다채로운 metric 그래프의 옵저버빌리티 톤",
    source: "design_system_guides/datadog.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "duolingo",
    label: "듀오링고",
    description: "Duo 부엉이 마스코트와 굵은 라운드 그림자의 게임화 학습 톤",
    source: "design_system_guides/duolingo.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "github-primer",
    label: "깃허브 프라이머",
    description: "라이트/다크/dimmed 6테마와 functional scale의 코드 친화 시스템",
    source: "design_system_guides/github-primer.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "kakao",
    label: "카카오",
    description: "Kakao Yellow와 5색 캐릭터의 한국 메신저 표준",
    source: "design_system_guides/kakao.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "linear",
    label: "리니어",
    description: "정밀한 다크 톤과 좁은 letter-spacing의 묵직함",
    source: "design_system_guides/linear.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "toss",
    label: "토스",
    description: "Pretendard와 단일 Toss Blue 강조의 한국 핀테크 표준",
    source: "design_system_guides/toss.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "vercel",
    label: "버셀",
    description: "풀 블랙 캔버스에 떠 있는 삼각 로고와 grid 패턴",
    source: "design_system_guides/vercel.md",
    hasDark: true,
    darkFirst: false,
  },
  {
    id: "ink",
    label: "잉크",
    description: "다크 · 로즈 · 샤프(6px)",
    source: "new-beginnings/public/data/themes.json (수작업 이관)",
    hasDark: false,
    darkFirst: true,
  },
  {
    id: "forest",
    label: "포레스트",
    description: "그린 · 차분함(12px)",
    source: "new-beginnings/public/data/themes.json (수작업 이관)",
    hasDark: false,
    darkFirst: false,
  },
];
