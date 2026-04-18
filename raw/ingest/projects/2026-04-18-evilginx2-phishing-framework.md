<!-- GitHub Trending: Go | 14,934 stars | +33 today -->

# kgretzky/evilginx2

> Standalone man-in-the-middle attack framework used for phishing login credentials along with session cookies, allowing for the bypass of 2-factor authentication

## Repository Info
- **URL**: https://github.com/kgretzky/evilginx2
- **Stars**: 14,934
- **Forks**: 2,617
- **Language**: Go
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2018-07-10
- **Updated**: 2026-04-18
- **Topics**: N/A
- **Open Issues**: 272

## README (excerpt)
<p align="center">
  <img alt="Evilginx2 Logo" src="https://raw.githubusercontent.com/kgretzky/evilginx2/master/media/img/evilginx2-logo-512.png" height="160" />
  <p align="center">
    <img alt="Evilginx2 Title" src="https://raw.githubusercontent.com/kgretzky/evilginx2/master/media/img/evilginx2-title-black-512.png" height="60" />
  </p>
</p>

# Evilginx 3.0

**Evilginx** is a man-in-the-middle attack framework used for phishing login credentials along with session cookies, which in turn allows to bypass 2-factor authentication protection.

This tool is a successor to [Evilginx](https://github.com/kgretzky/evilginx), released in 2017, which used a custom version of nginx HTTP server to provide man-in-the-middle functionality to act as a proxy between a browser and phished website.
Present version is fully written in GO as a standalone application, which implements its own HTTP and DNS server, making it extremely easy to set up and use.

<p align="center">
  <img alt="Screenshot" src="https://raw.githubusercontent.com/kgretzky/evilginx2/master/media/img/screen.png" height="320" />
</p>

## Disclaimer

I am very much aware that Evilginx can be used for nefarious purposes. This work is merely a demonstration of what adept attackers can do. It is the defender's responsibility to take such attacks into consideration and find ways to protect their users against this type of phishing attacks. Evilginx should be used only in legitimate penetration testing assignments with written permission from to-be-phished parties.

## Evilginx Pro is now available!

This is it! After over two years of development, countless delays, and hundreds of manual company verifications, concluded with multiple hurdles related to export regulations, [Evilginx Pro is finally live!](https://evilginx.com)

<p align="center">
  <a href="https://evilginx.com"><img alt="Evilginx Mastery" src="https://breakdev.org/content/images/size/w2000/2025/03/evilginx_pro_release_cover.png" height="320" /></a>
</p>

Evilginx Pro is the fruit of a passion I've had for a long time in developing offensive security tools for cybersecurity enthusiasts. The journey has just begun, and now that the product is officially released, I can focus on making it even better by implementing all the ideas I've planned for it.

### Key features:

- Out-of-the-box **phishing detection evasion** (including Chrome's Enchanced Browser Protection)
- Tested and maintained **official phishlets database**
- **Botguard** to **prevent bot traffic** by default (same concept as Cloudflare Turnstile)
- **Evilpuppet** for advanced phishing capability (Google)
- External **DNS providers** with multi-domain support
- **Website spoofing** for unauthorized requests
- **JavaScript** & **HTML obfuscation**
- **Wildcard TLS certificates**
- **Automated** server deployment
- **SQLite** database support

Find out more on the [official release blog post](https://breakdev.org/evilginx-pro-release/).

## Evilginx Mastery Training Course

If you want everything about reverse proxy phishing with **Evilginx** - check out my [Evilginx Mastery](https://academy.breakdev.org/evilginx-mastery) course!

<p align="center">
  <a href="https://academy.breakdev.org/evilginx-mastery"><img alt="Evilginx Mastery" src="https://raw.githubusercontent.com/kgretzky/evilginx2/master/media/img/evilginx_mastery.jpg" height="320" /></a>
</p>

Learn everything about the latest methods of phishing, using reverse proxying to bypass Multi-Factor Authentication. Learn to think like an attacker, during your red team engagements, and become the master of phishing with Evilginx.

Grab it here:
https://academy.breakdev.org/evilginx-mastery

## Official Gophish integration

If you'd like to use Gophish to send out phishing links compatible with Evilginx, please use the official Gophish integration with Evilginx 3.3.
You can find the custom version here in the forked repository: [Gophish with Evilginx integration](https://github.com/kgretzky/gophish/)

