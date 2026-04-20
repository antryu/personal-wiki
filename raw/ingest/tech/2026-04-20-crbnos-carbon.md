<!-- GitHub Trending: TypeScript | 2,021 stars | +79 today -->

# crbnos/carbon

> Carbon is an open source ERP, MES and QMS for manufacturing. Perfect for complex assembly, contract manufacturing, and configure to order manufacturing.

## Repository Info
- **URL**: https://github.com/crbnos/carbon
- **Stars**: 2,021
- **Forks**: 249
- **Language**: TypeScript
- **License**: Other
- **Created**: 2024-06-03
- **Updated**: 2026-04-20
- **Topics**: business, erp, lean, management, manufacturing, mes, postgresql, qms, react-router, supabase, typescript
- **Open Issues**: 96

## README (excerpt)
<p align="center">
   <a href="https://carbon.ms">
      <img width="auto" height="100" alt="Carbon Logo" src="https://github.com/user-attachments/assets/86a5e583-adac-4bf9-8192-508a0adf2308" />
   </a>
</p>

<p align="center">
    The operating system for manufacturing
    <br />
    <br />
    <a href="https://discord.gg/yGUJWhNqzy">Discord</a>
    ·
    <a href="https://carbon.ms">Website</a>
    ·
    <a href="https://docs.carbon.ms">Documentation</a>
  </p>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Typescript-1a67f3?style=for-the-badge&logo=react&logoColor=white" alt="Typescript" />
  <img src="https://img.shields.io/badge/React-23272F?style=for-the-badge&logo=react&logoColor=white" alt="React" />
</p>

![ERP Screenshot](https://github.com/user-attachments/assets/2e09b891-d5e2-4f68-b924-a1c8ea42d24d)

![MES Screenshot](https://github.com/user-attachments/assets/b04f3644-91aa-4f74-af8d-6f3e12116a6b)

## Does the world need another ERP?

We built Carbon after years of building end-to-end manufacturing systems with off-the-shelf solutions. We realized that:

- Modern, API-first tooling didn't exist
- Vendor lock-in bordered on extortion
- There is no "perfect ERP" because each company is unique

We built Carbon to solve these problems ☝️

## Architecture

Carbon is designed to make it easy for you to extend the platform by building your own apps through our API. We provide some examples to get you started in the [examples](https://github.com/crbnos/carbon/blob/main/examples) folder.

![Carbon Functonality](https://github.com/user-attachments/assets/150c3025-ddcb-4ae4-b7b4-27c670d6cb81)

![Carbon Architecture](https://github.com/user-attachments/assets/3674b2d0-28c7-415f-a8ea-4d8c796337eb)

Features:

- [x] ERP
- [x] MES
- [x] QMS
- [x] Custom Fields
- [x] Nested BoM
- [x] Traceability
- [x] MRP
- [x] Configurator
- [x] MCP Client/Server
- [x] API
- [x] Webhooks
- [ ] Accounting
- [ ] Capacity Planning
- [ ] Simulation
- [ ] [Full Roadmap](https://github.com/orgs/crbnos/projects/1/views/1)

Technical highlights:

- [x] Unified auth and permissions across apps
- [x] Full-stack type safety (Database → UI)
- [x] Realtime database subscriptions
- [x] Attribute-based access control (ABAC)
- [x] Role-based access control (Customer, Supplier, Employee)
- [x] Row-level security (RLS)
- [x] Composable user groups
- [x] Dependency graph for operations
- [x] Third-party integrations

## Techstack

- [React Router](https://reactrouter.com) – framework
- [Typescript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com) – styling
- [Radix UI](https://radix-ui.com) - behavior
- [Supabase](https://supabase.com) - database
- [Supabase](https://supabase.com) – auth
- [Redis](https://redis.io) - cache
- [Inngest](https://inngest.com) - jobs
- [Resend](https://resend.com) – email
- [Lingui](https://lingui.dev) - i18n
- [Novu](https://novu.co) – notifications
- [Vercel](https://vercel.com) – hosting
- [Stripe](https://stripe.com) - billing


## Codebase

The monorepo follows the Turborepo convention of grouping packages into one of two folders.

1. `/apps` for applications
2. `/packages` for shared code

### `/apps`

| Package Name | Description     | Local Command         |
| ------------ | --------------- | --------------------- |
| `erp`        | ERP Application | `npm run dev`         |
| `mes`        | MES             | `npm run dev:mes`     |
| `academy`    | Academy         | `npm run dev:academy` |
| `starter`    | Starter         | `npm run dev:starter` |

### `/packages`

| Package Name        | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| `@carbon/database`  | Database schema, migrations and types                                   |
|