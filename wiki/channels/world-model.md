# #world-model 위키

## 핵심 주제 요약
- **_y Holdings**의 투자본부와 개발본부가 JEPA (Joint Embedding Predictive Architecture)와 GLP (Generative Latent Predictor)를 비교하여 S&P500 트레이딩 전략에 적용하는 프로젝트 진행 중.
- Optuna를 사용해 하이퍼파라미터 최적화를 수행 중이며, 현재 GLP가 JEPA보다 우수한 성능을 보임.
- 공개 GitHub repo의 구조와 내용에 대한 논의 및 결정.

## 주요 의사결정 사항
- **Option B (선택적 공개)**: Public repo로 JEPA vs GLP 비교 코드, 학습 결과, 차트 등을 공유하고, 실제 백테스트 로직과 라이브 트레이딩 코드는 비공개로 유지하기로 결정.
- Optuna 최적화 결과를 기다려서, 성능이 좋으면 Public repo를 만들고, 그렇지 않으면 스킵하기로 함.

## 공유된 링크/리소스
- GitHub Repo 예시: `github.com/antryu/jepa-vs-glp`

## 미완료 작업
1. **Optuna 완료 대기 (3일)**
   - 최적 α, β 찾기
   - 결과 정리
2. **Public repo 준비 (1일)**
   - 핵심 코드만 정리
   - README 작성
   - 샘플 데이터 생성
3. **포스팅 (1일)**
   - LinkedIn + X에 포스팅
   - GitHub 링크 공유
   - "Full backtest results in my trading (not shared)" 메시지 포함

## 인사이트
- **GLP가 JEPA보다 우수한 성능을 보임**: GLP의 β (reconstruction loss)를 0.1로 설정했을 때, val_loss가 5.6% 개선됨.
- **Decoder의 역할**: Decoder 추가 자체는 큰 도움이 되지 않았지만, β=0.1로 거의 끄면 약간의 개선 효과가 있음.
- **Hyperparameters 조정**: 남은 15 trials에서 β를 더 낮춰보고 (0.05?), α를 더 높여보는 (0.7-0.9?) 것이 필요함.
- **논문 가능성이 있음**: GLP와 JEPA의 성능 비교 결과가 트레이딩 전략에 유용한 인사이트를 제공할 수 있어, 논문으로 발전시킬 여지가 있음.

이 프로젝트는 AI 기반 트레이딩 모델의 성능을 최적화하는 과정에서 중요한 발견들을 하고 있으며, 이를 통해 더 효과적인 투자 전략을 개발할 수 있을 것으로 보입니다.
