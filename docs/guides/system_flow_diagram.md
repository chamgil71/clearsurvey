# ClearSurvey 시스템 흐름도

업로드부터 재사용까지 전체 워크플로우를 보여주는 구성도입니다. 색상 범례:
- 🔵 파란색 = 사람이 수행하는 작업
- 🟢 초록색 = 코드/엔진이 자동으로 수행하는 작업
- 🟣 보라색(굵게) = 이번 구성도에서 강조하는 핵심 기능 (AI 기능 아님)

> 이전 버전은 "3. 배포" 단계에 대시보드 기능이 작은 노드 하나로만 묻혀 있고, 대신 "4. 다운로드/내보내기"가 보라색으로 강조되어 있었습니다.
> 실제로 이 프로젝트의 핵심 가치는 **대시보드 자체(차트·필터·검색·상세보기 등)** 이고, 다운로드/내보내기는 부가 기능이므로 강조를 서로 바꿨습니다.

```mermaid
flowchart TD
    classDef humanBox fill:#e0f2fe,stroke:#0284c7,stroke-width:1px,color:#0369a1,rx:8,ry:8,min-width:300px;
    classDef codeBox fill:#dcfce7,stroke:#16a34a,stroke-width:1px,color:#15803d,rx:8,ry:8,min-width:300px;
    classDef highlightBox fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px,color:#6d28d9,font-weight:bold,rx:8,ry:8,min-width:300px;
    classDef spacerBox fill:transparent,stroke:transparent,color:transparent,min-width:300px;
    classDef phaseBox fill:#fefce8,stroke:#ca8a04,stroke-width:1px,rx:10,ry:10,color:#1e3a8a,font-weight:bold,font-size:20px;
    classDef phaseBoxStar fill:#fefce8,stroke:#ca8a04,stroke-width:2px,rx:10,ry:10,color:#1e3a8a,font-weight:bold,font-size:20px;
    classDef groupBox fill:#ffffff,stroke:#7c3aed,stroke-width:1px,rx:8,ry:8;

    subgraph S1["1. 화면 규칙 정의"]
        direction LR
        A["📤 원본 엑셀 업로드<br/>데이터 시트"]:::humanBox
        B["🔍 ExcelAnalyzer<br/>컬럼 구조 자동 분석"]:::codeBox
        C["📐 컬럼 정의 설정<br/>config 수정/엑셀/사이트"]:::humanBox
        A --> B --> C
    end
    S1:::phaseBox

    subgraph S2["2. 환경 설정 확정 및 실행"]
        direction LR
        D["💾 config.yaml 저장<br/>정제 규칙 확정"]:::highlightBox
        E["⚙️ 정제 엔진 실행"]:::codeBox
        H["📡 대시보드 배포<br/>JSON 업데이트"]:::codeBox
        D --> E --> H
    end
    S2:::phaseBox

    subgraph S3["3. 배포 모드 선택"]
        direction LR
        J["<b>🌐 정적 모드</b><br/>ms-clearsurvey.vercel.app"]:::codeBox
        K["<b>🔗 풀스택 모드</b><br/>로컬서버 실행/FastAPI/react"]:::codeBox
        J ~~~ K
    end
    S3:::phaseBox

    subgraph S4["4. 대시보드 기능 ⭐"]
        direction LR
        subgraph S4a["탐색·분석"]
            direction LR
            M1["📊 KPI 카드<br/>화면상단"]:::highlightBox
            M2["📈 차트<br/>단일 / 멀티 그래프"]:::highlightBox
            M3["📋 데이터 테이블<br/>목록 / csv다운로드"]:::highlightBox
            M1 ~~~ M2 ~~~ M3
        end
        subgraph S4b["검색·상세"]
            direction LR
            M4["🔎 필터/검색"]:::highlightBox
            M5["🗂️ 상세 패널"]:::highlightBox
            M6["📝 요약 탭 / 가이드"]:::highlightBox
            M4 ~~~ M5 ~~~ M6
        end
    end
    S4:::phaseBoxStar

    subgraph S5["5. 다운로드 / 내보내기"]
        direction LR
        P["📑 PPTX 내보내기"]:::codeBox
        Q["🖨️ PDF 내보내기"]:::codeBox
        R["📝 요약 Word/PDF"]:::codeBox
        G["📥 cleaned_result.xlsx<br/>풀스택 전용"]:::codeBox
        P ~~~ Q ~~~ R ~~~ G
    end
    S5:::phaseBox

    subgraph S6["6. 재사용"]
        direction LR
        LX[" "]:::spacerBox
        L["♻️ 동일 양식 재업로드<br/>config 재사용 — 규칙 재지정 불필요"]:::humanBox
        RX[" "]:::spacerBox
        LX ~~~ L ~~~ RX
    end
    S6:::phaseBox

    S1 --> S2 --> S3 --> S4 --> S5 --> S6
```

## 변경 요약 (이전 버전 대비)

| 항목 | 이전 | 수정 |
|---|---|---|
| 대시보드 기능 | "3. 배포" 안에 `JX` 노드 하나(차트/목록/요약/검색)로만 존재, 정적/풀스택 노드 사이에 끼어 눈에 안 띔 | 독립된 "4. 대시보드 기능 ⭐" 단계로 분리, 실제 컴포넌트(`KpiRow`, `ChartCard`, `DataTable`, `FilterBar`, `DetailPanel`, `SummaryTab`, `GuideDrawer`, `EditReviewPanel`) 기준 6개 노드로 보강, 보라색 강조 유지 |
| 다운로드/내보내기 | "4. 다운로드/내보내기"가 보라색 강조(`highlightBox`) + 빨간 테두리 하위 그룹(`공통`/`풀스택전용`)으로 시각적 비중 과다 | "5. 다운로드/내보내기"로 이동, 강조 해제 후 일반 초록색(`codeBox`)으로 하향, 하위 그룹 구조 제거하고 4개 노드를 한 줄로 단순화 |
| 대시보드 값 수정 | 다운로드 섹션에 잘못 배치(내보내기 기능이 아님) | 대시보드 기능 섹션의 "편집" 하위 그룹으로 이동 |
| 단계 번호 | 1~5단계 (배포 3단계에 다운로드까지 포함) | 1~6단계로 재편 (배포→대시보드 기능→다운로드→재사용 순으로 실제 사용 흐름과 일치) |
