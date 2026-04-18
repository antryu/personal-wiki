<!-- GitHub Trending: TypeScript | 18,619 stars | +154 today -->

# resend/react-email

> 💌 Build and send emails using React

## Repository Info
- **URL**: https://github.com/resend/react-email
- **Stars**: 18,621
- **Forks**: 996
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2022-09-19
- **Updated**: 2026-04-18
- **Topics**: email, hacktoberfest
- **Open Issues**: 80

## README (excerpt)
![React email cover](https://react.email/static/covers/react-email.png)

<div align="center"><strong>React Email</strong></div>
<div align="center">The next generation of writing emails.<br />High-quality, unstyled components for creating emails.</div>
<br />
<div align="center">
<a href="https://react.email">Website</a>
<span> · </span>
<a href="https://github.com/resend/react-email">GitHub</a>
</div>

## Introduction

A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript.
It reduces the pain of coding responsive emails with dark mode support. It also takes care of inconsistencies between Gmail, Outlook, and other email clients for you.

## Why

We believe that email is an extremely important medium for people to communicate. However, we need to stop developing emails like 2010, and rethink how email can be done in 2025 and beyond. Email development needs a revamp. A renovation. Modernized for the way we build web apps today.

## Install

```sh
npm i react-email@latest
```

## Getting started

Define your email template with React, include styles and our components where needed.

```jsx
import { Button } from "react-email";

export default function Email() {
  return (
    <Button href="https://example.com" style={{ color: "#61dafb" }}>
      Click me
    </Button>
  );
};
```

## Components

A set of standard components to help you build amazing emails without having to deal with the mess of creating table-based layouts and maintaining archaic markup.

- [Html](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/html)
- [Head](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/head)
- [Button](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/button)
- [Container](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/container)
- [CodeBlock](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/code-block)
- [CodeInline](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/code-inline)
- [Column](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/column)
- [Row](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/row)
- [Font](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/font)
- [Heading](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/heading)
- [Divider](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/hr)
- [Image](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/img)
- [Link](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/link)
- [Markdown](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/markdown)
- [Preview](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/preview)
- [Section](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/section)
- [Tailwind](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/tailwind)
- [Paragraph](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/text)
- [Body](https://github.com/resend/react-email/tree/main/packages/react-email/src/components/body)

## Editor

React Email also provides an Editor built on top of built on [TipTap](https://tiptap.dev/) and [ProseMirror](https://prosemirror.net/), It serializes to React Email components, and exports email-ready HTML and plain text.

See the [Editor documentation](https://react.email/docs/editor) for more details.

## Integrations

Emails built with React Email can be converted into HTML and sent using any email service provider. Here are some examples:

- [Resend](https://github.com/resend/react-emai