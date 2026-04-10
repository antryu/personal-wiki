---
title: "VAE — Variational Autoencoder"
stage: 3
order: 10
difficulty: "심화"
prerequisites: ["Stage1-입문/02-임베딩"]
---

# VAE — Auto-Encoding Variational Bayes

## 한줄 요약
인코더-디코더 구조에 확률적 잠재 변수를 도입하여, 데이터 생성과 표현 학습을 동시에 수행하는 생성 모델.

## 수학적 프레임워크

### 목표
데이터 $\mathbf{x}$의 한계 우도(marginal likelihood)를 최대화:
$$\log p_\theta(\mathbf{x}) = \text{ELBO} + D_{KL}(q_\phi(\mathbf{z}|\mathbf{x}) \| p_\theta(\mathbf{z}|\mathbf{x}))$$

### ELBO (Evidence Lower Bound)
$$\mathcal{L}(\theta, \phi; \mathbf{x}) = \mathbb{E}_{q_\phi(\mathbf{z}|\mathbf{x})}[\log p_\theta(\mathbf{x}|\mathbf{z})] - D_{KL}(q_\phi(\mathbf{z}|\mathbf{x}) \| p(\mathbf{z}))$$

- **재구성 항**: 디코더가 원본을 잘 복원하는지
- **KL 항**: 인코더의 분포가 사전 분포(N(0,I))에 가까운지

### Reparameterization Trick
$\mathbf{z} = \boldsymbol{\mu} + \boldsymbol{\sigma} \odot \boldsymbol{\epsilon}$, where $\boldsymbol{\epsilon} \sim \mathcal{N}(0, I)$

→ 샘플링을 미분 가능하게 만들어 역전파 가능!

## 구조

```
입력 x → Encoder → μ, σ → z = μ + σ·ε → Decoder → x̂
         q_φ(z|x)         reparameterize   p_θ(x|z)
```

## 구현 핵심

```python
class VAE(nn.Module):
    def encode(self, x):
        h = self.encoder(x)
        return self.fc_mu(h), self.fc_logvar(h)
    
    def reparameterize(self, mu, logvar):
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std
    
    def decode(self, z):
        return self.decoder(z)
    
    def loss(self, x, x_hat, mu, logvar):
        recon = F.binary_cross_entropy(x_hat, x, reduction='sum')
        kl = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
        return recon + kl
```

## 잠재 공간 특성
- 연속적: z를 연속적으로 변화시키면 생성 이미지도 부드럽게 변화
- 구조적: 특정 차원이 특정 속성(안경, 미소 등)에 대응
- 산술 가능: z_smiling - z_neutral + z_other ≈ z_other_smiling

## 한계와 후속
- 생성 이미지가 흐릿한 경향 (KL 항의 정규화 효과)
- → β-VAE, VQ-VAE, NVAE 등으로 개선
- → Diffusion Models가 생성 품질에서 대체

## 원문 정보
- 논문: [Auto-Encoding Variational Bayes](https://arxiv.org/abs/1312.6114)
- 발표: ICLR, 2014
- 저자: Diederik P. Kingma, Max Welling
