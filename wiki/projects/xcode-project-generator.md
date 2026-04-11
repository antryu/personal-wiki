# Xcode Project Generator

> XcodeGen is a Swift command-line tool that automates Xcode project generation using a YAML/JSON specification file. It eliminates merge conflicts by removing `.xcodeproj` from version control, ensures project structure stays synced with disk directories, and simplifies complex project configuration.  
> Last updated: 2026-04-11

## Overview
XcodeGen generates Xcode projects based on a declarative specification file, allowing developers to define targets, configurations, and dependencies in a human-readable format. By parsing directory structures and applying user-defined specs, it ensures Xcode projects remain consistent with file systems, supports multi-platform frameworks, and integrates with CI/CD pipelines. The tool uses smart defaults while enabling advanced customization for large-scale projects.

Key features include:
- **Merge conflict prevention**: Exclude `.xcodeproj` from Git to avoid Xcode-specific file conflicts.
- **Automatic synchronization**: Groups and files in Xcode align with directory changes on disk.
- **Flexible configuration**: Define build settings, dependencies, and environments via YAML/JSON.
- **CI/CD compatibility**: Generate projects programmatically in CI environments or scripted workflows.

Example project spec:
```yaml
name: MyProject
targets:
  MyApp:
    type: application
    platform: iOS
    deploymentTarget: "10.0"
    sources: [MyApp]
    dependencies:
      - target: MyFramework
      - carthage: Alamofire
```

## Key Points
- Generates Xcode projects from YAML/JSON specs, eliminating manual Xcode configuration
- Syncs Xcode groups/files with directory structures to prevent inconsistencies
- Supports advanced features like build setting groups, multi-environment schemes, and Carthage integration
- Enables CI/CD automation and distributed spec management across multiple files
- Compatible with Swift Package Manager and homebrew installation methods

## Sources
- [GitHub](https://github.com/yonaskolb/XcodeGen)
- [원본](raw/ingest/projects/2026-04-11-xcode-project-generator.md)