# ClearSurvey — Storage 폴더 구조

> Git 추적 제외 폴더. 원본 개인정보 데이터가 포함될 수 있으므로 절대 커밋하지 않습니다.

---

## 폴더 구조

```
storage/
├── raw/            ← 백엔드 API 업로드 원본 파일 (POST /api/projects/create 저장 대상)
├── draft/          ← analyze 후 자동 생성된 draft_*.xlsx 파일
├── dummy/          ← 개발·테스트용 더미 원본 엑셀 데이터
└── backup/         ← 수동 백업 아카이브 (날짜별 서브폴더)
```

## 폴더별 역할

| 폴더 | 생성 주체 | 설명 |
|------|----------|------|
| `raw/` | 백엔드 API | 웹 마법사에서 업로드한 원본 엑셀 저장. `app/main.py` POST /create 엔드포인트가 자동 저장 |
| `draft/` | CLI analyze | `python main.py analyze` 실행 시 생성되는 Draft 설정 xlsx |
| `dummy/` | 수동 | 개발·테스트용 더미 데이터. `scripts/gen_dummy.py`로 재생성 가능 |
| `backup/` | 수동 | 수동 백업. 날짜별 서브폴더로 구성 권장 (`backup/YYYY-MM-DD/`) |

## .gitignore 정책

각 하위폴더는 `.gitignore`에 개별 등록되어 있어 `storage/README.md`만 Git에 추적됩니다.

## 주의사항

- 원본 엑셀에는 개인정보(이름, 전화번호, 이메일 등)가 포함될 수 있음
- `raw/`에 저장된 파일은 정제 완료 후 별도 보관 정책에 따라 관리
- `budget_2026/`, `gpu_2026/`, `dummy_budget/`, `dummy_gpu_survey/` 폴더는 CLI 기반 개발·테스트 프로젝트 데이터로 `projects/` 폴더와 별도 관리됨
