<!-- GitHub Trending: Go | 34,536 stars | +41 today -->

# harness/harness

> Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.

## Repository Info
- **URL**: https://github.com/harness/harness
- **Stars**: 34,536
- **Forks**: 2,971
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2014-02-07
- **Updated**: 2026-04-11
- **Topics**: build-automation, build-pipelines, ci, ci-cd, code-repository, continuous-delivery, continuous-integration, docker, git, go, hacktoberfest, scm
- **Open Issues**: 88

## README (excerpt)
# Harness
Harness Open Source is an open source development platform packed with the power of code hosting, automated DevOps pipelines, hosted development environments (Gitspaces), and artifact registries.

## Overview
Harness Open source is an open source development platform packed with the power of code hosting, automated DevOps pipelines, Gitspaces, and artifact registries.


## Running Harness locally
> The latest publicly released docker image can be found on [harness/harness](https://hub.docker.com/r/harness/harness).

To install Harness yourself, simply run the command below. Once the container is up, you can visit http://localhost:3000 in your browser.

```bash
docker run -d \
  -p 3000:3000 \
  -p 3022:3022 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/harness:/data \
  --name harness \
  --restart always \
  harness/harness
```
> The Harness image uses a volume to store the database and repositories. It is highly recommended to use a bind mount or named volume as otherwise all data will be lost once the container is stopped.

See [developer.harness.io](https://developer.harness.io/docs/open-source) to learn how to get the most out of Harness.

## Where is Drone?

Harness Open Source represents a massive investment in the next generation of Drone. Where Drone focused solely on continuous integration, Harness adds source code hosting, developer environments (gitspaces), and artifact registries; providing teams with an end-to-end, open source DevOps platform.

The goal is for Harness to eventually be at full parity with Drone in terms of pipeline capabilities, allowing users to seamlessly migrate from Drone to Harness.

But, we expect this to take some time, which is why we took a snapshot of Drone as a feature branch [drone](https://github.com/harness/harness/tree/drone) ([README](https://github.com/harness/harness/blob/drone/.github/readme.md)) so it can continue development.

As for Harness, the development is taking place on the [main](https://github.com/harness/harness/tree/main) branch.

For more information on Harness, please visit [developer.harness.io](https://developer.harness.io/).

For more information on Drone, please visit [drone.io](https://www.drone.io/).

## Harness Open Source Development
### Pre-Requisites

Install the latest stable version of Node and Go version 1.20 or higher, and then install the below Go programs. Ensure the GOPATH [bin directory](https://go.dev/doc/gopath_code#GOPATH) is added to your PATH.

Install protobuf
- Check if you've already installed protobuf ```protoc --version```
- If your version is different than v3.21.11, run ```brew unlink protobuf```
- Get v3.21.11 ```curl -s https://raw.githubusercontent.com/Homebrew/homebrew-core/9de8de7a533609ebfded833480c1f7c05a3448cb/Formula/protobuf.rb > /tmp/protobuf.rb```
- Install it ```brew install /tmp/protobuf.rb```
- Check out your version ```protoc --version```

Install protoc-gen-go and protoc-gen-go-rpc:

- Install protoc-gen-go v1.28.1 ```go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28.1```
(Note that this will install a binary in $GOBIN so make sure $GOBIN is in your $PATH)

- Install protoc-gen-go-grpc v1.2.0 ```go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2.0```

```bash
$ make dep
$ make tools
```

### Build

First step is to build the user interface artifacts:

```bash
$ pushd web
$ yarn install
$ yarn build
$ popd
```

After that, you can build the Harness binary:

```bash
$ make build
```

### Run

This project supports all operating systems and architectures supported by Go.  This means you can build and run the system on your machine; docker containers are not required for local development and testing.

To start the server at `localhost:3000`, simply run the following command:

```bash
./gitness server .local.env
```

### Docker Configuration for Pipelines

Harness pipelines run inside Docker containers. The application automatically negotiates the Docker API version with you