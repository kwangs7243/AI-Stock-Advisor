# PILOS AI Stock Advisor — Blueprint Ver1

PILOS 1차 팀 프로젝트를 발표용 설명과 기술 근거의 두 단계로 정리한 공개 문서 사이트입니다.

- 교육 과정: **빅데이터 분석을 위한 AI(머신러닝·딥러닝 기반) 서비스 개발자 양성**
- 프로젝트 성격: KDT 교육과정 1차 팀 프로젝트
- 개발 기간: **3주 2일**
- 문서 기준일: **2026-07-16**
- 공개 사이트: <https://kwangs7243.github.io/AI-Stock-Advisor/blueprint/index.html>
- 로컬 시작점: [blueprint/index.html](blueprint/index.html)

## 문서 목적

이 Blueprint는 발표 준비에 바로 사용할 수 있는 쉬운 설명과, 그 설명을 뒷받침하는 기술 근거를 함께 제공합니다.

- 비전공자도 프로젝트의 문제·해결 방법·사용자 기능을 먼저 이해
- 팀장이 발표 순서·핵심 문장·시연 멘트·예상 질문을 바로 활용
- 기술 질문에는 아키텍처·DB·API·모델·실행 로그 문서로 근거 제시
- 구현 완료, 검증 제한, 모델 성능 미검증, MVP 제외 범위를 분리
- 이후 개인 포트폴리오 작성 시 프로젝트 기술 근거로 재사용

개인별 역할과 기여는 이번 문서에 포함하지 않습니다. 개인 기여는 팀 성과와 혼합하지 않고 당사자가 확인한 사실을 바탕으로 별도 부록에서 다룹니다.

## 구현 기준선

| 저장소 | 기준 커밋 | 역할 |
|---|---|---|
| `pilos-ai` | `d564315` | 수집·적재·요약·감성·Features·Direction·RecentFlow·systemd |
| `pilos-web` | `6ddc75b` | Flask 화면·API·인증·AI 분석 조회 |
| `AI-Stock-Advisor` | Snapshot 2026-07-16 | 팀 프로젝트 Blueprint |

## 상태 용어

| 상태 | 의미 |
|---|---|
| 구현·검증 | 현재 소스와 테스트 또는 DB 연결 점검으로 확인 |
| 운영 로그 확인 | Linux 서버 실행 로그에서 단계 완료 확인 |
| 구현·검증 제한 | 코드가 있으나 외부 쓰기·브라우저·운영 환경 검증이 제한됨 |
| 성능 미검증 | 모델이 실행·저장되지만 예측 품질 승격 기준은 통과하지 못함 |
| MVP 제외 | 최종 교육용 결과물에 포함되지 않은 후속 과제 |

## 현재 근거 요약

- AI DB 비의존 테스트 **114개 통과**
- Web DB 비의존 테스트 **28개 통과**
- 주요 Web 읽기 요청 **8개 HTTP 200**
- Linux 파이프라인 로그 **7건 최종 SUCCESS**
- 운영 DB와 SQL 스냅샷 **13개 테이블 DDL 불일치 0**
- SQL·ERD **112개 컬럼·17개 물리 FK 일치**

> 파이프라인 실행 성공은 모든 뉴스 레코드의 요약 성공이나 모델 예측 성능을 의미하지 않습니다. 검증 수준과 한계는 [실행·검증 근거](blueprint/verification.html)에서 구분합니다.

## 문서 지도

### 발표를 준비할 때 먼저 볼 문서

1. [프로젝트 소개](blueprint/index.html)
2. [발표 준비 가이드](blueprint/presentation_guide.html)

### 발표 내용을 뒷받침하는 기술 근거

3. [현재 아키텍처](blueprint/architecture.html)
4. [최종 MVP 범위](blueprint/mvp_scope.html)
5. [데이터·모델 파이프라인](blueprint/model_pipeline.html)
6. [DB 계약](blueprint/database.html)
7. [화면·API 계약](blueprint/api.html)
8. [실행·검증 근거](blueprint/verification.html)
9. [모델 연구 결과](blueprint/research_direction.html)
10. [최종 요구사항 판정](blueprint/requirements.html)
11. [최종 검증 게이트](blueprint/schedule.html)
12. [저장소·스냅샷 전략](blueprint/github_strategy.html)
13. [LLM 제외 범위](blueprint/llm.html)
14. [후속 개선 후보](blueprint/future_plan.html)
15. [프로젝트 문서 규칙](blueprint/project_rules.html)

## 해석 범위

이 문서는 교육용 팀 프로젝트의 최종 구현 상태를 기록합니다.

- 상용 운영 준비 완료를 선언하지 않습니다.
- 모델의 미래 수익 예측 능력을 보증하지 않습니다.
- 투자 추천이나 매수·매도 판단을 제공하지 않습니다.
- 비밀값, 내부 계정, DB 데이터 행은 문서에 포함하지 않습니다.
