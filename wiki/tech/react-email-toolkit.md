# React Email Toolkit

> React Email is a toolkit for building and sending responsive, modern email templates using React and TypeScript. It addresses inconsistencies across email clients and simplifies the notoriously complex process of email development.  
> Last updated: 2026-04-18

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/resend/react-email)
- **Stars**: 18,621
- **Forks**: 996
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2022-09-19
- **Updated**: 2026-04-18
- **Topics**: email, hacktoberfest
- **Open Issues**: 80

### README Highlights
![React email cover](https://react.email/static/covers/react-email.png)

**React Email** provides a modern approach to email development by offering unstyled, high-quality React components. It eliminates the need for archaic table-based layouts and handles cross-client inconsistencies (e.g., Gmail, Outlook). The toolkit supports dark mode and responsive design out of the box.

### Key Features
- **React/TypeScript Components**: Use familiar React patterns to build email templates.
- **Cross-Client Consistency**: Automatically resolves rendering issues across email clients.
- **Dark Mode Support**: Built-in handling for dark mode compatibility.
- **Editor Integration**: A WYSIWYG editor built on TipTap/ProseMirror for visual design.
- **Export Capabilities**: Converts templates to HTML and plain text for sending via email services.

### Installation
```sh
npm i react-email@latest
```

### Example Usage
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

### Components
A library of pre-built components for email development:
- `Html`, `Head`, `Body`
- `Button`, `Link`, `Image`
- `Container`, `Row`, `Column`
- `Heading`, `Paragraph`, `CodeBlock`
- `Divider`, `Font`, `Preview`
- `Tailwind` (for utility classes)

### Editor
The included editor serializes content into React Email components and exports HTML/plain text. Built on [TipTap](https://tiptap.dev/) and [ProseMirror](https://prosemirror.net/).

### Integrations
Emails can be sent via any email service provider, including:
- [Resend](https://resend.com/)
- Custom ESPs (via HTML export)

---

## Key Points
- Modernizes email development with React/TypeScript, eliminating reliance on outdated HTML/CSS practices.
- Provides 18+ specialized components for consistent, responsive email layouts.
- Includes a visual editor for designing emails without manual coding.
- MIT-licensed with active community support (18k+ GitHub stars).

## Sources
- [GitHub](https://github.com/resend/react-email)
- [원본](raw/ingest/tech/2026-04-18-react-email-toolkit.md)