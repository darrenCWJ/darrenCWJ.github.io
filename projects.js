// ╔══════════════════════════════════════════════════════════════╗
// ║  PROJECTS — add, remove, or edit project cards here.        ║
// ║  Each object = one card on the portfolio page.              ║
// ║  Save the file, refresh your browser, changes appear.       ║
// ╚══════════════════════════════════════════════════════════════╝

window.PROJECTS = [

  {
    title:        "Tribunal",
    subtitle:     "LLM Evaluation Framework",
    date:         "APR 2026 · AI EVAL",
    description:  '"Judgement as an AI tool" — applies RAGAS practice and LLM test evaluation metrics to systematically measure and benchmark chatbot reply quality.',
    githubUrl:    "https://github.com/darrenCWJ/tribunal",
    caseStudyUrl: "case-study-tribunal.html",
    tags:         ["PYTHON", "RAGAS", "LLM EVAL"],
    icon:         "gavel",
    image:        "tribunal-preview.svg",
    accent:       "amber",
  },

  {
    title:        "HomeTongue",
    subtitle:     "Speech & Language AI",
    date:         "APR 2026 · HACKATHON",
    description:  "Language learning app built for a hackathon, leveraging STT/TTS and AI translation to help users connect with their mother tongue. Cloud-deployed on Vercel.",
    githubUrl:    "https://github.com/darrenCWJ/HomeTongue",
    caseStudyUrl: "case-study-hometongue.html",
    tags:         ["TYPESCRIPT", "SPEECH AI", "AI EMBEDDINGS"],
    icon:         "translate",
    image:        "hometongue-preview.svg",
    accent:       "orange",            // "amber" | "orange" | "tertiary"
  },

  {
    title:        "Hustle SG",
    subtitle:     "Singapore Gig Platform",
    date:         "APR 2026 · HACKATHON",
    description:  "Singapore-first gig platform featuring verified side hustlers, AI-matched gigs, and async video interviews — reducing friction between talent and opportunity.",
    githubUrl:    "https://github.com/darrenCWJ/hustle-sg",
    caseStudyUrl: "case-study-hustlesg.html",
    tags:         ["TYPESCRIPT", "AI MATCHING", "PINECONE"],
    icon:         "work",
    image:        "hustlesg-preview.svg",
    accent:       "tertiary",
  },

  {
    title:        "Claude Telemetry",
    subtitle:     "LLM Cost & Usage Analytics",
    date:         "MAY 2026 · OBSERVABILITY",
    description:  "Self-hosted observability pipeline for Claude Code — streams OTEL telemetry into ClickHouse and visualises token spend, cache hit rates, and per-project costs in Grafana.",
    githubUrl:    "https://github.com/darrenCWJ/claude-telemetry",
    caseStudyUrl: null,
    tags:         ["PYTHON", "CLICKHOUSE", "GRAFANA"],
    icon:         "monitoring",
    image:        "telemetry-preview.svg",
    accent:       "orange",
  },

  {
    title:        "Cantonese STT Benchmark",
    subtitle:     "STT Provider Comparison",
    date:         "APR 2026 · RESEARCH",
    description:  "Web harness that compares Cantonese STT providers — Google, ElevenLabs, OpenAI Whisper, faster-whisper, Tencent — with LLM translation and TTS in a structured benchmark.",
    githubUrl:    "https://github.com/darrenCWJ/cantonese-translation-comparison",
    caseStudyUrl: null,
    tags:         ["TYPESCRIPT", "WHISPER", "BENCHMARK"],
    icon:         "mic",
    image:        "cantonese-preview.svg",
    accent:       "amber",
  },

  {
    title:        "Daily Macro Dashboard",
    subtitle:     "Automated Market Briefing",
    date:         "MAY 2026 · AUTOMATION",
    description:  "Zero-server market briefing — GitHub Actions pulls live macro data every weekday and pushes a formatted snapshot of indices, rates, and FX straight to Telegram.",
    githubUrl:    "https://github.com/darrenCWJ/daily-macro-dashboard",
    caseStudyUrl: null,
    tags:         ["PYTHON", "GITHUB ACTIONS", "TELEGRAM API"],
    icon:         "candlestick_chart",
    image:        "macro-preview.svg",
    accent:       "tertiary",
  },

];

// ─────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW PROJECT
// ─────────────────────────────────────────────────────────────────
// Copy one of the objects above, paste it inside the array,
// and fill in your details. Keys:
//
//   title        — project name shown on the card
//   subtitle     — one-line type label (e.g. "Python · Flask · API")
//   date         — badge text top-left (e.g. "JAN 2026 · SIDE PROJECT")
//   description  — 2–3 sentence description of the project
//   githubUrl    — full GitHub URL for the "open_in_new" icon link
//   caseStudyUrl — filename of the case study page, or null to hide the button
//   tags         — array of short tech labels (UPPERCASE recommended)
//   icon         — any Material Symbols name: https://fonts.google.com/icons
//   accent       — colour theme: "amber" (gold), "orange" (red-orange), "tertiary" (blue-white)
//
// HOW TO REMOVE A PROJECT
// ─────────────────────────────────────────────────────────────────
// Delete the entire { ... } object for that project from the array.
//
// HOW TO REORDER PROJECTS
// ─────────────────────────────────────────────────────────────────
// Cut and paste the objects — cards render in the order listed here.
// ─────────────────────────────────────────────────────────────────
