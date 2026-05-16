<!-- GitHub Trending: Go | 25,997 stars | +1 today -->

# stretchr/testify

> A toolkit with common assertions and mocks that plays nicely with the standard library

## Repository Info
- **URL**: https://github.com/stretchr/testify
- **Stars**: 25,997
- **Forks**: 1,714
- **Language**: Go
- **License**: MIT License
- **Created**: 2012-10-16
- **Updated**: 2026-05-16
- **Topics**: assertions, go, golang, mocking, testify, testing, toolkit
- **Open Issues**: 352

## README (excerpt)
Testify - Thou Shalt Write Tests
================================

> [!NOTE]
> Testify is being maintained at v1, no breaking changes will be accepted in this repo.  
> [See discussion about v2](https://github.com/stretchr/testify/discussions/1560).

[![Build Status](https://github.com/stretchr/testify/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/stretchr/testify/actions/workflows/main.yml) [![Go Report Card](https://goreportcard.com/badge/github.com/stretchr/testify)](https://goreportcard.com/report/github.com/stretchr/testify) [![PkgGoDev](https://pkg.go.dev/badge/github.com/stretchr/testify)](https://pkg.go.dev/github.com/stretchr/testify)

Go code (golang) set of packages that provide many tools for testifying that your code will behave as you intend.

Features include:

  * [Easy assertions](#assert-package)
  * [Mocking](#mock-package)
  * [Testing suite interfaces and functions](#suite-package)

Get started:

  * Install testify with [one line of code](#installation), or [update it with another](#staying-up-to-date)
  * For an introduction to writing test code in Go, see https://go.dev/doc/code#Testing
  * Check out the API Documentation https://pkg.go.dev/github.com/stretchr/testify
  * Use [testifylint](https://github.com/Antonboom/testifylint) (via [golangci-lint](https://golangci-lint.run/)) to avoid common mistakes
  * A little about [Test-Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development)

[`assert`](https://pkg.go.dev/github.com/stretchr/testify/assert "API documentation") package
-------------------------------------------------------------------------------------------

The `assert` package provides some helpful methods that allow you to write better test code in Go.

  * Prints friendly, easy to read failure descriptions
  * Allows for very readable code
  * Optionally annotate each assertion with a message

See it in action:

```go
package yours

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSomething(t *testing.T) {
	// assert equality
	assert.Equal(t, 123, 123, "they should be equal")

	// assert inequality
	assert.NotEqual(t, 123, 456, "they should not be equal")

	// assert for nil (good for errors)
	assert.Nil(t, object)

	// assert for not nil (good when you expect something)
	if assert.NotNil(t, object) {
		// now we know that object isn't nil, we are safe to make
		// further assertions without causing any errors
		assert.Equal(t, "Something", object.Value)
	}
}
```

  * Every assert func takes the `testing.T` object as the first argument.  This is how it writes the errors out through the normal `go test` capabilities.
  * Every assert func returns a bool indicating whether the assertion was successful or not, this is useful for if you want to go on making further assertions under certain conditions.

if you assert many times, use the below:

```go
package yours

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSomething(t *testing.T) {
	assert := assert.New(t)

	// assert equality
	assert.Equal(123, 123, "they should be equal")

	// assert inequality
	assert.NotEqual(123, 456, "they should not be equal")

	// assert for nil (good for errors)
	assert.Nil(object)

	// assert for not nil (good when you expect something)
	if assert.NotNil(object) {
		// now we know that object isn't nil, we are safe to make
		// further assertions without causing any errors
		assert.Equal("Something", object.Value)
	}
}
```

[`require`](https://pkg.go.dev/github.com/stretchr/testify/require "API documentation") package
---------------------------------------------------------------------------------------------

The `require` package provides same global functions as the `assert` package, but instead of returning a boolean result they terminate current test.
These functions must be called from the goroutine running the test or benchmark function, not from other goroutines created during the test.
Otherwise race conditi