// ╔══════════════════════════════════════════════════════════════╗
// ║  CASE STUDY CONTENT — edit this file to update the page.    ║
// ║  No HTML knowledge needed. Save and refresh to see changes. ║
// ╚══════════════════════════════════════════════════════════════╝

window.CASE_STUDY = {

  // ── Header & Nav ─────────────────────────────────────────────
  title:     "HomeTongue",
  category:  "Project Case Study // Speech & Language AI · {build} Hackathon",
  subtitle:  "\"Voices Before They Fade\" — an AI family archive that records grandparents speaking in dialect, preserves the meaning behind their words, and turns everyday moments into living heritage before it's too late.",
  githubUrl: "https://github.com/darrenCWJ/HomeTongue",

  // ── Hero Image ────────────────────────────────────────────────
  // Set to your image filename (must be in the project root or images/ folder).
  // Set to null to use the CSS pattern background instead.
  heroImage: "images/hometongue-hero.png",

  // Chips shown in the hero section.
  heroTags: ["TypeScript", "Speech AI", "Dialect Preservation", "Vercel", "{build} Hackathon SG"],

  // ── The Problem ───────────────────────────────────────────────
  // The opening quote shown in the highlighted block.
  problemQuote: "When young Singaporeans can no longer speak their grandparents' dialect, families lose more than words — they lose connection, memory, and heritage.",

  // The paragraph below the quote.
  problemDescription: "The root cause is not that people don't care about dialects. Dialect is no longer being passed down consistently in everyday family life. Many families have shifted toward English and Mandarin, so younger generations may still hear dialect — at family dinners, festive visits, in casual conversations at home — but don't get enough repeated, practical exposure to understand or respond. Existing learning resources are generic; they cannot capture how Ah Gong tells a joke in his particular way, or the recipes Ah Ma explains only in Hokkien. Families are left without a simple, meaningful way to record how their loved ones actually speak, and pass that on.",

  // Four problem cards. icon = any Material Symbols name.
  problemCards: [
    {
      icon:        "voice_over_off",
      title:       "Dialect Falling Silent",
      description: "Younger generations hear dialect at home but lack the repeated, practical exposure to understand or respond — so everyday family conversations gradually shift fully to English or Mandarin.",
    },
    {
      icon:        "folder_off",
      title:       "No Family Archive",
      description: "Grandparents' voices, phrases, jokes, and stories are almost never recorded in any reusable form. When they are gone, so are the little expressions that carried decades of warmth, identity, and memory.",
    },
    {
      icon:        "menu_book",
      title:       "Generic Learning Resources",
      description: "Existing dialect tools are built for general audiences. They can't capture how Ah Gong tells that joke in his particular way, or the scoldings that somehow still sound loving, or the recipes explained only in Hokkien.",
    },
    {
      icon:        "warning",
      title:       "The Loss Is Permanent",
      description: "Regret comes too late. Once elder voices are gone, so are the stories behind old family photos, the festive greetings passed down for generations, and Singapore's living heritage — not in museums, but in the voices of our homes.",
    },
  ],

  // ── Architecture Pipeline ─────────────────────────────────────
  // Two rows of nodes. Each node: icon (Material Symbols), label, sublabel.
  // Row 1 uses amber styling, row 2 uses tertiary (blue-white) styling.
  archPipelineRow1: [
    { icon: "mic",          label: "RECORD",      sublabel: "Capture elder's voice" },
    { icon: "hearing",      label: "DIALECT_STT", sublabel: "Transcribe dialect audio" },
    { icon: "translate",    label: "LLM_ENRICH",  sublabel: "Translate + contextualise" },
  ],
  archPipelineRow2: [
    { icon: "sell",         label: "TAG_SUGGEST",  sublabel: "Key phrases + tags" },
    { icon: "photo_album",  label: "FAMILY_VAULT", sublabel: "Searchable archive" },
    { icon: "school",       label: "LEARN_BITE",   sublabel: "Bite-sized moments" },
  ],

  // Paragraph below the pipeline diagram.
  archDescription: "HomeTongue's pipeline is built around preservation, not just translation. The family opens the app during a natural moment — a festive visit, a dinner conversation, a story being told — and records the elder speaking in dialect. That audio passes through a dialect-tuned STT layer for transcription, then into an LLM enrichment step that produces a translation, surfaces key phrases, suggests tags, and proposes a simple reply the younger family member can use. Everything is saved to a searchable family vault and automatically broken into bite-sized learning cards the next generation can revisit and learn from.",

  // ── Implementation ────────────────────────────────────────────
  // Plain text paragraphs — no HTML needed.
  implParagraphs: [
    "The frontend is built in TypeScript with a React + Next.js stack, deployed on Vercel for instant availability. Recording uses the browser's MediaRecorder API — no app install required, so families can open it on any device during the moment, not later when the moment has passed.",
    "The LLM enrichment layer does more than translate. A prompt chain extracts the emotional register of what was said (advice, memory, joke, recipe), proposes relevant tags for the archive, highlights key phrases worth learning, and generates a contextually appropriate reply suggestion the younger family member can try in the next turn.",
    "Longer recordings — a story about the old kampong, a recipe walked through step by step — are automatically segmented into shorter learning moments. Each segment becomes a standalone card in the family vault: the original audio clip, the dialect transcript, the English translation, and a cultural note explaining what made that expression unique.",
  ],

  // The code block. Use plain text — indent with spaces, not tabs.
  implCodeFilename: "app/api/preserve/route.ts",
  implCode:
`// Record a dialect moment and save it to the family archive
export async function POST(req: Request) {
  const { audioBlob, dialect, speakerName } = await req.json();

  // Transcribe dialect audio
  const transcript = await transcribeDialect(audioBlob, dialect);

  // Enrich with translation, tags, key phrases, reply suggestion
  const { translation, keyPhrases, tags, suggestedReply, culturalNote } =
    await enrichMoment(transcript, dialect);

  // Segment longer recordings into learning moments
  const learningCards = await segmentIntoCards({
    transcript,
    translation,
    keyPhrases,
    audioBlob,
  });

  // Save everything to the family vault
  const entry = await familyVault.save({
    speaker:      speakerName,
    dialect,
    original:     transcript,
    translation,
    keyPhrases,
    tags,
    culturalNote,
    learningCards,
    audio:        audioBlob,
    timestamp:    new Date(),
  });

  return Response.json({ entry, suggestedReply });
}`,

  // ── Aside — System Specifications ────────────────────────────
  specs: [
    { key: "Frontend",    value: "TypeScript + React" },
    { key: "Framework",   value: "Next.js (App Router)" },
    { key: "Deployment",  value: "Vercel" },
    { key: "STT",         value: "Whisper / ElevenLabs" },
    { key: "LLM",         value: "GPT-4o-mini" },
    { key: "Dialects",    value: "Hokkien, Cantonese, Teochew" },
    { key: "Context",     value: "{build} Hackathon SG 2026" },
  ],

  // ── Aside — Key Technologies ──────────────────────────────────
  technologies: [
    "TypeScript", "Next.js", "React", "OpenAI API",
    "ElevenLabs", "Whisper", "Vercel", "MediaRecorder API",
  ],

  // ── Aside — Metrics Bars ──────────────────────────────────────
  // type: "core" (amber) or "extended" (blue-white).
  metricsBars: [
    { label: "DIALECT TRANSCRIPTION",    type: "core" },
    { label: "TRANSLATION FIDELITY",     type: "core" },
    { label: "PHRASE PRESERVATION",      type: "core" },
    { label: "CULTURAL CONTEXT",         type: "extended" },
    { label: "ARCHIVE SEARCHABILITY",    type: "extended" },
    { label: "LEARNING CARD QUALITY",    type: "extended" },
  ],

  // ── Results ───────────────────────────────────────────────────
  results: [
    {
      number:      "48h",
      label:       "Zero to Demo",
      description: "Designed, built, and deployed within the hackathon window — recording, transcription, LLM enrichment, and family vault all live and functional.",
    },
    {
      number:      "3",
      label:       "Dialect Groups",
      description: "Hokkien, Cantonese, and Teochew — the three major Chinese dialects spoken across Singapore's elder generation, each with distinct vocabulary and expression.",
    },
    {
      number:      "∞",
      label:       "Archive Lives On",
      description: "Every recording added to the family vault persists — searchable, shareable, and learnable by grandchildren who haven't been born yet.",
    },
  ],

  // ── Reflections ───────────────────────────────────────────────
  // Two paragraphs — one before the quote, one after.
  reflectionParagraphs: [
    "HomeTongue started as a hackathon project but landed on a problem with a real deadline — not a product deadline, but a human one. The elder voices we're trying to preserve are finite. Building this made clear that the most important feature wasn't translation quality or latency. It was lowering the barrier to recording in the first place: making it feel natural enough that a family would actually open it at the dinner table, not think \"I should do this sometime\" and never get around to it.",
    "The product insight that shaped everything was this: people don't want to learn a dialect in the abstract. They want to understand what Ah Gong just said. They want to reply in a way that makes him smile. They want their children to one day hear his voice telling that story about the old kampong — and know exactly what he meant. The archive is the product. The AI is just what makes the moment worth keeping.",
  ],
  quote:        "The loss is permanent. Once those voices are gone, so are the jokes that only Ah Gong tells in a certain way — and no language app in the world can give those back.",
  quoteAuthor:  "Darren Chua · {build} Hackathon SG",
  quoteInitials:"DC",

};
