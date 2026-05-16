<!-- GitHub Trending: Go | 22,192 stars | +7 today -->

# go-chi/chi

> lightweight, idiomatic and composable router for building Go HTTP services

## Repository Info
- **URL**: https://github.com/go-chi/chi
- **Stars**: 22,192
- **Forks**: 1,102
- **Language**: Go
- **License**: MIT License
- **Created**: 2015-10-15
- **Updated**: 2026-05-16
- **Topics**: api, context, go, golang, http, microservices, middleware, rest-api, router
- **Open Issues**: 106

## README (excerpt)
# <img alt="chi" src="https://cdn.rawgit.com/go-chi/chi/master/_examples/chi.svg" width="220" />


[![GoDoc Widget]][GoDoc]

`chi` is a lightweight, idiomatic and composable router for building Go HTTP services. It's
especially good at helping you write large REST API services that are kept maintainable as your
project grows and changes. `chi` is built on the new `context` package introduced in Go 1.7 to
handle signaling, cancelation and request-scoped values across a handler chain.

The focus of the project has been to seek out an elegant and comfortable design for writing
REST API servers, written during the development of the Pressly API service that powers our
public API service, which in turn powers all of our client-side applications.

The key considerations of chi's design are: project structure, maintainability, standard http
handlers (stdlib-only), developer productivity, and deconstructing a large system into many small
parts. The core router `github.com/go-chi/chi` is quite small (less than 1000 LOC), but we've also
included some useful/optional subpackages: [middleware](/middleware), [render](https://github.com/go-chi/render)
and [docgen](https://github.com/go-chi/docgen). We hope you enjoy it too!

## Install

```sh
go get -u github.com/go-chi/chi/v5
```


## Features

* **Lightweight** - cloc'd in ~1000 LOC for the chi router
* **Fast** - yes, see [benchmarks](#benchmarks)
* **100% compatible with net/http** - use any http or middleware pkg in the ecosystem that is also compatible with `net/http`
* **Designed for modular/composable APIs** - middlewares, inline middlewares, route groups and sub-router mounting
* **Context control** - built on new `context` package, providing value chaining, cancellations and timeouts
* **Robust** - in production at Pressly, Cloudflare, Heroku, 99Designs, and many others (see [discussion](https://github.com/go-chi/chi/issues/91))
* **Doc generation** - `docgen` auto-generates routing documentation from your source to JSON or Markdown
* **Go.mod support** - as of v5, go.mod support (see [CHANGELOG](https://github.com/go-chi/chi/blob/master/CHANGELOG.md))
* **No external dependencies** - plain ol' Go stdlib + net/http


## Examples

See [_examples/](https://github.com/go-chi/chi/blob/master/_examples/) for a variety of examples.


**As easy as:**

```go
package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})
	http.ListenAndServe(":3000", r)
}
```

**REST Preview:**

Here is a little preview of what routing looks like with chi. Also take a look at the generated routing docs
in JSON ([routes.json](https://github.com/go-chi/chi/blob/master/_examples/rest/routes.json)) and in
Markdown ([routes.md](https://github.com/go-chi/chi/blob/master/_examples/rest/routes.md)).

I highly recommend reading the source of the [examples](https://github.com/go-chi/chi/blob/master/_examples/) listed
above, they will show you all the features of chi and serve as a good form of documentation.

```go
import (
  //...
  "context"
  "github.com/go-chi/chi/v5"
  "github.com/go-chi/chi/v5/middleware"
)

func main() {
  r := chi.NewRouter()

  // A good base middleware stack
  r.Use(middleware.RequestID)
  r.Use(middleware.RealIP)
  r.Use(middleware.Logger)
  r.Use(middleware.Recoverer)

  // Set a timeout value on the request context (ctx), that will signal
  // through ctx.Done() that the request has timed out and further
  // processing should be stopped.
  r.Use(middleware.Timeout(60 * time.Second))

  r.Get("/", func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("hi"))
  })

  // RESTy routes for "articles" resource
  r.Route("/articles", func(r chi.Router) {
    r.With(paginate).Get("/", listArticles)                           // GET /articles
    r.With(paginate).Get("/{month}-{day}-{year}",