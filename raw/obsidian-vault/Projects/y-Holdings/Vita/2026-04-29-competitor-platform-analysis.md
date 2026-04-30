---
date: 2026-04-29
type: 경쟁사-기술분석
domain: vita / wearable-health-platform
authors: document-specialist (delegated by Counsely)
scope: 데이터 아키텍처 + 플랫폼/서비스 설계 (경영·가격 제외)
tags: [vita, vitalring, whoop, oura, ringconn, pasta, kakao-healthcare, fhir, federated-learning, platform-design]
relevance: vita-l4-platform-entry
---

# 5사 경쟁사 데이터 아키텍처 비교 — Vita 설계 관점

## 5×6 매트릭스

| 차원 | WHOOP | Oura Ring | RingConn | VitalRing (ZTAcom) | Kakao PASTA |
|---|---|---|---|---|---|
| **A. 데이터 수집** | HR·HRV·SpO2·온도·호흡·수면·스트레인·회복·ECG(510k 취득). 혈압 FDA 경고로 중단 | HR·HRV·SpO2·온도·호흡·수면(4단계)·생리주기·스트레스·운동 40종. 30+ 바이오마커. 18-경로 PPG | HR·HRV·SpO2·온도·호흡·수면·VO₂max·스트레스·무호흡 | HR·HRV·SpO2·온도·호흡·수면·스트레스(10분)·걸음. KC 인증 | CGM(연속혈당, 5분)·식사AI·운동·수면 자가기록. 혈당 단일 깊이 압도적 |
| **B. 저장/아키텍처** | Apache Iceberg + Spark Streaming + AWS EMR + Snowflake. PB급. CDC(Postgres→Iceberg) | OAuth2 클라우드 API. PSG 검증 1,200+ nights | Apple Health/Google Fit 동기화 | 미공개 (앱→클라우드 배치 추정) | **Google Cloud + AlloyDB + Vertex AI + Gemini**. 병원별 로컬 저장 + Federated Learning |
| **C. 서비스/피처** | 회복·스트레인 코칭, AI Coach(GPT-5.1), Lab 65 바이오마커, 팀 dashboard | 준비도/수면/활동 점수, **Oura Teams**(기업·정부), Sparta Science 인수 | 개인 대시보드, AI 인사이트, 무호흡 알림 | 개인 모니터링, Premium 리워드 | **PASTA Connect Pro** EMR 연동, FoodShot AI, 만성질환 코칭 |
| **D. API/개발자** | 공개 REST v2 (6 scope, OAuth2). FHIR 미지원, Webhook 미지원 | 공개 REST v2, 기업용 별도 포털. FHIR 명시 없음 | Partner API 비공개 | **공개 API 없음** | **PASTA Connect Pro = FHIR KR Core 국내 최초 수준**. 개발자 공개 API 없음 |
| **E. ML/AI** | GPT-5.1 AI Coach, HPML 프롬프트 시스템, Lab+웨어러블 융합 | OSSA 2.0 수면(PSG 79% 일치), AAD 운동 자동, 18경로 PPG Smart Sensing | VO₂max·무호흡·스트레스·탈수 알림 | 미공개 | **FoodShot CNN**(3,000종), 혈당 패턴 학습, Vertex AI + Gemini 임상 NLP |
| **F. 임상/EHR** | 2025.04 ECG 510(k). FDA 혈압 경고. ClinicalTrials 등록 | 브리검 PSG 검증, 도쿄대 연구. EHR 직접 통합 X | 임상 통합 X | KC 안전 인증 (의료기기 미확인) | **9개 상급종합병원 EMR 연동(2025.05)**, 분당서울대·삼성서울·경희대 등. FHIR KR Core 국내 선도. FDA Class II SW(2023) |

---

## 플랫폼별 핵심 인사이트 (Vita 관점)

### WHOOP
데이터 인프라 진지함의 모범. Iceberg + EMR + Snowflake로 PB급 시계열을 실시간 + 배치 + ML 동시 소비. Glacierbase 같은 자체 스키마 마이그레이션 도구까지 내재화. 단점: API에 FHIR 미지원·웹훅 없음 → 임상 연동 속도 ↓.

