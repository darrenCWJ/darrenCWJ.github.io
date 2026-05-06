// ╔══════════════════════════════════════════════════════════════╗
// ║  CASE STUDY CONTENT — edit this file to update the page.    ║
// ║  No HTML knowledge needed. Save and refresh to see changes. ║
// ╚══════════════════════════════════════════════════════════════╝

window.CASE_STUDY = {

  // ── Header & Nav ─────────────────────────────────────────────
  title:     "Hustle SG",
  category:  "Project Case Study // Singapore Gig Platform · {build} Hackathon",
  subtitle:  "\"Verified talent, matched by AI\" — a Singapore-first gig platform where Singpass-verified hustlers are ranked by semantic embeddings, interviewed by video, and guided from side income to registered business.",
  githubUrl: "https://github.com/darrenCWJ/hustle-sg",

  // ── Hero Image ────────────────────────────────────────────────
  heroImage: "images/hustlesg-hero.png",

  heroTags: ["TypeScript", "Next.js 15", "Pinecone", "OpenAI Embeddings", "{build} Hackathon SG"],

  // ── The Problem ───────────────────────────────────────────────
  problemQuote: "Singapore's gig economy is serious talent running on informal infrastructure — no verification, no context-aware matching, and no clear path from side hustle to registered business.",

  problemDescription: "LinkedIn is for careers. Carousell has listings but no trust layer. There is no platform in Singapore that knows your actual skills, verifies your identity, and surfaces the right gig at the right moment. Employers struggle to distinguish a barista with three verified F&B stints from someone listing 'service industry' on a plain-text CV. Side-hustlers with real credentials have no way to demonstrate them quickly enough to win short-term gigs. And the jump from 'earning on the side' to 'running a proper business' is full of ACRA, IRAS, and CPF acronyms that nobody explains in plain English.",

  problemCards: [
    {
      icon:        "lock",
      title:       "No Trust Infrastructure",
      description: "Anyone can claim any skill on a gig listing. Singapore has Singpass — a national digital identity system — but gig platforms don't use it. Without verified credentials, employers default to gut feel, and talented hustlers lose to polished but unverified profiles.",
    },
    {
      icon:        "manage_search",
      title:       "Keyword Matching Fails",
      description: "A barista with two verified F&B stints, bilingual in Mandarin, available Sunday mornings should rank very differently from a first-timer with the same title. Traditional job boards match keywords, not context. Semantic embeddings change that.",
    },
    {
      icon:        "trending_up",
      title:       "The Side-to-CEO Gap",
      description: "Many freelancers want to go legit — register with ACRA, open a business bank account, understand IRAS tax obligations. The path exists but it's opaque, expensive-feeling, and scattered across government portals with no plain-English guide.",
    },
    {
      icon:        "videocam_off",
      title:       "No Async Interview Layer",
      description: "Employers posting short gigs can't afford to schedule calls with every applicant. Hustlers can't pitch themselves beyond a static profile. Async video introductions compress the trust gap and let both sides decide before committing.",
    },
  ],

  // ── Architecture Pipeline ─────────────────────────────────────
  archPipelineRow1: [
    { icon: "badge",          label: "SINGPASS",     sublabel: "NRIC verify + face scan" },
    { icon: "summarize",      label: "CERT_PARSE",   sublabel: "Claude extracts skills" },
    { icon: "hub",            label: "EMBED",        sublabel: "1536-d OpenAI vector" },
  ],
  archPipelineRow2: [
    { icon: "saved_search",   label: "VEC_SEARCH",   sublabel: "Pinecone cosine match" },
    { icon: "sort",           label: "RERANK",       sublabel: "Calendar + trust boost" },
    { icon: "dynamic_feed",   label: "GIG_FEED",     sublabel: "Personalised results" },
  ],

  archDescription: "The pipeline starts at identity. A mock Singpass flow validates the NRIC checksum and runs a face-scan animation before the hustler can claim any skills. Uploaded certifications pass through Claude Haiku to extract issuer, title, and relevant skills — so the profile is built from verified facts, not self-reported text. That profile is then converted to a 1536-dimension embedding via OpenAI's text-embedding-3-small, stored in Pinecone, and matched against gig embeddings using cosine similarity. A re-ranking step boosts results by calendar availability, trust score, and response speed before the personalised feed is returned.",

  // ── Implementation ────────────────────────────────────────────
  implParagraphs: [
    "The frontend is built in TypeScript with Next.js 15 (App Router) and React 19, deployed on Vercel. Pinecone handles vector storage and similarity search — every hustler profile and gig posting is upserted as a 1536-dimension vector, with metadata kept in a relational store for structured queries.",
    "Certification parsing uses Claude Haiku 4.5: when a hustler uploads a certificate image or PDF, a structured extraction prompt returns the issuer, qualification title, and a list of inferred skills. These are added to the profile before embedding, so the vector captures verified credentials — not just self-reported keywords.",
    "The Instant Gigs feature adds a location and calendar layer to the AI ranking. Beyond semantic similarity, the algorithm factors in distance (28%), trust score (18%), response speed (14%), repeat rate (10%), and calendar fit (6%) — and explains every rank decision in plain English on the card so hustlers know exactly why they placed where they did.",
  ],

  implCodeFilename: "app/api/match/route.ts",
  implCode:
`// Match a hustler's composite embedding to live gig postings
export async function POST(req: Request) {
  const { hustlerId } = await req.json();

  // Load hustler's verified profile from relational store
  const hustler = await db.hustlers.findUnique({ where: { id: hustlerId } });

  // Semantic search across active gig postings via Pinecone
  const index = pinecone.index('hustle-sg-gigs');
  const results = await index.query({
    vector:          hustler.embedding,
    topK:            50,
    includeMetadata: true,
    filter:          { status: 'active' },
  });

  // Re-rank by calendar fit, trust score, and response speed
  const ranked = rerank(results.matches, {
    availability:  hustler.availability,
    trustScore:    hustler.trust_score,
  });

  return Response.json({ matches: ranked.slice(0, 20) });
}`,

  // ── Aside — System Specifications ────────────────────────────
  specs: [
    { key: "Frontend",    value: "TypeScript + React 19" },
    { key: "Framework",   value: "Next.js 15 (App Router)" },
    { key: "Vector DB",   value: "Pinecone" },
    { key: "AI Matching", value: "OpenAI text-embedding-3-small" },
    { key: "AI Parsing",  value: "Claude Haiku 4.5" },
    { key: "Auth",        value: "Mock Singpass (NRIC + Face)" },
    { key: "Deployment",  value: "Vercel" },
    { key: "Context",     value: "{build} Hackathon SG 2026" },
  ],

  // ── Aside — Key Technologies ──────────────────────────────────
  technologies: [
    "TypeScript", "Next.js 15", "React 19", "Pinecone",
    "OpenAI API", "Claude Haiku", "Vercel", "MediaRecorder API",
  ],

  // ── Aside — Metrics Bars ──────────────────────────────────────
  metricsBars: [
    { label: "IDENTITY VERIFICATION",      type: "core" },
    { label: "SEMANTIC MATCH ACCURACY",    type: "core" },
    { label: "INSTANT GIG RANKING",        type: "core" },
    { label: "CERT PARSING FIDELITY",      type: "extended" },
    { label: "VIDEO INTERVIEW FLOW",       type: "extended" },
    { label: "BUSINESS REGISTRATION GUIDE",type: "extended" },
  ],

  // ── Results ───────────────────────────────────────────────────
  results: [
    {
      number:      "48h",
      label:       "Zero to Platform",
      description: "Identity verification, semantic matching, instant gigs, async video interviews, and a business registration guide — all built and deployed within the hackathon window.",
    },
    {
      number:      "1536",
      label:       "Embedding Dimensions",
      description: "Every hustler profile and gig posting is encoded as a 1536-dimension vector using OpenAI's text-embedding-3-small, enabling semantic matching that goes far beyond keyword search.",
    },
    {
      number:      "6",
      label:       "Rank Signals",
      description: "Distance, skill match, trust score, response speed, repeat rate, and calendar fit — each weighted and explained on every gig card so hustlers understand exactly why they ranked where they did.",
    },
  ],

  // ── Reflections ───────────────────────────────────────────────
  reflectionParagraphs: [
    "Hustle SG started as a question: why does Singapore's freelance economy feel so informal when the talent is so serious? The Singpass mock wasn't a gimmick — it was the foundation. Once you have verified identity, every other feature becomes more trustworthy. Cert parsing via Claude extracts real skills. Embeddings on verified profiles produce meaningful matches. The whole platform's credibility rests on that first step of knowing who you are actually dealing with.",
    "The semantic matching insight was about context, not just skills. A barista who has worked two verified F&B stints, speaks Mandarin, and has a Sunday morning free slot should rank completely differently for a kopitiam morning shift than someone with the same job title and no verified context. The AI doesn't just find matches — it explains them. 'Why you rank high' and 'Why you're locked out' on every card makes the system legible rather than mysterious. That transparency turned out to be as important as the algorithm itself.",
  ],
  quote:        "Talent in Singapore is everywhere. But without trust, verification, and context-aware matching, the right people and the right gigs never find each other at the right time.",
  quoteAuthor:  "Darren Chua · {build} Hackathon SG",
  quoteInitials:"DC",

};
