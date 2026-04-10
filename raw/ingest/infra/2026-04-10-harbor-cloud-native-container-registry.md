<!-- GitHub Trending: Go | 28,224 stars | +223 today -->

# goharbor/harbor

> An open source trusted cloud native registry project that stores, signs, and scans content.

## Repository Info
- **URL**: https://github.com/goharbor/harbor
- **Stars**: 28,225
- **Forks**: 5,188
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2016-01-28
- **Updated**: 2026-04-10
- **Topics**: cloud-native, cncf, cncf-project, container, container-management, container-registry, containers, docker, hacktoberfest, helm, kubernetes, registry
- **Open Issues**: 829

## README (excerpt)
# Harbor
[![CI](https://github.com/goharbor/harbor/actions/workflows/CI.yml/badge.svg)](https://github.com/goharbor/harbor/actions/workflows/CI.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/goharbor/harbor)](https://goreportcard.com/report/github.com/goharbor/harbor)
[![Coverage Status](https://codecov.io/gh/goharbor/harbor/branch/main/graph/badge.svg)](https://codecov.io/gh/goharbor/harbor)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/2095/badge)](https://bestpractices.coreinfrastructure.org/projects/2095)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/792fe1755edc4d6e91f4c3469f553389)](https://www.codacy.com/gh/goharbor/harbor/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=goharbor/harbor&amp;utm_campaign=Badge_Grade)
![Code scanning - action](https://github.com/goharbor/harbor/workflows/Code%20scanning%20-%20action/badge.svg)
![OCI Distribution Conformance Tests](https://github.com/goharbor/harbor/workflows/CONFORMANCE_TEST/badge.svg)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgoharbor%2Fharbor.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fgoharbor%2Fharbor?ref=badge_shield)
[![Helm Chart on Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/harbor)](https://artifacthub.io/packages/helm/harbor/harbor)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/goharbor/harbor/badge)](https://scorecard.dev/viewer/?uri=github.com/goharbor/harbor)
</br>

|![notification](https://raw.githubusercontent.com/goharbor/website/master/docs/img/readme/bell-outline-badged.svg)Community Meeting|
|------------------|
|The Harbor Project holds bi-weekly community calls in two different timezones. To join the community calls or to watch previous meeting notes and recordings, please visit the [meeting schedule](https://github.com/goharbor/community/blob/master/MEETING_SCHEDULE.md).|

</br> </br>

**Note**: The `main` branch may be in an *unstable or even broken state* during development.
Please use [releases](https://github.com/goharbor/harbor/releases) instead of the `main` branch in order to get a stable set of binaries.

<img alt="Harbor" src="https://raw.githubusercontent.com/goharbor/website/master/docs/img/readme/harbor_logo.png">

Harbor is an open source trusted cloud native registry project that stores, signs, and scans content. Harbor extends the open source Docker Distribution by adding the functionalities usually required by users such as security, identity and management. Having a registry closer to the build and run environment can improve the image transfer efficiency. Harbor supports replication of images between registries, and also offers advanced security features such as user management, access control and activity auditing.

Harbor is hosted by the [Cloud Native Computing Foundation](https://cncf.io) (CNCF). If you are an organization that wants to help shape the evolution of cloud native technologies, consider joining the CNCF. For details about who is involved and how Harbor plays a role, read the CNCF
[announcement](https://www.cncf.io/blog/2018/07/31/cncf-to-host-harbor-in-the-sandbox/).

## Features

* **Cloud native registry**: With support for both container images and [Helm](https://helm.sh) charts, Harbor serves as registry for cloud native environments like container runtimes and orchestration platforms.
* **Role based access control**: Users access different repositories through 'projects' and a user can have different permission for images or Helm charts under a project.
* **Policy based replication**: Images and charts can be replicated (synchronized) between multiple registry instances based on policies with using filters (repository, tag and label). Harbor automatically retries a replication if it encounters any errors. This can be used to assist loadbalancing, achieve high availability, and facilitate multi-datacenter de