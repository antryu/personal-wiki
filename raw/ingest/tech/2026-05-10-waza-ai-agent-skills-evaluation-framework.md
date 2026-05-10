<!-- GitHub Trending: Go | 575 stars | +156 today -->

# microsoft/waza

> CLI / Framework for Agent Skills - create, test, measure and improve skill quality and effectiveness

## Repository Info
- **URL**: https://github.com/microsoft/waza
- **Stars**: 576
- **Forks**: 29
- **Language**: Go
- **License**: MIT License
- **Created**: 2026-02-27
- **Updated**: 2026-05-10
- **Topics**: N/A
- **Open Issues**: 23

## README (excerpt)
# Waza

A Go CLI for evaluating AI agent skills — scaffold eval suites, run benchmarks, and compare results across models.

📖 **[Getting Started / Docs](https://microsoft.github.io/waza/)**

## Installation

### Binary Install (recommended)

Download and install the latest pre-built binary with the install script:

```bash
curl -fsSL https://raw.githubusercontent.com/microsoft/waza/main/install.sh | bash
```

The script auto-detects your OS and architecture (linux/darwin/windows, amd64/arm64), downloads the binary, verifies the checksum, and installs to `/usr/local/bin` (or `~/bin` if not writable).

Or download binaries directly from the [latest release](https://github.com/microsoft/waza/releases/latest).

### Install from Source

Requires Go 1.26+:

NOTE, due to the use of LFS artifacts you cannot install waza using `go install`. To install waza, outside of a normal release, you'll need to clone the repository:

```bash
git clone https://github.com/microsoft/waza.git
cd waza

# ensure git LFS-based artifacts are available (for embedded copilot binaries)
git lfs install
git lfs pull

go build -o waza ./cmd/waza
./waza <waza command line>
```

### Azure Developer CLI (azd) Extension

Waza is also available as an [azd extension](https://learn.microsoft.com/azure/developer/azure-developer-cli/extensions/overview):

```bash
# Add the waza extension registry
azd ext source add -n waza -t url -l https://raw.githubusercontent.com/microsoft/waza/main/registry.json

# Install the extension
azd ext install microsoft.azd.waza

# Verify it's working
azd waza --help
```

Once installed, all waza commands are available under `azd waza`. For example:

```bash
azd waza init my-eval --interactive
azd waza run examples/code-explainer/eval.yaml -v
```

## Update Notifications

Waza automatically checks for new versions in the background. If an update is available, a notice appears after command output:

```
A newer version of waza is available: v0.24.0 → v0.28.0. Run: curl -fsSL ... | bash
```

The check is non-blocking (never slows commands), cached for 24 hours, and can be disabled with `--no-update-check` or `WAZA_NO_UPDATE_CHECK=1`.

## Quick Start

### For New Users: Get Started in 5 Minutes

See **[Getting Started Guide](docs/GETTING-STARTED.md)** for a complete walkthrough:

```bash
# Initialize a new project
waza init my-project && cd my-project

# Create a new skill
waza new skill my-skill

# Define the skill in skills/my-skill/SKILL.md
# Write evaluation tasks in evals/my-skill/tasks/
# Add test fixtures in evals/my-skill/fixtures/

# Run evaluations
waza run my-skill

# Check skill readiness
waza check my-skill
```

### All Commands

```bash
# Build
make build

# Initialize a project workspace
waza init [directory]

# Create a new skill
waza new skill skill-name

# Create a new eval scaffold from an existing SKILL.md
waza new eval skill-name

# Generate a task YAML by recording a prompt run
waza new task from-prompt "Explain this code and suggest fixes" evals/code-explainer/tasks/recorded-task.yaml

# Check if a skill is ready for submission
waza check skills/my-skill

# Suggest an eval suite from SKILL.md
waza suggest skills/my-skill --dry-run
waza suggest skills/my-skill --apply

# Note: 'generate' is available as an alias for 'new' (see below for new command)
# Note: Custom agents (.agent.md) are supported — see https://microsoft.github.io/waza/guides/custom-agents/

# Run evaluations (works with both skills and custom agents)
waza run examples/code-explainer/eval.yaml --context-dir examples/code-explainer/fixtures -v

# Grade output from a previous `waza run --output results.json ...`
waza grade eval.yaml --results results.json

# Compare results across models
waza compare results-gpt4.json results-sonnet.json

# Generate eval coverage grid
waza coverage --format markdown

# Count tokens in skill files
waza tokens count skills/

# Compare skill token budgets vs main
waza tokens compare main --skills --threshold 10

# Suggest tok