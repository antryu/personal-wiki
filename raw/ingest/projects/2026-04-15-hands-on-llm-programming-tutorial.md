<!-- GitHub Trending: Jupyter Notebook | 29,336 stars | +1,068 today -->

# Lordog/dive-into-llms

> 《动手学大模型Dive into LLMs》系列编程实践教程

## Repository Info
- **URL**: https://github.com/Lordog/dive-into-llms
- **Stars**: 29,336
- **Forks**: 3,563
- **Language**: Jupyter Notebook
- **License**: N/A
- **Created**: 2024-04-08
- **Updated**: 2026-04-15
- **Topics**: N/A
- **Open Issues**: 5

## README (excerpt)
<p align="center">
<h1 align="center">《动手学大模型》系列编程实践教程</h1>
</p>
<p align="center">
  	<a href="https://img.shields.io/badge/version-v0.1.0-blue">
      <img alt="version" src="https://img.shields.io/badge/version-v0.1.0-blue?color=FF8000?color=009922" />
    </a>
  <a >
       <img alt="Status-building" src="https://img.shields.io/badge/Status-building-blue" />
  	</a>
  <a >
       <img alt="PRs-Welcome" src="https://img.shields.io/badge/PRs-Welcome-red" />
  	</a>
   	<a href="https://github.com/Lordog/dive-into-llms/stargazers">
       <img alt="stars" src="https://img.shields.io/github/stars/Lordog/dive-into-llms" />
  	</a>
  	<a href="https://github.com/Lordog/dive-into-llms/network/members">
       <img alt="FORK" src="https://img.shields.io/github/forks/Lordog/dive-into-llms?color=FF8000" />
  	</a>
    <a href="https://github.com/Lordog/dive-into-llms/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/Lordog/dive-into-llms?color=0088ff"/>
    </a>
    <br />
</p>


<div align="center">
<p align="center">
  <a href="#项目动机">项目动机</a>/
  <a href="#教程目录">教程目录</a>/
  <a href="#贡献者列表">贡献者列表</a>
</p>
</div>

## 💡 Updates

2025/06/06  感谢各位朋友们的关注和积极反馈！我们从以下两个方面对本教程进行了更新：

- [x] 上线国产化《大模型开发全流程》公益教程（含PPT、实验手册和视频），此处特别感谢华为昇腾社区的支持！
- [x] 在原系列编程实践教程的基础上进行内容更新，并增加了新的主题（数学推理、GUI Agent、大模型对齐、隐写术等）！

## 🎯 项目动机

《动手学大模型》系列编程实践教程，由上海交通大学《自然语言处理前沿技术》（NIS8021）、《人工智能安全技术》课程（NIS3353）讲义拓展而来（教师：[张倬胜](https://bcmi.sjtu.edu.cn/home/zhangzs/)），旨在提供大模型相关的入门编程参考。本教程属公益性质、完全免费。通过简单实践，帮助同学们快速入门大模型，更好地开展课程设计或学术研究。

## 📚 教程目录

| 教程内容         | 简介                                                         | 地址                                                         |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 微调与部署       | 预训练模型微调与部署指南：想提升预训练模型在指定任务上的性能？让我们选择合适的预训练模型，在特定任务上进行微调，并将微调后的模型部署成方便使用的Demo！ | [[课件](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter1/dive-into-llm.pdf)] [[教程](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter1/README.md)] [[脚本](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter1/dive-tuning.ipynb)] |
| 提示学习与思维链 | 大模型的API调用与推理指南：“AI在线求鼓励？大模型对一些问题的回答令人大跌眼镜，但它可能只是想要一句「鼓励」” | [[课件](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter2/dive-into-prompting.pdf)] [[教程](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter2/README.md)] [[脚本](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter2/dive-prompting.ipynb)] |
| 知识编辑         | 语言模型的编辑方法和工具：想操控语言模型在对指定知识的记忆？让我们选择合适的编辑方法，对特定知识进行编辑，并将对编辑后的模型进行验证！ | [[课件](https://github.com/Lordog/dive-into-llms/blob/main/documents/chapter3/dive_edit_0410.pdf)] [[教程](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter3/README.md)]  [[脚本](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter3/dive_edit.ipynb)] |
| 数学推理         | 如何让大模型学会数学推理？让我们快速蒸馏一个迷你R1！         | [[课件](https://github.com/Lordog/dive-into-llms/blob/main/documents/chapter4/math.pdf)] [[教程](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter4/README.md)]  [[脚本](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter4/sft_math.ipynb)] |
| 模型水印         | 语言模型的文本水印：在语言模型生成的内容中嵌入人类不可见的水印 | [[课件](https://github.com/Lordog/dive-into-llms/blob/main/documents/chapter5/watermark.pdf)] [[教程](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter5/README.md)]  [[脚本](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter5/watermark.ipynb)] |
| 越狱攻击         | 想要得到更好的安全，要先从学会攻击开始。让我们了解越狱攻击如何撬开大模型的嘴！ | [[课件](https://github.com/Lordog/dive-into-llms/blob/main/documents/chapter6/dive-Jailbreak.pdf)] [[教程](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter6/README.md)] [[脚本](https://github.com/Lordog/dive-into-llms/tree/main/documents/chapter6/dive-jailbreak.ipynb)] |
| 大模型隐写       | “看不见的墨水”！想让大模型在流畅回答的同时，悄悄携带只有“自己人”