# 📂 ClearSurvey Projects Module

본 폴더는 **ClearSurvey**가 관리하는 각 설문/행정 분석 서브프로젝트별 격리 설정 공간입니다.

## 📂 서브프로젝트별 격리 폴더 구조
각 서브프로젝트 폴더(예: projects/project_budget/)는 재현가능성(Reproducibility)을 위해 아래와 같이 독립된 파일 맵 구조를 지니고 있습니다:

\\\
[projects/your_project]
 ├── config.yaml (엑셀 정제 파이프라인 전용 Pydantic 매핑 설정서)
 ├── dashboard.json (대시보드 KPI 카드 및 차트 시각화 레이아웃 설정서)
 ├── your_project_config.json (파이프라인 실행 시 원격 생성되는 종합 백업 스냅샷)
 └── output/ (해당 프로젝트의 정제 엑셀 결과물이 저장되는 독립 아웃풋 보관소)
\\\

## ⚠️ 관리 규칙 및 주의사항
1. **재현가능성 보장**: 이 폴더 내부의 \config.yaml\과 \dashboard.json\만 안전하게 보관되면, 원본 데이터가 바뀌더라도 언제든지 백퍼센트 완벽하게 동일한 결과물 엑셀과 웹 시각화 대시보드를 즉각 재컴파일해 낼 수 있습니다.
2. **이관 배포**: 새로운 설문 프로젝트를 추가하거나 복사할 때, 다른 프로젝트 폴더를 복사하여 이름만 바꾸어 주면 FastAPI 백엔드가 \/api/projects\ 스캔 시 이를 동적으로 인식하여 즉시 웹 매니저 상에 노출시킵니다.