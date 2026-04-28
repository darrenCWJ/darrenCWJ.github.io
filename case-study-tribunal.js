// ╔══════════════════════════════════════════════════════════════╗
// ║  CASE STUDY CONTENT — edit this file to update the page.    ║
// ║  No HTML knowledge needed. Save and refresh to see changes. ║
// ╚══════════════════════════════════════════════════════════════╝

window.CASE_STUDY = {

  // ── Header & Nav ─────────────────────────────────────────────
  title:     "Tribunal",
  category:  "Project Case Study // LLM Infrastructure",
  subtitle:  "Judgement as an AI tool — a systematic framework for evaluating LLM-powered chatbot quality using RAGAS metrics, LLM judge panels, and automated benchmarking pipelines.",
  githubUrl: "https://github.com/darrenCWJ/tribunal",

  // ── Hero Image ────────────────────────────────────────────────
  // Set to your image filename (must be inside the images/ folder).
  // Set to null to use the CSS pattern background instead.
  heroImage: null,               // e.g. "images/tribunal-hero.jpg"

  // Chips shown in the hero section.
  heroTags: ["Python", "RAGAS", "LLM Eval", "GovTech SG"],

  // ── The Problem ───────────────────────────────────────────────
  problemQuote: "We were shipping chatbot features weekly but had no systematic way to know if the AI was actually improving. Human review was our only signal — and it didn't scale past 50 responses a day.",

  problemDescription: "As GovTech teams pushed LLM-powered features into production, a critical gap emerged: there was no repeatable, quantitative framework to assess response quality. Engineers were flying blind — relying on intuition and spot-checks rather than data. Regressions went undetected across model version updates, prompt changes, and retrieval tuning cycles. Tribunal was built to close this gap by treating evaluation as an engineering discipline, not an afterthought.",

  // Four problem cards. icon = any Material Symbols name.
  problemCards: [
    {
      icon:        "visibility_off",
      title:       "Hallucination Blindspot",
      description: "LLMs confidently return plausible but fabricated answers. Without ground-truth scoring, there's no reliable signal distinguishing a hallucination from a correct response.",
    },
    {
      icon:        "hourglass_empty",
      title:       "Manual QA Bottleneck",
      description: "Human reviewers can't scale with model iteration velocity. A team shipping 5 prompt changes a week needs automated scoring, not spreadsheet-based review sessions.",
    },
    {
      icon:        "compare_arrows",
      title:       "Regression Roulette",
      description: "Every model swap or retrieval change can silently degrade quality on edge cases. Without a benchmark test suite, teams discover regressions from user complaints — not pre-deploy checks.",
    },
    {
      icon:        "bar_chart",
      title:       "No Comparable Baseline",
      description: "Teams lacked a shared scoring vocabulary. \"This response is good\" means nothing without a numeric rubric — making cross-team benchmarking impossible.",
    },
  ],

  // ── Architecture Pipeline ─────────────────────────────────────
  // Two rows of nodes. Each node: icon (Material Symbols), label, sublabel.
  // Row 1 uses amber styling, row 2 uses tertiary (blue-white) styling.
  archPipelineRow1: [
    { icon: "dataset",   label: "Test Dataset",  sublabel: "Q&A pairs + context" },
    { icon: "smart_toy", label: "LLM Response",  sublabel: "Chatbot inference" },
    { icon: "hub",       label: "RAGAS Eval",    sublabel: "Multi-dim scoring" },
  ],
  archPipelineRow2: [
    { icon: "gavel",       label: "LLM Judge",      sublabel: "GPT-4 / Claude panel" },
    { icon: "analytics",   label: "Metrics Report", sublabel: "Scores + deltas" },
    { icon: "check_circle",label: "Verdict",        sublabel: "Pass / Fail / Warn" },
  ],

  archDescription: "Tribunal runs on a two-layer evaluation stack. The first layer applies RAGAS metrics — a set of reference-free and reference-based scores covering faithfulness, answer relevancy, context precision, and context recall. The second layer routes each response through an LLM judge panel that scores coherence, tone, and safety against a rubric. Both layers write scores to a unified report, enabling trend tracking across runs.",

  // ── Implementation ────────────────────────────────────────────
  // Plain text paragraphs — no HTML needed.
  implParagraphs: [
    "The evaluation pipeline is orchestrated in Python, with RAGAS handling the retrieval-augmented generation scoring layer. Test datasets are structured as JSON — each entry contains the user question, the retrieved context chunks, the chatbot's answer, and the ground-truth reference answer.",
    "The LLM judge component uses a prompt chain to evaluate responses on a five-point rubric: accuracy, relevance, completeness, coherence, and safety. Multiple judge calls per response reduce single-model bias, and scores are averaged with confidence intervals to surface ambiguous cases.",
    "Results are serialised to CSV and JSON, enabling downstream visualisation in any BI tool. The framework is provider-agnostic — any chatbot that exposes an HTTP endpoint can be slotted in as the evaluated system.",
  ],

  // The code block. Use plain text — indent with spaces, not tabs.
  implCodeFilename: "evaluation_pipeline.py",
  implCode:
`# Load test dataset and run RAGAS evaluation
dataset = load_dataset("test_cases.json")
results = evaluate(
    dataset,
    metrics=[
        faithfulness,
        answer_relevancy,
        context_precision,
        context_recall,
    ],
)
# Route to LLM judge panel for qualitative scoring
judge_scores = panel.evaluate(
    responses=dataset["answer"],
    rubric=JUDGE_RUBRIC_V2,
    judges=["gpt-4o-mini", "claude-3-5-haiku","gemini-2.0-flash-lite"],
)
report = merge_and_export(results, judge_scores)`,

  // ── Aside — System Specifications ────────────────────────────
  specs: [
    { key: "Eval Framework",  value: "RAGAS 0.4.3" },
    { key: "Judge Models",    value: "GPT-4o + Claude + gemini" },
    { key: "Eval Dimensions", value: "20+ metrics" },
    { key: "Language",        value: "Python 3.11" },
    { key: "Output Formats",  value: "JSON + CSV" },
    { key: "Context",         value: "GovTech SG" },
  ],

  // ── Aside — Key Technologies ──────────────────────────────────
  technologies: [
    "Python", "RAGAS", "OpenAI API", "Claude API", "GEMINI API",
    "LangChain", "Pandas", "SQL",
  ],

  // ── Aside — Metrics Bars ──────────────────────────────────────
  // type: "core" (amber) or "extended" (blue-white).
  metricsBars: [
    { label: "FAITHFULNESS",      type: "core" },
    { label: "ANSWER RELEVANCY",  type: "core" },
    { label: "CONTEXT PRECISION", type: "core" },
    { label: "CONTEXT RECALL",    type: "core" },
    { label: "COHERENCE (JUDGE)", type: "extended" },
    { label: "SAFETY (JUDGE)",    type: "extended" },
    { label: "VERBOSITY (JUDGE)", type: "extended" },
    { label: "ACCURACY (JUDGE)",  type: "extended" },
  ],

  // ── Results ───────────────────────────────────────────────────
  results: [
    {
      number:      "9x",
      label:       "Faster QA Cycle",
      description: "Automated scoring replaced multi-day manual review cycles with overnight pipeline runs across hundreds of test cases.",
    },
    {
      number:      "20+",
      label:       "Eval Dimensions",
      description: "Twenty RAGAS metrics plus five types of custom judge-panel rubric dimensions give a 360° view of chatbot response quality.",
    },
    {
      number:      "100%",
      label:       "Provider Agnostic",
      description: "Any chatbot exposing an HTTP endpoint can be plugged in as the evaluated system — no vendor lock-in.",
    },
  ],

  // ── Reflections ───────────────────────────────────────────────
  // Two paragraphs — one before the quote, one after.
  reflectionParagraphs: [
    "Building Tribunal forced a clarifying insight: evaluation is not a test — it's a discipline. Teams that treat LLM quality as something you \"check once\" before launch are building on sand. The models change, the prompts change, the data changes. Without a continuous measurement loop, every deployment is a bet on memory.",
    "The next evolution of Tribunal is a live scoring dashboard — real-time quality monitoring across production chatbot traffic, not just offline test suites. If the faithfulness score drops below a threshold after a model swap, the system should page an engineer before any user complains.",
  ],
  quote:        "You can't improve what you can't measure. In LLM systems, that means shipping an evaluation harness before you ship the product.",
  quoteAuthor:  "Darren Chua · GovTech Singapore",
  quoteInitials:"DC",

};
