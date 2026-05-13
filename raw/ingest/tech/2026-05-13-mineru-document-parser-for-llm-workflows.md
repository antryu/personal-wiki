<!-- GitHub Trending: Python | 62,900 stars | +123 today -->

# opendatalab/MinerU

> Transforms complex documents like PDFs and Office docs into LLM-ready markdown/JSON for your Agentic workflows.

## Repository Info
- **URL**: https://github.com/opendatalab/MinerU
- **Stars**: 62,900
- **Forks**: 5,298
- **Language**: Python
- **License**: Other
- **Created**: 2024-02-29
- **Updated**: 2026-05-13
- **Topics**: ai4science, document-analysis, docx, extract-data, layout-analysis, ocr, parser, pdf, pdf-converter, pdf-extractor-llm, pdf-extractor-pretrain, pdf-extractor-rag, pdf-parser, pptx, python, xlsx
- **Open Issues**: 14

## README (excerpt)
<div align="center" xmlns="http://www.w3.org/1999/html">
<!-- logo -->
<p align="center">
  <img src="https://gcore.jsdelivr.net/gh/opendatalab/MinerU@master/docs/images/MinerU-logo.png" width="300px" style="vertical-align:middle;">
</p>

<!-- icon -->

[![stars](https://img.shields.io/github/stars/opendatalab/MinerU.svg)](https://github.com/opendatalab/MinerU)
[![forks](https://img.shields.io/github/forks/opendatalab/MinerU.svg)](https://github.com/opendatalab/MinerU)
[![open issues](https://img.shields.io/github/issues-raw/opendatalab/MinerU)](https://github.com/opendatalab/MinerU/issues)
[![issue resolution](https://img.shields.io/github/issues-closed-raw/opendatalab/MinerU)](https://github.com/opendatalab/MinerU/issues)
[![PyPI version](https://img.shields.io/pypi/v/mineru)](https://pypi.org/project/mineru/)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/mineru)](https://pypi.org/project/mineru/)
[![Downloads](https://static.pepy.tech/badge/mineru)](https://pepy.tech/project/mineru)
[![Downloads](https://static.pepy.tech/badge/mineru/month)](https://pepy.tech/project/mineru)
[![OpenDataLab](https://img.shields.io/badge/webapp_on_mineru.net-blue?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM0IiBoZWlnaHQ9IjEzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIyLDljMCw1LTQsOS05LDlzLTktNC05LTksNC05LDktOSw5LDQsOSw5eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im0xMjIsOWMwLDUtNCw5LTksOXMtOS00LTktOSw0LTksOS05LDksNCw5LDl6IiBmaWxsPSIjMDEwMTAxIi8+PHBhdGggZD0ibTkxLDE4YzAsNS00LDktOSw5cy05LTQtOS05LDQtOSw5LTksOSw0LDksOXoiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJtOTEsMThjMCw1LTQsOS05LDlzLTktNC05LTksNC05LDktOSw5LDQsOSw5eiIgZmlsbD0iIzAxMDEwMSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMzksNjJjMCwxNiw4LDMwLDIwLDM4LDctNiwxMi0xNiwxMi0yNlY0OWMwLTQsMy03LDYtOGw0Ni0xMmM1LTEsMTEsMywxMSw4djMxYzAsMzctMzAsNjYtNjYsNjYtMzcsMC02Ni0zMC02Ni02NlY0NmMwLTQsMy03LDYtOGwyMC02YzUtMSwxMSwzLDExLDh2MjF6bS0yOSw2YzAsMTYsNiwzMCwxNyw0MCwzLDEsNSwxLDgsMSw1LDAsMTAtMSwxNS0zQzM3LDk1LDI5LDc5LDI5LDYyVjQybC0xOSw1djIweiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMzksNjJjMCwxNiw4LDMwLDIwLDM4LDctNiwxMi0xNiwxMi0yNlY0OWMwLTQsMy03LDYtOGw0Ni0xMmM1LTEsMTEsMywxMSw4djMxYzAsMzctMzAsNjYtNjYsNjYtMzcsMC02Ni0zMC02Ni02NlY0NmMwLTQsMy03LDYtOGwyMC02YzUtMSwxMSwzLDExLDh2MjF6bS0yOSw2YzAsMTYsNiwzMCwxNyw0MCwzLDEsNSwxLDgsMSw1LDAsMTAtMSwxNS0zQzM3LDk1LDI5LDc5LDI5LDYyVjQybC0xOSw1djIweiIgZmlsbD0iIzAxMDEwMSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9Ijg0IiB5MT0iNDEiIHgyPSI3NSIgeTI9IjEyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZTJlMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ijg0IiB5MT0iNDEiIHgyPSI3NSIgeTI9IjEyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZTJlMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9Ijg0IiB5MT0iNDEiIHgyPSI3NSIgeTI9IjEyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZTJlMmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=&labelColor=white)](https://mineru.net/OpenSourceTools/Extractor?source=github)
[![HuggingFace](https://img.shields.io/badge/Demo_on_HuggingFace-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABYCAMAAACkl9t/AAAAk1BMVEVHcEz/nQv/nQv/nQr/nQv/nQr/nQv/nQv/nQr/wRf/txT/pg7/yRr/rBD/zRz/ngv/oAz/zhz/nwv/txT/ngv/0B3+zBz/nQv/0h7/wxn/vRb/thXkuiT/rxH/pxD/ogzcqyf/nQvTlSz/czCxky7/SjifdjT/Mj3+Mj3wMj15aTnDNz+DSD9RTUBsP0FRO0Q6O0WyIxEIAAAAGHRSTlMADB8zSWF3krDDw8TJ1NbX5efv8ff9/fxKDJ9uAAAGKklEQVR42u2Z63qjOAyGC4RwCOfB2JAGqrSb2WnTw/1f3UaWcSGYNKTdf/P+mOkTrE+yJBulvfvLT2A5ruenaVHyIks33npl/6C4s/ZLAM45SOi/1FtZPyFur1OYofBX3w7d54Bxm+E8db+nDr12ttmESZ4zludJEG5S7TO72YPlKZFyE+YCYUJTBZsMiNS5Sd7NlDmKM2Eg2JQg8awbglfqgbhArjxkS7dgp2RH6hc9AMLdZYUtZN5DJr4molC8BfKrEkPKEnEVjLbgW1fLy77ZVOJagoIcLIl+IxaQZGjiX597HopF5CkaXVMDO9Pyix3AFV3kw4lQLCbHuMovz8Fal