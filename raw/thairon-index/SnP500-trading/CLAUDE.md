# S&P500 선물 자동매매 분석 시스템

## 프로젝트 개요
S&P500 선물 30분봉 데이터를 활용한 **BB(볼린저밴드) 하단 이탈 전략** 백테스팅 및 최적화 시스템

## 환경
- MacBook Pro 16" M4 Max 128GB + 2TB
- Python 3.11+
- 로컬 LLM: DeepSeek R1 70B (Ollama)

## ⚠️ 서버 설정 (절대 수정 금지)
**아래 설정은 이미 완료되어 있음. 절대 변경하지 말 것!**

| 서버 | 포트 | 설정 파일 |
|------|------|-----------|
| 백엔드 (FastAPI) | **8001** | `backend/main.py` |
| 프론트엔드 (Next.js) | **3002** | `frontend/.env.local` |

- `frontend/.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:8001`
- `backend/main.py`: CORS origins에 `localhost:3002` 포함
- **이 파일들을 수정하면 안 됨!**

## 데이터
- **기간**: 2020-01-01 ~ 2025-12-16 (약 6년)
- **30분봉**: 70,322개
- **저장 형식**: DuckDB (`data/sp500_multi_timeframe.duckdb`)
- **지원 타임프레임**: 5M, 10M, 15M, 30M, 45M, 60M, D

## 기술 스택
- **데이터베이스**: DuckDB (고속 분석 쿼리)
- **백테스팅**: 자체 구현 엔진 (VectorBT 스타일)
- **지표 계산**: 자체 구현 (pandas 기반)
- **최적화**: Optuna (베이지안 최적화)
- **시각화**: Plotly
- **AI 연동**: Ollama API (DeepSeek R1 70B)

## 프로젝트 구조
```
sp500-trading/
├── CLAUDE.md
├── main.py                 # CLI 메인 진입점
├── app.py                  # Streamlit 웹 대시보드
├── requirements.txt
├── data/
│   └── sp500_multi_timeframe.duckdb  # 6년 멀티타임프레임 데이터
├── src/
│   ├── __init__.py
│   ├── data_loader.py      # 데이터 로드 및 DuckDB 관리
│   ├── indicators.py       # 기술적 지표 계산
│   ├── strategy.py         # BB 하단 이탈 전략 로직
│   ├── backtest.py         # 백테스팅 엔진
│   ├── optimizer.py        # Optuna 파라미터 최적화
│   └── analyzer.py         # 결과 분석 + DeepSeek 연동
├── reports/
│   ├── backtest_report.txt
│   ├── trades.csv
│   ├── strategy_comparison.csv
│   └── charts/             # Plotly HTML 차트
├── notebooks/
│   └── analysis.ipynb
└── tests/
```

## 핵심 기능

### 1. 데이터 로드 (`data_loader.py`)
- DuckDB 멀티타임프레임 데이터 로드
- SQL 쿼리 인터페이스
- 캐싱을 통한 빠른 반복 로딩

### 2. 지표 계산 (`indicators.py`)
- 이동평균: SMA, EMA (5, 10, 20, 40, 60)
- 볼린저밴드: BB(40,2) 중심선, 상/하한선, 밴드폭
- ATR: 14기간, 20기간
- RSI, MACD, Stochastic, ADX
- 추세 기울기 (선형회귀)
- 거래량 비율

### 3. 전략 (`strategy.py`)
**사전 정의된 전략:**
- `bb_basic`: BB 기본 (고정 손절 25pt)
- `bb_atr`: BB + 3ATR(20) 손절
- `ma40_atr`: 40MA 확인 진입 + 3ATR(20) 손절
- `filtered`: 밴드폭 + 추세 필터 적용
- `conservative`: 트레일링 스탑 포함
- `aggressive`: 빠른 진입, 시간 제한

**파라미터:**
- BB 기간/표준편차
- 진입 필터: 밴드폭, 추세, 거래량, 시간대
- MA 확인 진입: 5/10/20/40 MA
- 손절: 고정 or ATR(2.5x/3x/4x, 14기간/20기간)
- 익절: BB상단/중심선/ATR 배수
- 트레일링 스탑

### 4. 백테스팅 (`backtest.py`)
- 슬리피지 0.25pt, 수수료 2.5pt 반영
- Micro E-mini 계약 ($5/포인트)
- 성과 지표: 승률, PF, Sharpe, Sortino, Calmar, MDD
- 월별/시간대별/요일별 분석

### 5. 최적화 (`optimizer.py`)
- Optuna TPE 샘플러 (베이지안 최적화)
- 목적 함수: Sharpe, 총수익, PF, Calmar, 복합점수
- 그리드 서치 옵션

### 6. 분석 및 리포트 (`analyzer.py`)
- Plotly 차트: 에쿼티 커브, 월별 수익, 드로다운, 수익 분포
- 텍스트 리포트 생성
- DeepSeek AI 분석 연동

## 자주 사용하는 명령어

