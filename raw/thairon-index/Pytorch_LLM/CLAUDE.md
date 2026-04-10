# PyTorch LLM 학습 실습 웹앱 - 완전 자율 구현

## 실행 모드
- 사람 확인 없이 완전 자율 실행
- 에러 발생 시 스스로 디버깅하고 해결
- 모든 결정은 스스로 판단하여 진행
- 완료될 때까지 멈추지 않음

## 프로젝트 개요
PyTorch와 LLM 오픈소스를 활용한 인터랙티브 학습 웹앱 구축.
Yann LeCun의 월드 모델 연구를 위한 사전 학습 목적.
Apple M4 Max 128GB 로컬 환경에서 실행.

## 기술 스택 (변경 금지)
- Frontend: Streamlit
- Backend: Python 3.11+
- ML: PyTorch 2.0+, Hugging Face Transformers, PEFT
- 시각화: Plotly, matplotlib
- 디바이스: MPS (Apple Silicon)

## 디렉토리 구조
```
pytorch-llm-lab/
├── app.py                 # 메인 Streamlit 앱
├── requirements.txt       # 의존성
├── config.py             # 전역 설정
├── modules/
│   ├── __init__.py
│   ├── m1_nanogpt.py     # 모듈1: nanoGPT 구현
│   ├── m2_finetune.py    # 모듈2: 파인튜닝
│   ├── m3_lora.py        # 모듈3: LoRA 구현
│   ├── m4_visualization.py # 모듈4: Representation 시각화
│   └── m5_jepa.py        # 모듈5: JEPA 미니 구현
├── components/
│   ├── __init__.py
│   ├── code_viewer.py    # 코드 에디터 컴포넌트
│   ├── training_monitor.py # 실시간 학습 모니터
│   └── visualizers.py    # 시각화 컴포넌트
├── models/
│   ├── __init__.py
│   ├── nano_gpt.py       # GPT 모델 정의
│   ├── lora_layers.py    # LoRA 레이어 구현
│   └── jepa_model.py     # JEPA 모델 정의
├── data/
│   ├── sample_korean.txt # 한국어 샘플 데이터
│   └── prepare_data.py   # 데이터 전처리
├── utils/
│   ├── __init__.py
│   ├── device.py         # MPS/CUDA/CPU 자동 감지
│   ├── tokenizer.py      # 토크나이저 유틸
│   └── metrics.py        # 평가 지표
└── tests/
    └── test_modules.py   # 각 모듈 테스트
```

## 모듈별 상세 요구사항

### 모듈 1: nanoGPT 미니 구현 (m1_nanogpt.py)
목적: Transformer 아키텍처 직접 구현으로 이해
기능:
- 순수 PyTorch로 GPT 구현 (nn.Module 상속)
- MultiHeadAttention, FeedForward, TransformerBlock 클래스
- 하이퍼파라미터 슬라이더: n_layer(1-6), n_head(1-8), n_embd(64-256)
- 한국어 문자 단위 학습 (vocab_size ~2000)
- 학습 데이터: 한국어 위키 또는 뉴스 텍스트 1MB
- 실시간 loss 그래프 (Plotly)
- 텍스트 생성 데모 버튼
- 예상 학습 시간: 2-3분 (1000 steps)

UI 구성:
```
[탭: nanoGPT 구현]
├── 좌측 사이드바: 하이퍼파라미터 슬라이더
├── 메인 영역 상단: 코드 뷰어 (접기/펴기)
├── 메인 영역 중단: [학습 시작] 버튼 + 실시간 loss 그래프
└── 메인 영역 하단: 텍스트 생성 입력창 + 결과
```

### 모듈 2: 한국어 파인튜닝 (m2_finetune.py)
목적: Hugging Face 모델 파인튜닝 파이프라인 이해
기능:
- 베이스 모델: "skt/kogpt2-base-v2" (가벼움)
- 태스크: 한국어 감성분석 (긍정/부정)
- 데이터셋: NSMC 영화 리뷰 (자동 다운로드, 1000샘플로 제한)
- Trainer 없이 직접 학습 루프 구현
- 학습률, 배치 사이즈, 에폭 조절 가능
- 학습 중 accuracy 실시간 표시
- 학습 완료 후 직접 테스트 가능
- 예상 학습 시간: 3-5분

