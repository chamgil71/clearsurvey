# ⚙ ClearSurvey Engine Module

본 폴더는 **ClearSurvey**의 심장부인 데이터 정제 파이프라인 핵심 엔진 모듈 보관 폴더입니다.

## 📂 핵심 구성 파일 설명
* **config.py**: Pydantic을 활용하여 YAML 설정을 안전하게 검증하는 스키마 모델.
* **pipeline.py**: 전처리, Transforms 검증, openpyxl 렌더링을 전체 조율하는 파이프라인 오케스트레이터.
* **preprocessor.py**: 정제 전 행 필터링 및 Fill-Down을 수행하는 전처리 엔진.
* **writer.py / styler.py**: openpyxl을 제어하여 결과 엑셀 시트에 프리미엄 Hues 스타일 및 정합성 포맷팅을 렌더링하는 모듈.
* **summarizer.py**: 요약 시트 내에 2단 배치 및 집계 수식을 동적 산출해 내는 요약기.
* **slicer.py**: 완성된 엑셀에 피벗 다차원 연동 네이티브 슬라이서를 동적 XML 주입 해킹 방식으로 적재하는 모듈.
* **validator.py / patterns.py**: 데이터 형태 및 주소/전화/사업자번호 정규식 유효성 검증기.

## ⚠️ 개발 시 주의사항
* 이 폴더 내부의 코어 모듈들은 공통 라이브러리 역할을 수행하므로, 비즈니스 특화 정제 룰은 본 폴더가 아닌 \	ransforms/\ 폴더에 구현해 주십시오.