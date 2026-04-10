# Vercel 배포

⏺ 🏗️ 시스템 전체 구조 - 간단 설명

1. 전체 흐름

사용자 브라우저 → 프론트엔드(React) → 백엔드(Express API) → 데이터 응답
↑                ↑                    ↑
Vercel 배포      Vercel 배포         목데이터

1. 프론트엔드 (React)
- 위치: /Users/andrew/Thairon/espresso-bi-frontend/
- 역할: 화면 표시, 사용자 인터페이스
- 배포: Vercel에서 자동 빌드 & 배포
- 데이터 요청: fetch() 로 백엔드 API 호출
1. 백엔드 (Express.js)
- 위치: /Users/andrew/Thairon/espresso-bi-backend/
- 역할: API 서버, 데이터 제공
- 구조:
src/
├── app.ts ← 메인 서버 설정
├── controllers/ ← 데이터 로직 (목데이터 여기 있음!)
├── routes/ ← API 엔드포인트 정의
└── index.ts ← 서버 시작점
1. 데이터 흐름 예시
2. 사용자가 "재고관리" 페이지 방문
3. 프론트엔드가 fetch('/api/inventory') 호출
4. 백엔드 routes/inventory.ts 가 받음
5. controllers/inventory.ts 에서 12개 제품 데이터 반환
6. 프론트엔드가 데이터 받아서 화면에 표시
7. 현재 문제
- 로컬: localhost:3001 → 풍부한 목데이터 ✅
- Vercel: 배포된 버전 → 기본 데이터만 ❌
1. 해결 방법

git push  ← 이것만 하면 Vercel이 자동 배포!

핵심: 백엔드 코드 변경 = Vercel 재배포 필요! 🚀