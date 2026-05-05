<!-- GitHub Trending: Python | 6,343 stars | +41 today -->

# PriorLabs/TabPFN

> ⚡ TabPFN: Foundation Model for Tabular Data ⚡

## Repository Info
- **URL**: https://github.com/PriorLabs/TabPFN
- **Stars**: 6,343
- **Forks**: 638
- **Language**: Python
- **License**: Other
- **Created**: 2022-07-01
- **Updated**: 2026-05-05
- **Topics**: data-science, foundation-models, machine-learning, tabpfn, tabular-data
- **Open Issues**: 34

## README (excerpt)
# TabPFN

[![PyPI version](https://badge.fury.io/py/tabpfn.svg)](https://badge.fury.io/py/tabpfn)
[![Downloads](https://pepy.tech/badge/tabpfn)](https://pepy.tech/project/tabpfn)
[![Discord](https://img.shields.io/discord/1285598202732482621?color=7289da&label=Discord&logo=discord&logoColor=ffffff)](https://discord.gg/BHnX2Ptf4j)
[![Documentation](https://img.shields.io/badge/docs-priorlabs.ai-blue)](https://priorlabs.ai/docs)
[![colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/PriorLabs/TabPFN/blob/main/examples/notebooks/TabPFN_Demo_Local.ipynb)
[![Python Versions](https://img.shields.io/badge/python-3.9%20%7C%203.10%20%7C%203.11%20%7C%203.12%20%7C%203.13-blue)](https://pypi.org/project/tabpfn/)

<img src="https://github.com/PriorLabs/tabpfn-extensions/blob/main/tabpfn_summary.webp" width="80%" alt="TabPFN Summary">

## Quick Start

### Interactive Notebook Tutorial
> [!TIP]
>
> Dive right in with our interactive Colab notebook! It's the best way to get a hands-on feel for TabPFN, walking you through installation, classification, and regression examples.
>
> [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/PriorLabs/TabPFN/blob/main/examples/notebooks/TabPFN_Demo_Local.ipynb)

> ⚡ **GPU Recommended**:
> For optimal performance, use a GPU (even older ones with ~8GB VRAM work well; 16GB needed for some large datasets).
> On CPU, only small datasets (≲1000 samples) are feasible.
> No GPU? Use our free hosted inference via [TabPFN Client](https://github.com/PriorLabs/tabpfn-client).

### Installation
Official installation (pip)
```bash
pip install tabpfn
```
OR installation from source
```bash
pip install "tabpfn @ git+https://github.com/PriorLabs/TabPFN.git"
```
OR local development installation: First [install uv](https://docs.astral.sh/uv/getting-started/installation) (version 0.10.0 or higher recommended), which we use for development, then run
```bash
git clone https://github.com/PriorLabs/TabPFN.git --depth 1
cd TabPFN
uv sync
```

### Basic Usage

To use our default TabPFN-2.6 model, trained purely on synthetic data:

```python
from tabpfn import TabPFNClassifier, TabPFNRegressor

clf = TabPFNClassifier()
clf.fit(X_train, y_train)  # downloads checkpoint on first use
predictions = clf.predict(X_test)

reg = TabPFNRegressor()
reg.fit(X_train, y_train)  # downloads checkpoint on first use
predictions = reg.predict(X_test)
```

To use other model versions (e.g. TabPFN-2.5):

```python
from tabpfn import TabPFNClassifier, TabPFNRegressor
from tabpfn.constants import ModelVersion

classifier = TabPFNClassifier.create_default_for_version(ModelVersion.V2_5)
regressor = TabPFNRegressor.create_default_for_version(ModelVersion.V2_5)
```

For complete examples, see the [tabpfn_for_binary_classification.py](https://github.com/PriorLabs/TabPFN/tree/main/examples/tabpfn_for_binary_classification.py), [tabpfn_for_multiclass_classification.py](https://github.com/PriorLabs/TabPFN/tree/main/examples/tabpfn_for_multiclass_classification.py), and [tabpfn_for_regression.py](https://github.com/PriorLabs/TabPFN/tree/main/examples/tabpfn_for_regression.py) files.


### Usage Tips

- **Use batch prediction mode**: Each `predict` call recomputes the training set. Calling `predict` on 100 samples separately is almost 100 times slower and more expensive than a single call. If the test set is very large, split it into chunks of 1000 samples each.
- **Avoid data preprocessing**: Do not apply data scaling or one-hot encoding when feeding data to the model.
- **Use a GPU**: TabPFN is slow to execute on a CPU. Ensure a GPU is available for better performance.
- **Mind the dataset size**: TabPFN works best on datasets with fewer than 100,000 samples and 2000 features. For larger datasets, we recommend looking at the [Large datasets guide](https://github.com/PriorLabs/tabpfn-extensions/blob/main/examples/large_datasets/large_datase