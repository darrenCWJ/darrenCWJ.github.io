// ╔══════════════════════════════════════════════════════════════╗
// ║  SITE CONTENT — edit this file to update your website.      ║
// ║  No HTML knowledge needed for most changes.                  ║
// ║  Save the file, refresh your browser, and changes appear.    ║
// ╚══════════════════════════════════════════════════════════════╝

window.SITE = {

  // ── Links & Contact ──────────────────────────────────────────
  emailHref:    "mailto:darrenchuawj@hotmail.com",
  linkedinHref: "https://www.linkedin.com/in/darren-chua-265879b1/",
  githubHref:   "https://github.com/darrenCWJ",

  // ── Hero Section ─────────────────────────────────────────────
  heroStatus: "Data Engineer · GovTech Singapore · Open to Opportunities",

  heroBio: "I build systems that bridge raw data pipelines to intelligence, user-facing products — from LLM evaluation frameworks to facilities management system with sensors data.",

  // Credential chips shown under the bio (add or remove as needed).
  heroChips: [
    "GovTech SG",
    "University of London (UOL-SIM)",
    "Python · PySpark · Databricks",
    "LLM · RAG · Agentic Systems · Glean",
  ],

  // ── Hero Terminal Block ───────────────────────────────────────
  // The "system_log" terminal card on the right side of the hero.
  terminalLines: [
    { key: "Role",     value: "Data Engineer" },
    { key: "Org",      value: "GovTech Singapore" },
    { key: "Stack",    value: "Python, PySpark, SQL, Databricks" },
    { key: "Edu",      value: "University of London (UOL-SIM)" },
    { key: "Location", value: "Singapore" },
  ],

  // ── Evolution Log (01 section) ───────────────────────────────
  // The three bio paragraphs in "From Pipelines to Products".
  evolutionParagraphs: [
    "My journey began in the data engineering trenches — optimizing ETL pipelines, wrangling multi-terabyte datasets on Databricks, and building service integrations at GovTech Singapore. I learned that data is only as valuable as the decisions it fuels.",
    "Deepening my foundations with an ML/AI programme at Imperial College London (Emeritus), I developed intuition for neural architectures, reinforcement learning, and model evaluation. As LLMs emerged, I saw the bridge between raw data and user-facing intelligence — and started building it.",
    "Today I architect end-to-end: from PySpark data lakes and custom RAG evaluation harnesses to TypeScript product UIs — automating everything repetitive so there's more room for what actually matters.",
  ],
  // The two-column callout at the bottom of the evolution section.
  evolutionFoundation: "Structured data, ETL orchestration, horizontal scaling, deterministic logic.",
  evolutionHorizon:    "Agentic workflows, LLM evaluation, Internal Tools, Singapore product-market fit.",

  // ── Currently Processing — Active Learning (05 section) ──────
  // accent: "amber" | "orange" | "tertiary"
  // progress: 0–100 (width of the progress bar)
  currentlyProcessing: [
    {
      icon:        "precision_manufacturing",
      title:       "Robotics Integration",
      description: "Exploring how automation intersects with physical systems — building intuition for robotics programming and sensor integration.",
      progress:    35,
      accent:      "amber",
    },
    {
      icon:        "candlestick_chart",
      title:       "Quantitative Trading",
      description: "Building algorithmic stock trading systems — applying quantitative methods and data pipelines to financial market analysis.",
      progress:    25,
      accent:      "orange",
    },
    {
      icon:        "architecture",
      title:       "Software Architecture",
      description: "Formalising knowledge of system design patterns, distributed architecture, and scalability principles through structured study.",
      progress:    60,
      accent:      "tertiary",
    },
  ],

  // ── Timeline / Work History (04 section) ─────────────────────
  // accent: "amber" | "orange" | "tertiary" | "dim"
  // active: true shows the ACTIVE badge on that entry.
  timeline: [
    {
      year:        "2022 →",
      role:        "Data Engineer",
      org:         "GovTech Singapore · Service Integration & Business Incident Analysis",
      description: "Building service integrations and data pipelines that power business incident analysis at national scale. Driving automation of repetitive reporting to free teams for higher-value work.",
      tags:        ["Python", "SQL", "Workato", "Glean", "Snowflake"],
      accent:      "amber",
      active:      true,
    },
    {
      year:        "2022",
      role:        "ML/AI Programme",
      org:         "Emeritus · Imperial College London",
      description: "Deepened theoretical and practical ML/AI foundations — neural networks, reinforcement learning, supervised and unsupervised methods — culminating in an applied capstone project.",
      tags:        ["Machine Learning", "Deep Learning", "Reinforcement Learning"],
      accent:      "orange",
      active:      false,
    },
    {
      year:        "2022",
      role:        "AI Self-Study & Exploration",
      org:         "HuggingFace · RL · Discord Bots · Open Source",
      description: "Built reinforcement learning models on HuggingFace, shipped Discord bots on Replit, and completed applied tech assessments — establishing practical AI engineering instincts.",
      tags:        ["Python", "HuggingFace", "Reinforcement Learning"],
      accent:      "tertiary",
      active:      false,
    },
    {
      year:        "2020 → 2022",
      role:        "Data Analyst",
      org:         "",
      description: "Started the data journey at Ministry of Health (Singapore). Mastering SQL and python, data engineering primitives with automation, and the art of writing code that actually runs in production.",
      tags:        [],
      accent:      "dim",
      active:      false,
    },
  ],

  // ── Contact Section ───────────────────────────────────────────
  contactBio: "Open to collaborations in AI product engineering, data platform architecture, and building things that actually matter in Singapore and beyond.",

  // ── Footer ────────────────────────────────────────────────────
  footerYear: "2026",

  // ── Sparkline bar charts ─────────────────────────────────────
  // Each array has 7 numbers (0–100). Left = oldest, right = most recent.
  // 100 = tallest bar, 0 = no bar. Think of them as a growth trajectory.
  sparklines: {
    pipelineOrchestration: [33, 50, 67, 83, 75, 92, 100],
    dataLakehouse:         [83, 75, 92, 67, 100, 83, 92],
    AIProductEngineering:  [50, 58, 42, 75, 67, 100, 83],
  },

  // ── Cognitive Engine radar chart ─────────────────────────────
  //   label : full name shown in the progress bar
  //   short : short label on the radar axis tip (keep ≤ 7 chars)
  //   pct   : proficiency 0.0 – 1.0
  cognitiveSkills: [
    { label: "LLM_ORCHESTRATION",  short: "LLM",    pct: 0.95 },
    { label: "RAG_PIPELINE",       short: "RAG",     pct: 0.90 },
    { label: "AGENTIC_SYSTEMS",    short: "AGENTIC", pct: 0.80 },
    { label: "PROMPT_ENGINEERING", short: "PROMPT",  pct: 0.88 },
    { label: "DATA_INTELLIGENCE",  short: "DATA_IQ", pct: 0.92 },
  ],

};
