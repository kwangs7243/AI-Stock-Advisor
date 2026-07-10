# PILOS AI Stock Advisor — Blueprint Ver1

뉴스·감성 연구 파이프라인과 Flask 주가 대시보드의 현재 구현 상태, 끊긴 통합 구간, 다음 수용 기준을 구분해 기록한 문서 사이트입니다.

- 공개 사이트: <https://kwangs7243.github.io/AI-Stock-Advisor/blueprint/index.html>
- 문서 기준일: **2026-07-10**
- 로컬 시작점: [blueprint/index.html](blueprint/index.html)

> 이 문서는 정적 소스와 저장된 실험 출력을 검토한 snapshot입니다. 빌드·서버·DB·모델의 런타임 동작을 보증하지 않으며, 완성된 AI 투자 추천 서비스를 의미하지 않습니다.

## 상태 용어

| 상태 | 의미 |
|---|---|
| 연동 완료 | 소스상 시작점부터 사용자 출력까지 연결됨 |
| 오프라인 구현 | 독립 실행 코드가 있으나 서비스 흐름과 미연결 |
| 실험 브랜치 | 별도 브랜치 또는 notebook의 R&D, 통합·서빙되지 않음 |
| 목업 | UI만 있거나 고정 데이터를 사용 |
| 계획 | 구현 근거 없음 |
| 실행 검증 필요 | 이번 snapshot에서 런타임 검증하지 않은 보조 상태 |

## 문서 지도

1. 프로젝트 소개·구현 현황
2. As-Is / Target 아키텍처
3. MVP 범위
4. 데이터·모델 파이프라인
5. DB 계약
6. API 계약
7. 연구 결과
8. 요구사항·수용 기준
9. 일정·게이트
10. GitHub·릴리스 전략
11. LLM 설명 계획
12. 향후 확장
13. 프로젝트 규칙

## 구현 근거 저장소

Blueprint가 검토한 구현은 별도 두 저장소에 있습니다.

- `pilos-ai`: 수집, 전처리, KoBERT 추출요약, KR-FinBERT 감성, 예측 R&D, DB 초안
- `pilos-web`: Flask Repository/Service, `/api/stockTable`, 주가 대시보드와 목업 UI

두 저장소는 하나의 릴리스 manifest나 공통 tag로 아직 묶여 있지 않습니다. 이 저장소의 기존 Git tag를 이동하거나 덮어쓰지 않습니다.
