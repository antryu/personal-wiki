<!-- GitHub Trending: Go | 1,645 stars | +12 today -->

# basecamp/once

> Easy self-hosting for Docker-based web apps

## Repository Info
- **URL**: https://github.com/basecamp/once
- **Stars**: 1,645
- **Forks**: 71
- **Language**: Go
- **License**: MIT License
- **Created**: 2026-01-29
- **Updated**: 2026-04-20
- **Topics**: N/A
- **Open Issues**: 9

## README (excerpt)
# ONCE

ONCE is a platform for installing and managing Docker-based web applications.
Its goal is to make self-hosting applications as simple as possible.

As well as simplifying the initial setup, ONCE also provides automatic updates, backups, and system information.
It has a TUI interface with a dashboard for monitoring and operating your applications, as well as CLI commands for common operations should you (or your AI agent) prefer that.

ONCE runs on Linux and macOS, and can be used to run applications on a variety of hardware: a physical server, a cloud VPS, a Raspberry Pi, or your laptop, are all suitable.

ONCE comes with a set of 37signals apps built-in, but you can use it to install any compatible Docker image as well.

![Demo](.github/media/install.gif)

## Installing

The simplest way to get started with ONCE is to use the install snippet to bootstrap the tool and choose an app to install:

```sh
curl https://get.once.com | sh
```

This will download the appropriate binary for your platform, install it and its corresponding background service, and then launch it so you can do your first application install.
If the machine you're running this from doesn't already have Docker, it will install that too (on supported platforms).

### Customizing the installer behaviour

If you want to install `once` without launching it (for example, for a scripted install), you can use `ONCE_INTERACTIVE=false`:

```sh
curl https://get.once.com | ONCE_INTERACTIVE=false sh
```

### Installing manually

If you prefer to set ONCE up yourself, you can download the appropriate binary from the GitHub Releases page.
Then follow these steps to get it installed:

- Install Docker (if it's not already installed) using your preferred package manager
- Copy the `once` binary to wherever you'd like to run it from
- Register the background service by running `sudo once background install`

Then run `once` to install an app, or `once --help` to see what commands are available.

Note that if you need to use `sudo` when running Docker commands (for example, if your user is not in the `docker` group) then you'll also need to use `sudo` whenever you run `once`.

## Using ONCE to install and configure applications

On first run, ONCE will prompt you to choose an application to install.
You can pick from the built-in applications, or enter the path to a Docker image.

When entering an image path you can pick any application that works with ONCE (more on this below), so you can run additional applications or even your own custom forks of the built-in ones.

You'll need to enter a hostname for the application.
If you're installing onto a machine on the public Internet (like a cloud VPS), and you have a domain name, then you can use that.
It's a good idea to use a subdomain so that you can run multiple applications on the same domain.

For example, if you own `example.com` you might install Writebook to `books.example.com`.

Whatever hostname you choose, make sure you have a DNS entry for it which points to the machine you're installing to.
The details of how to do this will vary depending on which provider you use for your DNS, but generally you should have access to an admin interface where you can set up an `A` record with the hostname you've chosen, pointed to the IP address of your machine.
If you plan to install many applications on the same machine you could use a wildcard DNS entry for this.

> [!TIP]
> One tip if you're using Cloudflare: by default, DNS entries on Cloudflare will have the "proxy" option enabled, which means that traffic will pass through Cloudflare before reaching your server.
> ONCE works well in this setup provided you have SSL enabled end-to-end.
> So just be sure your Cloudflare SSL mode is set to "Strict (full)" if you're using its proxy option.

Once you've picked your application and entered the hostname, the rest is automatic.
ONCE will fetch, install, and boot the application, and then take you to the dashboard screen where 