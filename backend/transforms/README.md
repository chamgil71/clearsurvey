# 🔄 ClearSurvey Transforms Module

본 폴더는 설문 문항 및 행정 데이터의 각 컬럼 단위별 데이터 형변환, 날짜/주소 병합, 개인정보 비식별화 마스킹 등 **개별 변환 알고리즘(Transforms) 플러그인**이 모듈화되어 모여 있는 곳입니다.

## 📂 핵심 구성 폴더 및 레지스트리
* **registry.py**: 모든 변환 함수들을 @registry.register 데코레이터를 통해 고유 규칙명으로 등록하고 관리하는 레지스트리 모듈.
* **common/address.py**: 주소 데이터 정제 및 분할(addr_split) 등을 캐싱하여 처리하는 주소 분석 플러그인.
* **domain/cleansing.py**: 수치 변환, 날짜 병합(norm_date_parts), 이메일/전화/성명 개인정보 마스킹(mask_*) 등 20여종 실무 공통 필터 플러그인.

## 🛠 신규 정제 규칙(Transform Rule) 개발 표준
새로운 문항 변환 룰이 필요할 시 아래 가이드라인을 준수하여 transforms 내부에 개발 및 자동 로드되도록 합니다:
1. transforms/domain/ 하위 모듈에 파이썬 함수를 정의합니다.
2. 함수 상단에 @registry.register("규칙명") 데코레이터를 주입해 줍니다.
3. 함수 인터페이스는 def your_rule(val, **kwargs): 형태를 취해야 하며, 검증에 실패하거나 누락된 항목은 예외를 던지거나 None을 리턴하도록 구현합니다.
4. 엔진 구동 시 transforms.domain 패키지가 자동으로 임포트되며, 웹 매니저 Step 2의 규칙 드롭다운 상에 동적 로드되어 코딩 없이 연동됩니다.