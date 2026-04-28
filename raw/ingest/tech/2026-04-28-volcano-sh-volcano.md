<!-- GitHub Trending: Go | 5,509 stars | +7 today -->

# volcano-sh/volcano

> A Cloud Native Batch System (Project under CNCF)

## Repository Info
- **URL**: https://github.com/volcano-sh/volcano
- **Stars**: 5,509
- **Forks**: 1,339
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2019-03-14
- **Updated**: 2026-04-28
- **Topics**: ai, batch-systems, bigdata, gene, golang, hpc, kubernetes, machine-learning, serving, training
- **Open Issues**: 614

## README (excerpt)
<a href="https://volcano.sh/">
    <img src="https://raw.githubusercontent.com/volcano-sh/volcano/master/docs/images/volcano-horizontal-color.png"/>
</a>

-------

[![Build Status](https://travis-ci.org/volcano-sh/volcano.svg?branch=master)](https://travis-ci.org/volcano-sh/volcano)
[![Go Report Card](https://goreportcard.com/badge/github.com/volcano-sh/volcano)](https://goreportcard.com/report/github.com/volcano-sh/volcano)
[![RepoSize](https://img.shields.io/github/repo-size/volcano-sh/volcano.svg)](https://github.com/volcano-sh/volcano)
[![Release](https://img.shields.io/github/release/volcano-sh/volcano.svg)](https://github.com/volcano-sh/volcano/releases)
[![LICENSE](https://img.shields.io/github/license/volcano-sh/volcano.svg)](https://github.com/volcano-sh/volcano/blob/master/LICENSE)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3012/badge)](https://bestpractices.coreinfrastructure.org/projects/3012)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/volcano-sh/volcano/badge)](https://scorecard.dev/viewer/?uri=github.com/volcano-sh/volcano)
[![Gurubase](https://img.shields.io/badge/Gurubase-Ask%20Volcano%20Guru-006BFF)](https://gurubase.io/g/volcano)



[Volcano](https://volcano.sh/) is a Kubernetes-native batch scheduling system, extending and enhancing the capabilities of the standard kube-scheduler. It provides a comprehensive set of features specifically designed to manage and optimize various batch and elastic workloads, including Artificial Intelligence (AI) / machine learning (ML) / deep learning (DL), bioinformatics / genomics, and other "Big Data" applications.

These workloads commonly leverage AI, Big Data, and HPC frameworks such as Spark, Flink, Ray, TensorFlow, PyTorch, Argo, MindSpore, PaddlePaddle, Kubeflow, MPI, Horovod, MXNet, KubeGene, and others, with which Volcano offers robust integration.

Volcano incorporates over fifteen years of collective experience in operating diverse high-performance workloads at scale across multiple systems and platforms. It combines proven best practices and innovative concepts from the open-source community to deliver a powerful and flexible scheduling solution.

As of 2025, Volcano has seen widespread adoption across numerous industries globally, including Internet/Cloud, Finance, Manufacturing, and Medical sectors. Many organizations and institutions are not only end-users but also active contributors to the project. Hundreds of contributors actively participate in code commits, pull request reviews, issue discussions, documentation updates, and design proposals. We encourage your participation in the ongoing development and growth of the Volcano project.


> [!NOTE]
> the scheduler is built based on [kube-batch](https://github.com/kubernetes-sigs/kube-batch);
refer to [#241](https://github.com/volcano-sh/volcano/issues/241) and [#288](https://github.com/volcano-sh/volcano/pull/288) for more detail.

![cncf_logo](docs/images/cncf-logo.png)

Volcano is an incubating project of the [Cloud Native Computing Foundation](https://cncf.io/) (CNCF). Please consider joining the CNCF if you are an organization that wants to take an active role in supporting the growth and evolution of the cloud native ecosystem. 

## Overall Architecture

![volcano](docs/images/volcano-architecture.png)

## Talks

- [Intro: Kubernetes Batch Scheduling @ KubeCon 2019 EU](https://sched.co/MPi7)
- [Volcano 在 Kubernetes 中运行高性能作业实践 @ ArchSummit 2019](https://archsummit.infoq.cn/2019/shenzhen/presentation/1817)
- [Volcano：基于云原生的高密计算解决方案 @ Huawei Connection 2019](https://e.huawei.com/cn/material/event/HC/09099dce0070415e9f26ada51b2216d7)
- [Improving Performance of Deep Learning Workloads With Volcano @ KubeCon 2019 NA](https://sched.co/UaZi)
- [Batch Capability of Kubernetes Intro @ KubeCon 2019 NA](https://sched.co/Uajv)
- [Optimizing Knowledge Distillation Training With Volcano @ KubeCon 2021 EU](https://www.youtube.com/watch?v=cDPGmhVcj7Y&t=143s)
- [