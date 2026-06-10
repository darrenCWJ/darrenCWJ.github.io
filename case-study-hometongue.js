// ╔══════════════════════════════════════════════════════════════╗
// ║  CASE STUDY CONTENT — edit this file to update the page.    ║
// ║  No HTML knowledge needed. Save and refresh to see changes. ║
// ╚══════════════════════════════════════════════════════════════╝

window.CASE_STUDY = {

  // ── Header & Nav ─────────────────────────────────────────────
  title:     "HomeTongue",
  category:  "Project Case Study // Speech & Language AI · {build} Hackathon · Team 92",
  subtitle:  "\"Stay in the conversation\" — an AI companion that helps Singaporeans understand dialect-speaking seniors, respond in Cantonese, and learn from real exchanges. Validated by 735 survey responses, three rounds of public prototype testing, and a research-driven pivot.",
  githubUrl: "https://github.com/darrenCWJ/HomeTongue",

  // ── Hero Image ────────────────────────────────────────────────
  // Set to your image filename (must be in the project root or images/ folder).
  // Set to null to use the CSS pattern background instead.
  heroImage: "images/hometongue-hero.png",

  // Chips shown in the hero section.
  heroTags: ["TypeScript", "Speech AI", "Cantonese First", "735 Survey Responses", "{build} Hackathon SG"],

  // ── The Problem ───────────────────────────────────────────────
  // The opening quote shown in the highlighted block.
  problemQuote: "Many people do not lack care for seniors — they lack the words and confidence to express it in the dialect seniors understand best.",

  // The paragraph below the quote.
  problemDescription: "Users are not trying to \"translate a sentence.\" They are trying to stay present in a live conversation with a senior — at home with grandparents, in healthcare settings with elderly patients, during community visits. They need to understand what was said, express their own response in dialect, and continue the exchange without freezing, guessing, or relying on someone else to speak for them. Our user testing surfaced a nuanced insight: many users already know what they want to say — they just cannot say it naturally and confidently in Cantonese. Existing tools handle one-off translation or generic lessons, but nothing supports the full loop: Understand → Respond → Save → Learn → Improve.",

  // Four problem cards. icon = any Material Symbols name.
  problemCards: [
    {
      icon:        "hourglass_disabled",
      title:       "Conversations End Too Early",
      description: "A grandchild stops at polite small talk. A nurse can't confidently reassure a worried patient. A volunteer misses the chance to make a senior feel heard. Each shortened exchange weakens family bonds and trust in care settings.",
    },
    {
      icon:        "record_voice_over",
      title:       "\"I Know What I Want to Say\"",
      description: "Prototype testing revealed the core pain isn't deciding what to say — users often know their intended reply but can't express it naturally in Cantonese. This validated a first-class \"Say Something Else\" flow: speak or type in English, get it back in dialect.",
    },
    {
      icon:        "sync_problem",
      title:       "Translation Isn't the Loop",
      description: "Google Translate helps you understand a one-off sentence. Nothing supports conversation continuity — understanding, responding in real time, saving useful phrases, and practising from real exchanges until you need the app less.",
    },
    {
      icon:        "location_on",
      title:       "Localisation Gap",
      description: "Singapore Cantonese is not Hong Kong or Malaysia Cantonese. Testers flagged generic phrasing immediately — local expressions and mixed English-Mandarin-Cantonese sentences are the reality the product must handle.",
    },
  ],

  // ── Architecture Pipeline ─────────────────────────────────────
  // Two rows of nodes. Each node: icon (Material Symbols), label, sublabel.
  // Row 1 uses amber styling, row 2 uses tertiary (blue-white) styling.
  archPipelineRow1: [
    { icon: "mic",          label: "LISTEN",       sublabel: "Capture the senior live" },
    { icon: "hearing",      label: "DIALECT_STT",  sublabel: "Transcribe Cantonese" },
    { icon: "psychology",   label: "EXPLAIN",      sublabel: "English meaning + intent" },
  ],
  archPipelineRow2: [
    { icon: "question_answer", label: "RESPOND",     sublabel: "Suggested or your own words" },
    { icon: "volume_up",       label: "TTS_PLAYBACK", sublabel: "Speak it in Cantonese" },
    { icon: "school",          label: "SAVE_LEARN",   sublabel: "Real moments → practice" },
  ],

  // Paragraph below the pipeline diagram.
  archDescription: "HomeTongue's pipeline is built around one stressful moment: you're looking at a senior, trying to listen, understand, and reply without breaking the flow. The user records what the senior says; dialect speech-to-text transcribes it and an LLM explains the meaning in English. To respond, the user can pick an optional AI-suggested reply — or use \"Say Something Else\" to speak or type their own English response and have it converted to Cantonese with audio playback they can play aloud or imitate. Useful moments are saved after the conversation, where Learn Mode turns them into practice material with lightweight pronunciation scoring — so each future conversation needs the app a little less.",

  // ── Implementation ────────────────────────────────────────────
  // Plain text paragraphs — no HTML needed.
  implParagraphs: [
    "The frontend is built in TypeScript with a React + Next.js stack, deployed on Vercel as a mobile web app — no install required, because the moment of need is live and unplanned. The live screen is deliberately minimal: one clear primary action (listen to the senior), tap-or-hold recording, and the ability to extend a recording when the senior keeps speaking in chunks.",
    "The respond flow has two first-class paths, a direct outcome of user testing. Optional AI-suggested replies are generated from the conversation context and intent — but testing showed some users found them unnecessary, so they toggle off cleanly. \"Say Something Else\" handles the validated majority case: the user speaks or types their intended reply in English, and the app converts it to Cantonese with playback — human-in-the-loop, so the user reviews the English meaning before anything is spoken aloud.",
    "Learn Mode closes the loop. Saved phrases and conversations become practice material drawn from the user's real life, not a generic curriculum. A lightweight scoring mechanism compares the learner's STT-captured attempt against the target phrase — deliberately positioned as an early confidence-builder rather than full Cantonese tone scoring. Persona and context personalise future suggestions over time.",
  ],

  // The code block. Use plain text — indent with spaces, not tabs.
  implCodeFilename: "app/api/conversation-turn/route.ts",
  implCode:
`// One live conversation turn: understand → respond → speak
export async function POST(req: Request) {
  const { audioBlob, mode, userIntent, context } = await req.json();

  // 1. UNDERSTAND — transcribe the senior's Cantonese, explain in English
  const transcript = await transcribeCantonese(audioBlob);
  const meaning    = await explainInEnglish(transcript, context);

  // 2. RESPOND — two first-class paths, validated by user testing
  const reply = mode === 'say-something-else'
    ? await englishToCantonese(userIntent)        // user knows what to say
    : await suggestReplies(transcript, context);  // user wants options

  // 3. SPEAK — Cantonese audio the user can play or imitate
  const replyAudio = await synthesiseCantonese(reply);

  // 4. SAVE — useful moments become Learn Mode practice material
  return Response.json({ transcript, meaning, reply, replyAudio });
}`,

  // ── Aside — System Specifications ────────────────────────────
  specs: [
    { key: "Frontend",    value: "TypeScript + React" },
    { key: "Framework",   value: "Next.js (App Router)" },
    { key: "Deployment",  value: "Vercel" },
    { key: "STT",         value: "Whisper / ElevenLabs" },
    { key: "LLM",         value: "GPT-4o-mini" },
    { key: "Dialect",     value: "Cantonese first · Hokkien, Teochew, Hakka next" },
    { key: "Team",        value: "Team 92 · 4 members" },
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
    { label: "LIVE TRANSCRIPTION",        type: "core" },
    { label: "ENGLISH MEANING",           type: "core" },
    { label: "RESPONSE CONVERSION",       type: "core" },
    { label: "SUGGESTED REPLIES",         type: "extended" },
    { label: "LEARN MODE SCORING",        type: "extended" },
    { label: "SG CANTONESE LOCALISATION", type: "extended" },
  ],

  // ── Results ───────────────────────────────────────────────────
  results: [
    {
      number:      "735",
      label:       "Survey Responses",
      description: "Collected via FormSG to validate the need — 87.9% of respondents found the idea at least somewhat useful, with demand spanning family, healthcare, and community settings.",
    },
    {
      number:      "73.7%",
      label:       "Top Feature Signal",
      description: "Real-time dialect translation was the most requested feature (518 of 703 feature respondents) — archive features ranked last. That data drove the pivot from memory archive to live conversation companion.",
    },
    {
      number:      "3",
      label:       "Rounds of User Testing",
      description: "Public prototype testing with non-dialect speakers, family caregivers, and healthcare-adjacent users — validating the \"Say Something Else\" flow and making suggested replies optional.",
    },
  ],

  // ── Reflections ───────────────────────────────────────────────
  // Two paragraphs — one before the quote, one after.
  reflectionParagraphs: [
    "HomeTongue began as \"Voices Before They Fade\" — an archive for preserving grandparents' dialect recordings. Then 735 survey responses said otherwise: voice archiving ranked at the bottom of requested features (15.9%), while real-time translation topped the list at 73.7%. We pivoted from memory archive to live conversation companion — the hardest and best product decision of the hackathon. The wedge is not better translation, and it is not preservation. The wedge is conversation continuity: helping someone stay present in a live exchange they would otherwise shorten or avoid.",
    "The deepest insight came from watching testers: people often already know what they want to say — they need help saying it in Cantonese. So \"Say Something Else\" became a first-class path rather than a hidden fallback, and AI-suggested replies became optional. The product now measures itself against one North Star: successful meaningful conversation turns completed. The idea has been submitted to MCCY's Singapore Government Partnerships Office and aligns with Age Well SG and SG Cares — a path for HomeTongue to support families, volunteers, and care settings beyond the hackathon.",
  ],
  quote:        "Google Translate helps you understand what was said. HomeTongue helps you keep the conversation going — until you need it a little less each time.",
  quoteAuthor:  "Darren Chua · Team 92 · {build} Hackathon SG",
  quoteInitials:"DC",

};
