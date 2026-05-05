<!-- GitHub Trending: Python | 10,431 stars | +19 today -->

# bunkerity/bunkerweb

> 🛡️ Open-source and cloud-native Web Application Firewall (WAF)

## Repository Info
- **URL**: https://github.com/bunkerity/bunkerweb
- **Stars**: 10,431
- **Forks**: 596
- **Language**: Python
- **License**: GNU Affero General Public License v3.0
- **Created**: 2019-08-20
- **Updated**: 2026-05-05
- **Topics**: antibot, cybersecurity, devops, devsecops, dnsbl, docker, hardening, hosting, kubernetes, letsencrypt, modsecurity, nginx, reverse-proxy, security, security-tuning, swarm, waap, waf, web-application-firewall, web-security
- **Open Issues**: 188

## README (excerpt)
<p align="center">
	<img alt="BunkerWeb logo" src="https://github.com/bunkerity/bunkerweb/raw/v1.6.9/misc/logo.png" height=100 width=350 />
</p>

<p align="center">
	<img src="https://img.shields.io/github/v/release/bunkerity/bunkerweb?label=stable" />
	<img src="https://img.shields.io/github/v/release/bunkerity/bunkerweb?include_prereleases&label=latest" />
	<br />
	<img src="https://img.shields.io/github/last-commit/bunkerity/bunkerweb" />
	<img src="https://img.shields.io/github/issues/bunkerity/bunkerweb">
	<img src="https://img.shields.io/github/issues-pr/bunkerity/bunkerweb">
	<br />
	<img src="https://img.shields.io/github/actions/workflow/status/bunkerity/bunkerweb/dev.yml?branch=dev&label=CI%2FCD%20dev" />
	<img src="https://img.shields.io/github/actions/workflow/status/bunkerity/bunkerweb/staging.yml?branch=staging&label=CI%2FCD%20staging" />
	<br />
	<a href="https://www.bestpractices.dev/projects/8001">
		<img src="https://www.bestpractices.dev/projects/8001/badge">
	</a>
	<a href="https://gitrated.com/bunkerity/bunkerweb"><img src="https://gitrated.com/bunkerity/bunkerweb/badge" alt="GitRated rating" /></a>
</p>

<p align="center">
	🌐 <a href="https://www.bunkerweb.io/?utm_campaign=self&utm_source=github">Website</a>
	 &#124;
	🤝 <a href="https://panel.bunkerweb.io/?utm_campaign=self&utm_source=github">Panel</a>
	 &#124;
	📓 <a href="https://docs.bunkerweb.io/?utm_campaign=self&utm_source=github">Documentation</a>
	 &#124;
	👨‍💻 <a href="https://demo.bunkerweb.io/?utm_campaign=self&utm_source=github">Demo</a>
	 &#124;
	📱 <a href="https://demo-ui.bunkerweb.io/?utm_campaign=self&utm_source=github">Demo UI</a>
	 &#124;
	🧩 <a href="https://github.com/bunkerity/bunkerweb-templates">Templates</a>
	 &#124;
	🛡️ <a href="https://github.com/bunkerity/bunkerweb/raw/v1.6.9/examples">Examples</a>
	<br/>
	💬 <a href="https://discord.com/invite/fTf46FmtyD">Chat</a>
	 &#124;
	📝 <a href="https://github.com/bunkerity/bunkerweb/discussions">Forum</a>
	 &#124;
	📝 <a href="https://community.bunkerweb.io/?utm_campaign=self&utm_source=github">Community</a>
	 &#124;
	🗺️ <a href="https://www.bunkerweb.io/threatmap/?utm_campaign=self&utm_source=github">Threatmap</a>
	&#124;
	📊 <a href="https://status.bunkerweb.io/?utm_campaign=self&utm_source=github">Status</a>
	&#124;
	🔎 <a href="https://forms.gle/e3VgymAteYPnwM1j9">Feedback</a>
</p>

> 🛡️ Make security by default great again!

# BunkerWeb

<p align="center">
	<img alt="Overview banner" src="https://github.com/bunkerity/bunkerweb/raw/v1.6.9/docs/assets/img/intro-overview.svg" />
</p>

BunkerWeb is a next-generation, open-source Web Application Firewall (WAF).

Being a full-featured web server (based on [NGINX](https://nginx.org/) under the hood), it will protect your web services to make them "secure by default." BunkerWeb integrates seamlessly into your existing environments ([Linux](https://docs.bunkerweb.io/1.6.9/integrations/?utm_campaign=self&utm_source=github#linux), [Docker](https://docs.bunkerweb.io/1.6.9/integrations/?utm_campaign=self&utm_source=github#docker), [Swarm](https://docs.bunkerweb.io/1.6.9/integrations/?utm_campaign=self&utm_source=github#swarm), [Kubernetes](https://docs.bunkerweb.io/1.6.9/integrations/?utm_campaign=self&utm_source=github#kubernetes), …) as a reverse proxy and is fully configurable (don't panic, there is an [awesome web UI](https://docs.bunkerweb.io/1.6.9/web-ui/?utm_campaign=self&utm_source=github) if you don't like the CLI) to meet your own use cases. In other words, cybersecurity is no longer a hassle.

BunkerWeb contains primary [security features](https://docs.bunkerweb.io/1.6.9/advanced/?utm_campaign=self&utm_source=github#security-tuning) as part of the core but can be easily extended with additional ones thanks to a [plugin system](https://docs.bunkerweb.io/1.6.9/plugins/?utm_campaign=self&utm_source=github).

## Why BunkerWeb?

https://github.com/user-attachments/assets/c3fed740-28d8-4335-ab05-113a9e815b4f

- **Easy integration in