### 모듈 3: LoRA 직접 구현 (m3_lora.py)
목적: 효율적 파인튜닝 기법 원리 이해
기능:
- LoRA 레이어 순수 구현 (nn.Module)
- 수식 설명: W' = W + BA (rank decomposition)
- 기존 Linear 레이어에 LoRA 주입하는 함수
- rank(r), alpha 파라미터 조절
- 파라미터 수 비교 시각화 (전체 vs LoRA)
- 간단한 학습으로 효과 검증
- 예상 학습 시간: 2-3분

구현할 클래스:
```python
class LoRALayer(nn.Module):
    def __init__(self, in_features, out_features, rank=4, alpha=1):
        # A: (in_features, rank), B: (rank, out_features)
        # output = x @ W + (x @ A @ B) * (alpha / rank)
```

### 모듈 4: Representation 시각화 (m4_visualization.py)
목적: LLM 내부 동작 이해, 월드 모델 준비
기능:
- 모델: "skt/kogpt2-base-v2" 또는 모듈2에서 학습한 모델
- Attention 패턴 히트맵 (레이어/헤드 선택 가능)
- Hidden states의 t-SNE/UMAP 시각화
- 유사 문장 비교 (코사인 유사도)
- 레이어별 representation 변화 애니메이션
- 토큰별 임베딩 분석

시각화 종류:
1. Attention 히트맵: 어떤 토큰이 어떤 토큰에 주목하는지
2. Layer별 representation: 입력→출력까지 변화
3. 문장 유사도 맵: 여러 문장의 representation 비교

### 모듈 5: JEPA 미니 구현 (m5_jepa.py)
목적: LeCun의 월드 모델 방향 맛보기
기능:
- I-JEPA 개념의 단순화된 구현
- 이미지 대신 텍스트 시퀀스 사용
- Context encoder + Target encoder (EMA 업데이트)
- Predictor: context representation → target representation
- 픽셀/토큰 예측이 아닌 representation 예측
- Loss: representation 공간에서의 거리
- 시각화: 예측된 representation vs 실제 representation

개념 설명 포함:
```
[기존 LLM]
입력 토큰 → 다음 토큰 예측 (이산적, 표면적)

[JEPA 방식]
입력 representation → 타겟 representation 예측 (연속적, 추상적)
```

## 공통 컴포넌트

### code_viewer.py
- st.expander로 코드 접기/펴기
- 문법 하이라이팅
- 핵심 부분 주석으로 설명

### training_monitor.py
- 실시간 loss/accuracy 그래프
- 진행률 표시
- 예상 남은 시간
- 중단 버튼

### visualizers.py
- plot_attention_heatmap()
- plot_tsne()
- plot_loss_curve()
- plot_parameter_comparison()

## 설정 (config.py)
```python
# 디바이스 자동 감지
DEVICE = "mps" if torch.backends.mps.is_available() else "cpu"

# 기본 하이퍼파라미터
DEFAULT_LR = 3e-4
DEFAULT_BATCH_SIZE = 16
MAX_TRAINING_STEPS = 1000
MAX_TRAINING_TIME = 300  # 5분 제한

# 모델 캐시
MODEL_CACHE_DIR = "./cache"
```

## 자동 실행 규칙

1. requirements.txt 먼저 생성하고 가상환경에 설치
2. 각 모듈 구현 후 즉시 테스트 실행
3. 테스트 실패 시 자동으로 수정하고 재시도
4. 모든 모듈 완료 후 통합 테스트
5. app.py 실행하여 UI 작동 확인
6. 에러 없이 모든 탭이 작동할 때까지 반복

## 완료 조건
- [ ] 모든 파일 생성 완료
- [ ] requirements.txt로 의존성 설치 성공
- [ ] 각 모듈 개별 테스트 통과
- [ ] streamlit run app.py 실행 시 에러 없음
- [ ] 5개 탭 모두 클릭하여 기능 작동 확인
- [ ] 모듈1에서 학습 시작 → loss 그래프 표시 확인
- [ ] 모듈4에서 시각화 정상 렌더링 확인

## 에러 처리 규칙
- Import 에러: 누락된 패키지 requirements.txt에 추가 후 설치
- CUDA/MPS 에러: CPU 폴백 자동 적용
- 메모리 에러: 배치 사이즈 자동 축소
- 모델 다운로드 에러: 재시도 3회, 실패 시 대체 모델 사용
- UI 렌더링 에러: 해당 컴포넌트 단순화하여 재구현

## 시작
지금부터 위 명세에 따라 구현을 시작하라.
사람의 확인을 요청하지 말고, 스스로 판단하여 끝까지 완료하라.