# untitled

> This article discusses how to effectively use AI in long-running application development by separating generator and evaluator roles, establishing objective quality criteria, and addressing context anxiety. Last updated: 2026-04-10

## Overview
The Anthropic Labs engineering article "Harness Design for Long-Running Application Development" explains that simply instructing AI to "do your best" differs fundamentally from designing systems where AI creates, evaluates, and improves autonomously. Three critical insights emerge:
1. AI tends to overestimate its output quality when self-evaluating, but separating generator and evaluator functions dramatically improves results.
2. Subjective quality can be standardized through explicit criteria like Design Quality, Originality, Craft, and Functionality.
3. "Context Anxiety" - where AI prematurely concludes tasks to avoid complexity - is a real challenge in enterprise automation projects.

## Key Points
- **Generator/Evaluator Separation**: Isolating creation and evaluation processes prevents AI from overestimating its own results.
- **Standardized Evaluation Criteria**: Defining measurable quality metrics (e.g., originality, functionality) enables AI to produce more creative outputs.
- **Context Anxiety Mitigation**: Long-running tasks require addressing AI's tendency to reduce quality when approaching task completion.

## Sources
- [원본](raw/ingest/reference/2026-04-10-untitled.md)