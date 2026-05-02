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

  // ── Skills Section (03) ─────────────────────────────────────
  // Section headline and subtitle
  skillsHeadline:    "SKILL_MATRIX_V4.0",
  skillsDescription: "A multi-dimensional mapping of engineering competencies, algorithmic depth, and product delivery.",

  // ── Skills: Left Column — Data Engineering ──────────────────
  // Column heading (h3 above the cards)
  dataEngineeringHeading: "Data Engineering",

  // Cards in the left column.
  //   title     : card heading
  //   metric    : small status line shown under the title
  //   icon      : Material Symbols name shown top-right of the card
  //   sparkline : key into the sparklines object above — controls bar heights
  //   chips     : technology tags shown at the bottom
  dataEngineeringCards: [
    {
      title:     "Pipeline Orchestration",
      metric:    "STABILITY_RATING: 0.94",
      icon:      "analytics",
      sparkline: "pipelineOrchestration",
      chips:     ["PYSPARK", "AIRFLOW", "DATABRICKS"],
    },
    {
      title:     "Data Lakehouse",
      metric:    "SCALE: PETABYTE_GRADE",
      icon:      "cloud_done",
      sparkline: "dataLakehouse",
      chips:     ["SNOWFLAKE", "AWS S3", "AZURE"],
    },
  ],

  // ── Skills: Middle Column — Cognitive Engine ──────────────────
  // The radar chart and progress bars come from `cognitiveSkills` above.
  // Only the heading text and card labels are editable here.
  cognitiveEngineHeading: "AI / LLM Systems",
  cognitiveEngineTitle:   "Cognitive Engine",
  cognitiveEngineBadge:   "LEVEL_ELITE",

  // ── Skills: Right Column — Product Engineering ────────────────
  // Column heading (h3 above the cards)
  productEngineeringHeading: "Product Engineering",

  // Cards in the right column.
  // A card with a `grid` array renders a 2-column mini-grid (label + value)
  // instead of a sparkline. Use it for tech stack breakdowns.
  productEngineeringCards: [
    {
      title:  "Full-Stack Systems",
      metric: "DEPLOY_VELOCITY: HIGH",
      grid: [
        { label: "Backend",  value: "Flask / Django" },
        { label: "Frontend", value: "React / TS" },
      ],
      chips: ["TYPESCRIPT", "REACT", "VERCEL"],
    },
    {
      title:     "Speech & NLP",
      metric:    "BENCHMARK_FIDELITY: v2.0",
      sparkline: "AIProductEngineering",
      chips:     ["WHISPER", "ELEVENLABS", "STT / TTS"],
    },
  ],

  // ── End-to-End Pipeline Diagram ─────────────────────────────
  // Each key matches a node id in the SVG diagram.
  // Edit label, title, body, tools, and target/section here.
  //   label   : short code shown on the node box (keep ≤ 14 chars)
  //   title   : bold heading in the hover card
  //   body    : paragraph text in the hover card
  //   tools   : up to 3 chips shown at the bottom of the hover card
  //   target  : anchor to scroll to when the node is clicked (e.g. '#certs')
  //   section : link label shown in the hover card CTA (e.g. 'Verified Certs')
  pipelineNodes: {
    src: {
      label:   'DATA_SOURCES',
      title:   'Where the journey started',
      body:    "GovTech Singapore's operational systems, IoT sensors, and public datasets — the real-world signals that shaped the engineering approach.",
      tools:   ['GovTech SG', 'IoT', 'Public APIs'],
      target:  '#systems',
      section: 'Evolution Log',
    },
    ingest: {
      label:   'INGEST',
      title:   'The technical toolkit',
      body:    'Python, PySpark, SQL, and streaming pipelines — the full capability matrix powering the data layer.',
      tools:   ['Python', 'PySpark', 'Kafka'],
      target:  '#certs',
      section: 'Verified Certs',
    },
    ai: {
      label:   'AI_ENGINE',
      title:   'AI built on solid data',
      body:    'LLM evaluation, RAG pipelines, and agentic systems — AI capabilities grounded in production-grade data engineering.',
      tools:   ['LLMs', 'RAG', 'Agents'],
      target:  '#skills',
      section: 'Skill Matrix',
    },
    lake: {
      label:   'LAKEHOUSE',
      title:   'From pipelines to products',
      body:    'Multi-terabyte Databricks workloads, bronze-to-gold pipelines, and the evolution from ETL to intelligence.',
      tools:   ['Databricks', 'Delta Lake', 'PySpark'],
      target:  '#projects',
      section: 'Selected Works',
    },
    prod: {
      label:   'PRODUCTS',
      title:   'Shipped and deployed',
      body:    'LLM evaluation frameworks, facilities management systems, and more — real products built for real users.',
      tools:   ['View Works', 'GitHub', 'Live'],
      target:  '#projects',
      section: 'Selected Works',
    },
    hist: {
      label:   'TIMELINE',
      title:   'Every step documented',
      body:    'From data engineer to AI builder — each role, milestone, and pivot that shaped the platform.',
      tools:   ['GovTech SG', 'UoL', 'Imperial'],
      target:  '#timeline',
      section: 'Temporal Logs',
    },
    con: {
      label:   'CONTACT',
      title:   "Let's build something",
      body:    "Open to data engineering roles, product collaborations, and ambitious problems. Let's connect.",
      tools:   ['LinkedIn', 'Email', 'GitHub'],
      target:  '#contact',
      section: 'Connect',
    },
  },

  // ── Certifications (02 section) ──────────────────────────────
  // accent : "amber" | "orange" | "blue"
  // featured: true  → wide card in the first column (use for top cert)
  // earlier: true   → grouped in the "Earlier Credentials" bottom row
  // badge   → short label chip shown on the card (optional)
  // expires → expiry date string (optional)
  certsDescription: "Verified credentials across data engineering, AI platforms, and product management.",

  certifications: [
    {
      title:    "Databricks Certified Data Engineer Associate",
      issuer:   "Databricks",
      issued:   "APR 2026",
      expires:  "APR 2028",
      url:      "https://credentials.databricks.com/31af5c22-be6a-4b4d-af9a-e93739e84902",
      badge:    "CERTIFIED · ASSOCIATE",
      accent:   "amber",
      icon:     "verified",
      featured: true,
    },
    {
      title:  "Claude Code in Action",
      issuer: "Anthropic",
      issued: "MAR 2026",
      url:    "https://verify.skilljar.com/c/bmcv4abtz9mz",
      accent: "orange",
      icon:   "smart_toy",
    },
    {
      title:  "Claude 101",
      issuer: "Anthropic",
      issued: "FEB 2026",
      url:    "https://verify.skilljar.com/c/aunkrafx24xw",
      accent: "orange",
      icon:   "smart_toy",
    },
    {
      title:   "Workato Foundations Level 2",
      issuer:  "Workato",
      issued:  "FEB 2026",
      expires: "FEB 2028",
      url:     "https://verify.skilljar.com/c/7hwkov8pha45",
      badge:   "LEVEL 2",
      accent:  "orange",
      icon:    "integration_instructions",
    },
    {
      title:   "Workato Foundations Level 1",
      issuer:  "Workato",
      issued:  "DEC 2025",
      expires: "DEC 2027",
      url:     "https://verify.skilljar.com/c/vd3oj9s522eo",
      badge:   "LEVEL 1",
      accent:  "orange",
      icon:    "integration_instructions",
    },
    {
      title:  "Containers for Deploying & Scaling Apps",
      issuer: "National University of Singapore",
      issued: "DEC 2025",
      url:    "https://credentials.nus.edu.sg/b07afa1b-207a-426c-9e59-023abeb06766",
      accent: "blue",
      icon:   "school",
    },
    {
      title:  "Managing Digital Products",
      issuer: "National University of Singapore",
      issued: "OCT 2025",
      url:    "https://credentials.nus.edu.sg/4d27897d-3090-4781-ad5d-7de69a7dd3b6",
      accent: "blue",
      icon:   "school",
    },
    {
      title:   "AI Champions Bootcamp",
      issuer:  "GovTech Singapore",
      issued:  "DEC 2024",
      url:     "https://stg.trustdocs.gov.sg/li?src=transient-storage-stg.oa.gov.sg/govtech/abc-coc/91f102e4-9f93-4a5d-9e5c-52929e9edb2c&key=eef62f63b789756a88d9e2cfadc75a7a8ca3ef57358efffe03e0fff6a771e326",
      badge:   "GOVTECH SG",
      accent:  "blue",
      icon:    "flag",
      earlier: true,
    },
    {
      title:   "Professional Certificate in ML & AI",
      issuer:  "Emeritus · Imperial College London",
      issued:  "DEC 2022",
      url:     "https://certificates.emeritus.org/248c7de9-44d8-4489-94f2-483054bd4efc",
      badge:   "EMERITUS · ICL",
      accent:  "blue",
      icon:    "workspace_premium",
      earlier: true,
    },
    {
      title:   "Econometrics: Methods & Applications",
      issuer:  "Coursera",
      issued:  "AUG 2020",
      url:     "https://www.coursera.org/account/accomplishments/certificate/N848HQ4M6955",
      badge:   "COURSERA",
      accent:  "blue",
      icon:    "analytics",
      earlier: true,
    },
  ],

};
