<!-- GitHub Trending: Dart | 1,639 stars | +168 today -->

# flutter/skills

> No description

## Repository Info
- **URL**: https://github.com/flutter/skills
- **Stars**: 1,639
- **Forks**: 91
- **Language**: Dart
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2026-02-25
- **Updated**: 2026-05-08
- **Topics**: N/A
- **Open Issues**: 22

## README (excerpt)
# Flutter Agent Skills

Agent skills for Flutter, maintained by the Flutter team.
A collection of skills providing tailored instructions for happy path Flutter app development workflows. By giving the agent actual domain expertise and repeatable workflows, you drastically reduce mistakes and ensure agents reliably complete the task following best practices.

Skills are essentially simple folders of files that can be seen as complementary to MCP, where MCP gives an agent access to specialized tools and a Skill teaches the agent “how” to use tools for a specific task.

You can also install the [Agent Skills for Dart](https://github.com/dart-lang/skills) for Dart tasks.

## Installation

To install all skills into your project, run the following command. 
The `--agent universal` flag puts it in the standard `.agents/skills` 
folder that most agents use.

```bash
npx skills add flutter/skills --skill '*' --agent universal
```

## Updating Skills

To update, run the following command:

```bash
npx skills update
```

## Available Skills

| Skill | Description | Example prompt |
|---|---|---|
| [flutter-add-integration-test](skills/flutter-add-integration-test/SKILL.md) | Configures Flutter Driver for app interaction and converts MCP actions into permanent integration tests. Use when adding integration testing to a project, exploring UI components via MCP, or automating user flows with the integration_test package. | Add an integration test that validates the checkout experience |
| [flutter-add-widget-preview](skills/flutter-add-widget-preview/SKILL.md) | Adds interactive widget previews to the project using the previews.dart system. Use when creating new UI components or updating existing screens to ensure consistent design and interactive testing. | Create a preview for the ProductCard widget with different price states |
| [flutter-add-widget-test](skills/flutter-add-widget-test/SKILL.md) | Implement a component-level test using `WidgetTester` to verify UI rendering and user interactions (tapping, scrolling, entering text). Use when validating that a specific widget displays correct data and responds to events as expected. | Add a widget test for the CustomButton to verify the onTap callback is called |
| [flutter-apply-architecture-best-practices](skills/flutter-apply-architecture-best-practices/SKILL.md) | Architects a Flutter application using the recommended layered approach (UI, Logic, Data). Use when structuring a new project or refactoring for scalability. | Refactor the authentication flow to follow the recommended layered architecture |
| [flutter-build-responsive-layout](skills/flutter-build-responsive-layout/SKILL.md) | Use `LayoutBuilder`, `MediaQuery`, or `Expanded/Flexible` to create a layout that adapts to different screen sizes. Use when you need the UI to look good on both mobile and tablet/desktop form factors. | Make the home screen responsive so it displays a grid on tablets and a list on phones |
| [flutter-fix-layout-issues](skills/flutter-fix-layout-issues/SKILL.md) | Fixes Flutter layout errors (overflows, unbounded constraints) using Dart and Flutter MCP tools. Use when addressing "RenderFlex overflowed", "Vertical viewport was given unbounded height", or similar layout issues. | Fix the overflow error on the profile page when the keyboard is visible |
| [flutter-implement-json-serialization](skills/flutter-implement-json-serialization/SKILL.md) | Create model classes with `fromJson` and `toJson` methods using `dart:convert`. Use when manually mapping JSON keys to class properties for simple data structures. | Implement JSON serialization for the User model class |
| [flutter-setup-declarative-routing](skills/flutter-setup-declarative-routing/SKILL.md) | Configure `MaterialApp.router` using a package like `go_router` for advanced URL-based navigation. Use when developing web applications or mobile apps that require specific deep linking and browser history support. | Set up GoRouter with paths for home, d