// ╔══════════════════════════════════════════════════════════════╗
// ║  CASE STUDY CONTENT — edit this file to update the page.    ║
// ║  No HTML knowledge needed. Save and refresh to see changes. ║
// ╚══════════════════════════════════════════════════════════════╝

window.CASE_STUDY = {

  // ── Header & Nav ─────────────────────────────────────────────
  title:     "Hustle SG",
  category:  "Project Case Study // Singapore Gig Platform · {build} Hackathon · Team 220",
  subtitle:  "\"Verified talent, matched by AI\" — a MyCareersFuture for freelancers: Singpass-verified hustlers ranked by semantic embeddings, interviewed by async video, and guided from side income to registered business. Built for Singapore's 257,000 own-account workers and validated by a 500-respondent survey.",
  githubUrl: "https://github.com/darrenCWJ/hustle-sg",

  // ── Hero Image ────────────────────────────────────────────────
  heroImage: "images/hustlesg-hero.png",

  heroTags: ["TypeScript", "Next.js 15", "Pinecone", "OpenAI Embeddings", "{build} Hackathon SG"],

  // ── The Problem ───────────────────────────────────────────────
  problemQuote: "Singapore has 257,000 own-account workers, yet only 29% use platforms to find work — the rest run serious careers on informal, trust-deficient channels.",

  problemDescription: "MyCareersFuture, the government's AI-powered jobs portal, serves permanent and contract employment — no equivalent exists for the self-employed. LinkedIn is for careers. Carousell has listings but no trust layer. Global platforms charge 15–20% commissions and integrate with none of Singapore's infrastructure (Singpass, WSQ, ACRA, IRAS). In our 500-respondent survey, 87% rated trust and verification 4 or 5 out of 5 in importance, and 91% said they would complete verification steps if it helped them win more or safer work. There is no platform in Singapore that knows your actual skills, verifies your identity, and surfaces the right gig at the right moment. Employers struggle to distinguish a barista with three verified F&B stints from someone listing 'service industry' on a plain-text CV. Side-hustlers with real credentials have no way to demonstrate them quickly enough to win short-term gigs. And the jump from 'earning on the side' to 'running a proper business' is full of ACRA, IRAS, and CPF acronyms that nobody explains in plain English.",

  problemCards: [
    {
      icon:        "lock",
      title:       "No Trust Infrastructure",
      description: "\"Hard to know who is trustworthy\" was the #1 frustration in our survey (313 mentions), followed by scams and fake listings (281). Singapore has Singpass — a national digital identity system — but gig platforms don't use it. Without verified credentials, employers default to gut feel.",
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
    { key: "Team",        value: "Team 220 · 5 members" },
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
      number:      "500",
      label:       "Survey Respondents",
      description: "Across worker, requestor, and dual-role segments: 87% rated trust and verification 4–5 out of 5, 91% were willing to complete verification steps, and 53% find relevant matching difficult today.",
    },
    {
      number:      "257k",
      label:       "Underserved Freelancers",
      description: "Singapore's own-account workforce (MOM 2022), of which only 29% use platforms to find work — while 'side job' searches grew 414% year-on-year. A structural gap no global platform is built to close.",
    },
    {
      number:      "1536",
      label:       "Embedding Dimensions",
      description: "Every hustler profile and gig posting is encoded as a 1536-dimension vector using OpenAI's text-embedding-3-small, enabling semantic matching that goes far beyond keyword search.",
    },
  ],

  // ── Reflections ───────────────────────────────────────────────
  reflectionParagraphs: [
    "Hustle SG started as a question: why does Singapore's freelance economy feel so informal when the talent is so serious? The Singpass mock wasn't a gimmick — it was the foundation. Once you have verified identity, every other feature becomes more trustworthy. Cert parsing via Claude extracts real skills. Embeddings on verified profiles produce meaningful matches. The whole platform's credibility rests on that first step of knowing who you are actually dealing with. And the AI doesn't just find matches — it explains them: 'why you rank high' and 'why you're locked out' on every gig card makes the system legible rather than mysterious. That transparency proved as important as the algorithm itself.",
    "The bazaar at {build} sharpened the scope: reviewers' questions about skill verification, review calibration, liability, and new-entrant barriers all pointed at the same missing trust infrastructure — and the 'MyCareersFuture for freelancers' framing resonated immediately. The platform now measures itself against one North Star: verified transaction completion rate — the share of engagements that end in a completed, escrow-released, reviewed transaction between two verified users. With the Platform Workers Act 2025 in force and Budget 2025 introducing direct freelancer payouts, the policy tailwind is real; HustleSG operationalises the fair-contracting standard (TS-SEP) the government has already written.",
  ],
  quote:        "Talent in Singapore is everywhere. But without trust, verification, and context-aware matching, the right people and the right gigs never find each other at the right time.",
  quoteAuthor:  "Darren Chua · {build} Hackathon SG",
  quoteInitials:"DC",

};