### Oura Ring
**소비자 → 기업 → 연구로 사다리 타기 모범**. PSG 검증 데이터 직접 수집·논문화 → Brigham Women's·도쿄대 신뢰도 → Oura Teams + 파트너 API 포털 분리. Vita도 PSG 검증 1건 집행하면 B2B 협상력 달라짐.

### RingConn
구독료 0 + 펌웨어 업데이트로 기능 추가(VO₂max·무호흡). 단 공개 API 없음 → 개발자 생태계 실패. **Vita가 공개 API 먼저 열면 차별화**.

### VitalRing (ZTAcom 현재)
센서 스펙은 경쟁사 동등하나 **플랫폼 레이어 0**. 공개 API 없음, FHIR 없음, 임상 검증 없음, ML 미공개. 즉 **Vita가 들어올 공간 완전 비어있음**.

### Kakao PASTA
**가장 중요한 레퍼런스**. FHIR KR Core + EMR 연동 + Federated Learning + Google Cloud — 한국 헬스케어 B2B가 원하는 아키텍처 언어. PASTA 설계를 VitalRing 데이터에 그대로 적용하면 병원 진입 시 언어 일치.

---

## Vita가 채택할 설계 원칙 5개

### 1. 데이터 레이어를 앱과 독립 설계
WHOOP처럼 데이터 파이프라인(TimeSeries DB)을 앱 UI와 분리. B2B API·ML 학습·EHR 연동을 앱 재빌드 없이 추가 가능. Supabase 위에 TimescaleDB 확장 조기 도입.

### 2. FHIR KR Core 호환을 처음부터
바이오마커를 FHIR Observation 리소스 스키마로 저장. 병원 B2B 계약 시 즉답 가능. 분당서울대·삼성서울급 진입 허들.

### 3. Raw 보존 + 파생 지표 분리
Oura·WHOOP 모두 원본 PPG/가속도 + 파생 점수(수면·회복) 분리. Raw 버리면 더 좋은 알고리즘 나와도 재처리 불가. 저장 비용 < 손실 비용.

### 4. 병원 데이터는 병원 안에, 모델만 이동
PASTA + Google Cloud Federated Learning 구조가 병원 진입 결정타. Vita도 병원 측 PostgreSQL 인스턴스에 데이터 두고, 공동 모델 학습만 제공.

### 5. 기업 API 포털을 B2C 앱과 별도 운영
Oura partnersupport.ouraring.com vs 소비자 포털 분리. B2B는 SLA·웹훅·벌크 export·HIPAA BAA, B2C는 UI 중심. 한 API로 둘 다 실패.

---

## Vita 차별화 기회 3개

### 기회 1: VitalRing 링 + PASTA형 EHR 연결
링 + FHIR/EHR 병원 연동을 동시에 가진 플랫폼이 5사 중 **0**. WHOOP/Oura는 링 있고 FHIR 없음. PASTA는 FHIR 있고 링 없음. **링 + EHR = 비어있는 자리**. CHA×Kakao + Skylabs CART BP가 PASTA 생태계 진입 중이라 속도 중요.

### 기회 2: 한국 국민건강보험 데이터 연계
WHOOP/Oura는 HIRA·NHIS 청구 데이터 연동 미설계. PASTA도 EMR에만 집중, 공보험 미개척. **VitalRing 연속 바이오마커 + NHIS 청구 매핑 = 보험·제약 B2B 독보적 데이터셋**.

### 기회 3: 공개 개발자 API 선점
RingConn·VitalRing 공개 API 없음. WHOOP·Oura 공개 API 있으나 **FHIR 미지원**. **Vita가 FHIR-compliant 공개 REST API를 링 최초로 제공**하면 DTx·HIS·연구자가 Vita 위에 쌓임. 하드웨어 카피는 쉬워도 API 생태계 카피는 어려움 → 방어막.

---

## 출처 (모두 검증됨)

- WHOOP: developer.whoop.com/api, engineering.prod.whoop.com/glacierbase, FDA K243236 (ECG 510k)
- Oura: cloud.ouraring.com/docs, ouraring.com/blog/technology-in-oura-ring-4, ScienceDirect S1389945724000200 (PSG)
- RingConn: ringconn.com/blogs/news/how-smart-rings-function
- VitalRing: ztacom.com/healthcare/product.html, etnews.com/20250226000068
- Kakao PASTA: kakaocorp.com/page/detail/10934, cloud.google.com/customers/kakaohealthcare, etnews.com/20240216000164

