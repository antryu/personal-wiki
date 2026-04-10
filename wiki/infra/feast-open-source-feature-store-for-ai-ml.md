# Feast: Open Source Feature Store for AI/ML

> Feast is an open-source feature store for machine learning that enables consistent feature management for model training and real-time inference. It addresses data leakage risks, abstracts infrastructure complexity, and provides scalable offline/online feature storage. Last updated: 2026-04-10

## Overview

### Repository Info
- **URL**: https://github.com/feast-dev/feast  
- **Stars**: 6,940  
- **Forks**: 1,294  
- **Language**: Python  
- **License**: Apache License 2.0  
- **Created**: 2018-12-10  
- **Updated**: 2026-04-10  
- **Topics**: big-data, data-engineering, data-quality, data-science, feature-store, features, machine-learning, ml, mlops, python  
- **Open Issues**: 345  

---

### Core Functionality
Feast provides infrastructure for managing machine learning features across training and serving workflows. Key capabilities include:
- **Offline/Online Store Integration**: Processes historical data for batch training and powers real-time predictions with low-latency online storage.
- **Point-in-Time Correctness**: Prevents data leakage by ensuring temporal consistency in feature joins.
- **Infrastructure Abstraction**: Decouples feature definitions from storage systems (e.g., Snowflake, AWS, GCP).

---

### Architecture
![Feast Architecture](https://raw.githubusercontent.com/feast-dev/feast/master/docs/assets/feast_marchitecture.png)  
*Minimal deployment architecture. For cloud-specific configurations, see [documentation](https://docs.feast.dev/how-to-guides/feast-snowflake-gcp-aws).*

---

### Getting Started
1. **Install Feast**  
   ```bash
   pip install feast
   ```

2. **Initialize Feature Repository**  
   ```bash
   feast init my_feature_repo
   cd my_feature_repo/feature_repo
   ```

3. **Deploy Feature Store**  
   ```bash
   feast apply
   ```

4. **Web UI (Experimental)**  
   ![Web UI Preview](https://raw.githubusercontent.com/feast-dev/feast/master/ui/sample.p)

---

### Community & Documentation
- [Slack](https://communityinviter.com/apps/feastopensource/feast-the-open-source-feature-store): Join the community  
- [Documentation](https://docs.feast.dev/)  
- [DeepWiki](https://deepwiki.com/feast-dev/feast)  

## Key Points
- Ensures feature consistency between training and inference pipelines  
- Mitigates data leakage risks with temporal data joins  
- Supports multi-cloud infrastructure (AWS, GCP, Snowflake)  
- Actively maintained with 345 open issues for community contribution  

## Sources
- [GitHub](https://github.com/feast-dev/feast)  
- [원본](raw/ingest/infra/2026-04-10-feast-open-source-feature-store-for-ai-ml.md)