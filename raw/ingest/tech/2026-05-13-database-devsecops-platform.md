<!-- GitHub Trending: Go | 14,014 stars | +21 today -->

# bytebase/bytebase

> World's most advanced database DevSecOps solution for Developer, Security, DBA and Platform Engineering teams. The GitHub/GitLab for database DevSecOps.

## Repository Info
- **URL**: https://github.com/bytebase/bytebase
- **Stars**: 14,014
- **Forks**: 938
- **Language**: Go
- **License**: Other
- **Created**: 2021-01-27
- **Updated**: 2026-05-13
- **Topics**: cicd, data-masking, data-security, database-access, dbeaver, devsecops, flyway, gitops, liquibase, mongodb, mysql, oracle, pam, postgresql, schema-migrations, security, snowflake, sql-client, sqlserver, tidb
- **Open Issues**: 151

## README (excerpt)
<h1 align="center">
  <a href="https://www.bytebase.com?source=github" target="_blank">
    <img alt="Bytebase" src="https://raw.githubusercontent.com/bytebase/bytebase/main/docs/assets/banner.webp" />
  </a>
</h1>

<p align="center">
  <b>Database CI/CD for DevOps teams</b><br>
  Manage database schema changes with confidence
</p>

<p align="center">
  <a href="https://docs.bytebase.com/get-started/self-host-vs-cloud" target="_blank">⚙️ Install</a> •
  <a href="https://docs.bytebase.com">📚 Docs</a> •
  <a href="https://demo.bytebase.com">🎮 Demo</a> •
  <a href="https://discord.gg/huyw7gRsyA">💬 Discord</a> •
  <a href="https://www.bytebase.com/request-demo/">🙋‍♀️ Book Demo</a>
</p>

<p align="center">
  <a href="https://goreportcard.com/report/github.com/bytebase/bytebase">
    <img alt="go report" src="https://goreportcard.com/badge/github.com/bytebase/bytebase" />
  </a>
  <a href="https://artifacthub.io/packages/search?repo=bytebase">
    <img alt="Artifact Hub" src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/bytebase" />
  </a>
  <a href="https://github.com/bytebase/bytebase">
    <img alt="Github Stars" src="https://img.shields.io/github/stars/bytebase/bytebase?logo=github">
  </a>
</p>

---

## What is Bytebase?

Bytebase is an open-source database DevOps tool, it's the **only database CI/CD project** included by the [CNCF Landscape](https://landscape.cncf.io/?selected=bytebase&item=app-definition-and-development--continuous-integration-delivery--bytebase) and [Platform Engineering](https://platformengineering.org/tools/bytebase).

It offers a web-based collaboration workspace to help DBAs and Developers manage the lifecycle of application database schemas.

<h1 align="center">
  <img alt="Bytebase" src="https://raw.githubusercontent.com/bytebase/bytebase/main/docs/assets/fish.webp" />
</h1>

## Key Features

### 🔄 **Database CI/CD**

- **GitOps Integration**: Native GitHub/GitLab integration for database-as-code workflows
- **Migration Management**: Automated schema migration with rollback support
- **SQL Review**: 200+ lint rules to enforce SQL standards and best practices

### 🔒 **Security & Compliance**

- **Data Masking**: Advanced column-level masking for sensitive data protection
- **Access Control**: Fine-grained RBAC with project and workspace-level permissions
- **Audit Logging**: Complete audit trail of all database activities

### 🎯 **Developer Experience**

- **Web SQL Editor**: Feature-rich IDE for database development
- **Batch Changes**: Apply changes across multiple databases and tenants
- **API & Terraform**: Full API access and Terraform provider for automation

### 📊 **Operations**

- **Multi-Database Support**: PostgreSQL, MySQL, MongoDB, Redis, Snowflake, and more
- **Drift Detection**: Automatic detection of schema drift across environments
- **Admin Mode**: CLI-like experience without bastion setup

## Quick Start

### Docker

```bash
docker run --init \
  --name bytebase \
  --publish 8080:8080 \
  --volume ~/.bytebase/data:/var/opt/bytebase \
  bytebase/bytebase:latest
```

### Kubernetes

```bash
helm install bytebase bytebase/bytebase
```

Visit [http://localhost:8080](http://localhost:8080) and follow the setup wizard.

## Documentation

- [Installation Guide](https://docs.bytebase.com/get-started/self-host-vs-cloud)
- [Tutorials](https://docs.bytebase.com/tutorials)
- [API Reference](https://docs.bytebase.com/api/overview)
- [FAQ](https://docs.bytebase.com/faq)

## The Bytebase Family

- **[Bytebase Console](https://www.bytebase.com)**: Web-based GUI for database lifecycle management
- **[SQL Review Action](https://github.com/bytebase/sql-review-action)**: GitHub Action for PR-time SQL review
- **[Terraform Provider](https://registry.terraform.io/providers/bytebase/bytebase/latest/docs)**: Infrastructure as code for Bytebase resources

## Use Cases

### For Development Teams

- Implement database schema version control
- Automate database deployments 