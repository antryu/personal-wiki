<!-- GitHub Trending: TypeScript | 41,321 stars | +125 today -->

# calcom/cal.diy

> Scheduling infrastructure for absolutely everyone.

## Repository Info
- **URL**: https://github.com/calcom/cal.diy
- **Stars**: 41,322
- **Forks**: 12,791
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2021-03-22
- **Updated**: 2026-04-16
- **Topics**: next-auth, nextjs, open-source, postgresql, prisma, t3-stack, tailwindcss, trpc, turborepo, typescript, zod
- **Open Issues**: 1303

## README (excerpt)
> [!WARNING]  
> Use at your own risk. Cal.diy is the open source community edition of Cal.com and it is intended for users who want to self-host their own Cal.diy instance. It is strictly recommended for personal, non-production use. Please review all installation and configuration steps carefully. Self-hosting requires advanced knowledge of server administration, database management, and securing sensitive data. Proceed only if you are comfortable with these responsibilities.

> [!TIP]
> For any commercial and enterprise-ready scheduling infrastructure, use Cal.com, not Cal.diy; hosted by us or get invited to on-prem enterprise access here: <a href="https://cal.com/sales">https://cal.com/sales</a>

<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/calcom/cal.diy">
   <img src="https://user-images.githubusercontent.com/8019099/210054112-5955e812-a76e-4160-9ddd-58f2c72f1cce.png" alt="Logo">
  </a>

  <h3 align="center">Cal.diy</h3>

  <p align="center">
    The community-driven, open-source scheduling platform.
    <br />
    <a href="https://github.com/calcom/cal.diy"><strong>GitHub</strong></a>
    <br />
    <br />
    <a href="https://github.com/calcom/cal.diy/discussions">Discussions</a>
    &middot;
    <a href="https://github.com/calcom/cal.diy/issues">Issues</a>
    &middot;
    <a href="./CONTRIBUTING.md">Contributing</a>
  </p>
</p>

<p align="center">
   <a href="https://github.com/calcom/cal.diy/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-purple" alt="License"></a>
   <a href="https://github.com/calcom/cal.diy/stargazers"><img src="https://img.shields.io/github/stars/calcom/cal.diy" alt="Github Stars"></a>
   <a href="https://github.com/calcom/cal.diy/pulse"><img src="https://img.shields.io/github/commit-activity/m/calcom/cal.diy" alt="Commits-per-month"></a>
   <a href="https://hub.docker.com/r/calcom/cal.diy"><img src="https://img.shields.io/docker/pulls/calcom/cal.diy" alt="Docker Pulls"></a>
   <a href="https://github.com/calcom/cal.diy/issues?q=is:issue+is:open+label:%22%F0%9F%99%8B%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8Fhelp+wanted%22"><img src="https://img.shields.io/badge/Help%20Wanted-Contribute-blue"></a>
   <a href="https://contributor-covenant.org/version/1/4/code-of-conduct/"><img src="https://img.shields.io/badge/Contributor%20Covenant-1.4-purple" /></a>
</p>

<!-- ABOUT THE PROJECT -->

## About Cal.diy

<img width="100%" alt="booking-screen" src="https://github.com/calcom/cal.diy/assets/8019099/407e727e-ff19-4ca4-bcae-049dca05cf02">

**Cal.diy** is the community-driven, fully open-source scheduling platform — a fork of [Cal.com](https://cal.com) with all enterprise/commercial code removed.

Cal.diy is **100% MIT-licensed** with no proprietary "Enterprise Edition" features. It's designed for individuals and self-hosters who want full control over their scheduling infrastructure without any commercial dependencies.

### What's different from Cal.com?

- **No enterprise features** — Teams, Organizations, Insights, Workflows, SSO/SAML, and other EE-only features have been removed
- **No license key required** — Everything works out of the box, no Cal.com account or license needed
- **100% open source** — The entire codebase is licensed under MIT, no "Open Core" split
- **Community-maintained** — Contributions are welcome and go directly into this project (see [CONTRIBUTING.md](./CONTRIBUTING.md))

> **Note:** Cal.diy is a self-hosted project. There is no hosted/managed version. You run it on your own infrastructure.

### Built With

- [Next.js](https://nextjs.org/)
- [tRPC](https://trpc.io/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma.io](https://prisma.io/)
- [Daily.co](https://daily.co/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run Cal.diy.

- Node.js (Version: >=18.x)
- PostgreSQL (