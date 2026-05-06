// ╔══════════════════════════════════════════════════════════════╗
// ║  CASE STUDY CONTENT — edit this file to update the page.    ║
// ║  No HTML knowledge needed. Save and refresh to see changes. ║
// ╚══════════════════════════════════════════════════════════════╝

window.CASE_STUDY = {

  // ── Header & Nav ─────────────────────────────────────────────
  title:     "HomeTongue",
  category:  "Project Case Study // Speech & Language AI",
  subtitle:  "AI-powered mother tongue practice — leveraging STT, LLM translation, and TTS to help Singaporeans speak the language of their heritage, not just understand it.",
  githubUrl: "https://github.com/darrenCWJ/HomeTongue",

  // ── Hero Image ────────────────────────────────────────────────
  // Set to your image filename (must be in the project root or images/ folder).
  // Set to null to use the CSS pattern background instead.
  heroImage: null,               // e.g. "images/hometongue-hero.jpg"

  // Chips shown in the hero section.
  heroTags: ["TypeScript", "Speech AI", "ElevenLabs", "Vercel", "Hackathon"],

  // ── The Problem ───────────────────────────────────────────────
  problemQuote: "My grandparents speak Cantonese, my parents speak Mandarin, and I respond in English. I understand everything but can't form a sentence — and I don't know where to start.",

  problemDescription: "In Singapore, generations of language shift have left many caught between heritage and English. Apps like Duolingo treat mother tongue as a foreign language — ignoring cultural context, pronunciation nuance, and the emotional weight of reconnecting with a language tied to family identity. HomeTongue was built at a hackathon to explore a different model: AI-powered speech interaction that feels like practicing with a patient, bilingual relative.",

  // Four problem cards. icon = any Material Symbols name.
  problemCards: [
    {
      icon:        "language",
      title:       "Language Drift",
      description: "Singapore's shift to English as the dominant home language has created a generation with passive fluency — they understand their mother tongue but struggle to produce it. Apps rarely address this asymmetry.",
    },
    {
      icon:        "mic_off",
      title:       "No Pronunciation Feedback",
      description: "Text-based learning can't teach tone and rhythm. Learners need real-time audio feedback — the exact strength that modern STT and TTS pipelines can provide at consumer cost.",
    },
    {
      icon:        "sentiment_dissatisfied",
      title:       "Generic Learning Loops",
      description: "Off-the-shelf language apps aren't built for Singapore's multilingual context. They miss code-switching, dialect variation, and the cultural anchoring that makes vocabulary actually stick.",
    },
    {
      icon:        "timer",
      title:       "48-Hour Constraint",
      description: "The app had to go from zero to deployed demo in under 48 hours — meaning every architectural choice had to be fast, cloud-native, and composable from proven APIs.",
    },
  ],

  // ── Architecture Pipeline ─────────────────────────────────────
  // Two rows of nodes. Each node: icon (Material Symbols), label, sublabel.
  // Row 1 uses amber styling, row 2 uses tertiary (blue-white) styling.
  archPipelineRow1: [
    { icon: "mic",            label: "VOICE_INPUT",  sublabel: "Browser speech capture" },
    { icon: "hearing",        label: "STT_ENGINE",   sublabel: "Whisper / ElevenLabs" },
    { icon: "translate",      label: "AI_TRANSLATE", sublabel: "LLM translation layer" },
  ],
  archPipelineRow2: [
    { icon: "record_voice_over", label: "TTS_OUTPUT",    sublabel: "Natural voice synthesis" },
    { icon: "feedback",          label: "COACH_CARD",    sublabel: "Pronunciation hints" },
    { icon: "loop",              label: "PRACTICE_LOOP", sublabel: "Iterative reps" },
  ],

  archDescription: "HomeTongue's speech pipeline stitches three cloud services into a continuous practice loop. The browser's MediaRecorder API captures user speech and sends it to a Whisper-based STT endpoint for transcription. The text then passes through an LLM layer that translates, contextualises, and generates pronunciation hints. Finally, the response is synthesised to natural audio via ElevenLabs TTS. Each round-trip is one practice rep — the user speaks, the AI reflects, corrects, and speaks back in the target language.",

  // ── Implementation ────────────────────────────────────────────
  // Plain text paragraphs — no HTML needed.
  implParagraphs: [
    "The frontend is built in TypeScript with a React + Next.js stack, deployed to Vercel for immediate global availability. Audio capture uses the browser's MediaRecorder API with a Web Speech API fallback — ensuring broad compatibility without requiring a native app. The UI surfaces a live waveform, transcription display, and pronunciation hint card on each practice turn.",
    "The AI translation layer is provider-agnostic: a prompt chain handles language detection, translation, cultural context annotation, and follow-up question generation to keep the learner engaged. The system code-switches gracefully — responding in the target language while explaining corrections in English when the learner needs a bridge.",
    "TTS synthesis generates natural-sounding audio in the target language, giving learners an audio model to mimic. Pronunciation accuracy is scored heuristically by comparing the user's STT transcript against the expected phoneme sequence, surfacing mismatches as highlighted coaching cards beneath the response.",
  ],

  // The code block. Use plain text — indent with spaces, not tabs.
  implCodeFilename: "app/api/translate/route.ts",
  implCode:
`// Translate + contextualise speech input, return synthesised audio
export async function POST(req: Request) {
  const { transcript, targetLanguage } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: MOTHER_TONGUE_SYSTEM_PROMPT },
      {
        role: "user",
        content: \`Transcript: "\${transcript}"\\nTarget: \${targetLanguage}\`,
      },
    ],
  });

  const translation = completion.choices[0].message.content;

  // Synthesise response via ElevenLabs TTS
  const audio = await elevenlabs.generate({
    voice: VOICE_MAP[targetLanguage],
    text: translation,
  });

  return new Response(audio, {
    headers: { "Content-Type": "audio/mpeg" },
  });
}`,

  // ── Aside — System Specifications ────────────────────────────
  specs: [
    { key: "Frontend",     value: "TypeScript + React" },
    { key: "Framework",    value: "Next.js (App Router)" },
    { key: "Deployment",   value: "Vercel" },
    { key: "STT",          value: "Whisper + ElevenLabs" },
    { key: "TTS",          value: "ElevenLabs" },
    { key: "Languages",    value: "Mandarin, Cantonese, Malay" },
    { key: "Context",      value: "Hackathon 2026" },
  ],

  // ── Aside — Key Technologies ──────────────────────────────────
  technologies: [
    "TypeScript", "Next.js", "React", "OpenAI API",
    "ElevenLabs", "Vercel", "Whisper", "Web Speech API",
  ],

  // ── Aside — Metrics Bars (label for the sidebar section) ─────
  // type: "core" (amber) or "extended" (blue-white).
  metricsBars: [
    { label: "STT ACCURACY",          type: "core" },
    { label: "TRANSLATION QUALITY",   type: "core" },
    { label: "TTS NATURALNESS",       type: "core" },
    { label: "E2E LATENCY",           type: "extended" },
    { label: "LANGUAGE COVERAGE",     type: "extended" },
    { label: "CODE-SWITCH HANDLING",  type: "extended" },
  ],

  // ── Results ───────────────────────────────────────────────────
  results: [
    {
      number:      "48h",
      label:       "Zero to Demo",
      description: "Designed, built, and cloud-deployed within the hackathon window — a fully functional web app with live voice capture, AI translation, and TTS playback.",
    },
    {
      number:      "3",
      label:       "Languages Supported",
      description: "Mandarin, Cantonese, and Malay — the three mother tongue languages for Singapore's major communities, each with a dedicated voice model.",
    },
    {
      number:      "< 3s",
      label:       "End-to-End Latency",
      description: "Speech capture to synthesised audio response in under three seconds — fast enough to sustain a natural conversational practice loop.",
    },
  ],

  // ── Reflections ───────────────────────────────────────────────
  // Two paragraphs — one before the quote, one after.
  reflectionParagraphs: [
    "HomeTongue started as a hackathon project but landed on a real problem. Language loss isn't abstract — it's a dinner table conversation that slowly grows quieter over a generation. AI gives us a genuine chance to build a bridge back: not as a replacement for immersion, but as a patient, always-available practice partner that never makes you feel embarrassed for getting the tones wrong.",
    "The biggest technical challenge was latency: stitching STT, LLM inference, and TTS into a sub-3-second loop required careful async orchestration and provider benchmarking. The biggest product insight was simpler — people don't want to learn a language in the abstract. They want to call their grandmother and actually have something to say.",
  ],
  quote:        "The best language teacher isn't correcting your grammar. It's creating enough safe repetition that the words start to feel like yours.",
  quoteAuthor:  "Darren Chua · HomeTongue Hackathon",
  quoteInitials:"DC",

};