### CLI 명령어
```bash
# 가상환경 활성화
source .venv/bin/activate

# 의존성 설치
pip install -r requirements.txt

# 데이터 로드 (엑셀 → DuckDB)
python main.py --load

# 백테스트 실행
python main.py --backtest --strategy bb_basic
python main.py --backtest --strategy filtered

# 전략 비교
python main.py --compare

# 파라미터 최적화
python main.py --optimize --trials 100 --objective sharpe

# 리포트 생성
python main.py --report --strategy filtered

# 빠른 분석 (DuckDB 직접 조회)
python main.py --quick

# DeepSeek AI 분석
python main.py --analyze
```

### 웹 대시보드
```bash
# Streamlit 웹앱 실행
streamlit run app.py

# 특정 포트로 실행
streamlit run app.py --server.port 8501

# 백그라운드 실행
streamlit run app.py --server.headless true &
```

**접속 주소**: http://localhost:8501 (또는 8502)

## 웹 대시보드 기능 (`app.py`)

### 탭 구성
1. **📊 대시보드**: 데이터 요약, 전략 비교 테이블, 최고 성과 전략 표시
2. **📈 차트 분석**: 인터랙티브 캔들스틱 차트, BB 밴드 시각화, BB 이탈 신호 마킹
3. **⚙️ 전략 최적화**: 파라미터 실시간 조정 UI, 즉시 백테스트 실행, 에쿼티 커브/드로다운 차트
4. **📋 거래 내역**: 전략별 거래 테이블, CSV 다운로드 기능

### 주요 기능
- **캐싱**: `@st.cache_data`로 데이터 로드 최적화
- **인터랙티브 차트**: Plotly 기반 줌/팬/호버 지원
- **실시간 파라미터 조정**: 슬라이더/셀렉트박스로 전략 파라미터 변경
- **다크 테마**: Plotly dark 템플릿 적용

## 전략 성과 비교 (최신)

| 전략 | 거래수 | 승률 | 총수익 | PF | MDD |
|------|--------|------|--------|-----|------|
| 필터링 전략 | 80 | 38.8% | +441pt | 1.29 | -313pt |
| BB + 3ATR(20) | 140 | 44.3% | +290pt | 1.14 | -299pt |
| BB 기본 | 141 | 40.4% | -46pt | 0.98 | -394pt |

**최고 수익 전략**: `filtered` (밴드폭 >0.8% + 하락추세 필터)

## 코딩 규칙

### 스타일
- 함수/변수: `snake_case`
- 클래스: `PascalCase`
- 타입 힌트 필수
- docstring 작성

### 데이터 처리
- 대용량 데이터: DuckDB SQL 쿼리 사용
- 날짜/시간: pandas Timestamp 사용
- 결측치: 명시적 처리 필수

### 백테스팅
- 미래 데이터 참조 금지 (look-ahead bias 방지)
- 슬리피지, 수수료 항상 반영
- Out-of-sample 테스트 권장

## DeepSeek 연동

```python
from src.analyzer import DeepSeekAnalyzer

deepseek = DeepSeekAnalyzer()
analysis = deepseek.analyze_results(backtest_results)
print(analysis)
```

Ollama 실행 필요:
```bash
ollama serve
ollama run deepseek-r1:70b
```

## 주의사항
- 실제 매매 전 반드시 페이퍼 트레이딩으로 검증
- 과최적화(overfitting) 경계
- 거래 비용 현실적으로 반영
- 시장 체제 변화 고려 (regime change)

## 에이전트

### API 검증 에이전트 (`/validate-api`)
프론트엔드-백엔드 연결 기능을 검증합니다.
- 백엔드 API 엔드포인트 테스트
- constraints(positionType, entryDirection) 전달 검증
- 프론트엔드 빌드 확인

상세 내용: `.claude/agents/api-validator.md`

### VBA 변환기 에이전트 (`/convert-vba`)
백테스트 최적화 결과를 키움증권 VBA 자동매매 코드에 적용합니다.
- xlsm 파일에서 VBA 코드 추출 및 분석
- 전략 파라미터 자동 수정 (ATR 배수, RSI/추세 필터, 일일 거래 제한 등)
- 수정 가이드 및 diff 리포트 생성
- 웹 UI: http://localhost:3002 → "📝 VBA 변환" 탭

**CLI 사용:**
```bash
python main.py --convert-vba --vba-strategy optimized
python main.py --auto-convert-vba --trials 100  # 최적화 후 자동 변환
```

**지원 전략:**
| 전략 | ATR 배수 | RSI/추세 필터 | 일일 거래 |
|------|---------|--------------|----------|
| optimized | 6.0 | 비활성화 | 1회 |
| conservative | 4.0 | 활성화 | 2회 |
| aggressive | 3.0 | 비활성화 | 무제한 |

상세 내용: `.claude/agents/vba-converter.md`

## TODO
- [x] 환경 세팅 (Python, DuckDB)
- [x] 엑셀 데이터 로드 및 검증
- [x] 기본 전략 백테스팅
- [x] 파라미터 최적화
- [x] DeepSeek 연동
- [x] 자동 리포트 생성
- [x] Streamlit 웹 대시보드
- [x] 추가 전략 구현 (상단 이탈, 양방향) - 4방향 전략 구현 완료
- [x] VBA 변환기 (백테스트 → 키움증권 VBA 자동 적용)
- [ ] 실시간 신호 생성 (추후)
