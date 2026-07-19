# Pipeline "My Journey" Copy Redesign

**Date:** 2026-07-19
**Scope:** Content-only rewrite of the End-to-End Pipeline section on the main page.

## Goal

Reframe the 7 interactive pipeline nodes from a data-pipeline metaphor into Darren's
personal builder's journey, told chronologically in first person. Each node's hover
card describes Darren as he appears in the section the node links to when clicked,
so every click pays off the teaser.

## Files Changed

- `content.js` — rewrite the 7 entries in `pipelineNodes` (label, title, body, tools).
  Click `target` and `section` values are unchanged.
- `index.html` — section heading only: kicker `PLATFORM ARCHITECTURE` → `MY JOURNEY`,
  heading `End-to-End Pipeline` → `Darren's Pipeline`.

## Not Changing

- SVG layout, node positions, connectors, scroll-driven drawing animation
- Hover card mechanics, typewriter effect, click navigation
- Any other section of the page

## Final Node Copy

Labels must stay ≤ 14 characters (renderer constraint). Max 3 tool chips per node.

| Key | Label | Target | Title | Body |
|-----|-------|--------|-------|------|
| src | ORIGIN | #systems | It started with data | My journey began studying data science — learning how data is ingested, handled, and turned into something useful. That foundation opened a path into exploring every technology and field where data could create real value, from government systems to trading floors. |
| ingest | UPSKILL | #certs | Always levelling up | I never stop upskilling — Databricks engineering, Imperial ML/AI, McKinsey Forward — each credential sharpening how I handle features, lead integrations end-to-end, and improve the products I ship. |
| ai | TOOLKIT | #skills | Skills earned by building | Every stage of the journey added tools to the matrix: Python and PySpark for the data layer, TypeScript for product, LLMs and agentic systems for intelligence — each graded by real production usage, not claims. |
| lake | VALIDATE | #projects | Users decide, not me | Ideas earn their place by surviving contact with real users — 735 survey responses, three rounds of public prototype testing, and hard pivots whenever the data disagreed with my assumptions. |
| prod | SHIP | #projects | Shipped and live | HomeTongue, HustleSG, LLM evaluation frameworks — real products deployed to real users. Shipping is where the journey proves itself: live, in production, being used. |
| hist | JOURNEY | #timeline | Every step documented | From the GovTech data engineering trenches to AI product building — every role, milestone, and pivot is logged on the timeline, each one compounding into what I build next. |
| con | CONNECT | #contact | Let's build something | Open to AI product engineering, data platform architecture, and ambitious problems worth solving. The pipeline never really ends — the next build starts with a conversation. |

Tool chips per node:

- src: `Data Science`, `ETL`, `Exploration`
- ingest: `Databricks`, `Imperial`, `McKinsey`
- ai: `Python`, `TypeScript`, `LLMs`
- lake: `735 surveys`, `User testing`, `Pivots`
- prod: `View Works`, `GitHub`, `Live`
- hist: `GovTech SG`, `UoL`, `Imperial`
- con: `LinkedIn`, `Email`, `GitHub`

## Verification

1. Serve locally, load `index.html`, zero console errors.
2. Hover each of the 7 nodes — card shows new title/body/chips, typewriter intact.
3. Click each node — scrolls to the correct section.
4. Section heading shows `MY JOURNEY` / `Darren's Pipeline`.
