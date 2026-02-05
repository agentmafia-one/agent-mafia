# 🎙️ Voice Recorder Agent — MVP Spec

**Added:** 2026-02-05
**Inspiration:** Josh Moore / Wave AI ($7M ARR solo)

---

## Problem

Telegram has file size limits (~50MB for bots). Can't upload long recordings directly.

**Jarod's current workflow:**
- Records audio
- Uploads to put.io manually
- Nova transcribes from put.io

---

## MVP Solution

### Option A: Put.io Integration
1. User sends voice note to bot (short) or link to put.io file (long)
2. Bot downloads from put.io
3. Transcribes with Whisper
4. Summarizes with Claude
5. Returns transcript + summary + action items

### Option B: Chunked Recording
1. User records in chunks (< 50MB each)
2. Bot stitches audio together
3. Transcribes + summarizes

### Option C: External Upload Link
1. User uploads long recording anywhere (Dropbox, Drive, put.io)
2. Sends link to bot
3. Bot downloads, transcribes, summarizes

---

## Features (MVP)

- [ ] Accept voice notes (any length via link)
- [ ] Transcribe with Whisper (local, free)
- [ ] Summarize with Claude
- [ ] Extract action items
- [ ] Return formatted summary to Telegram

---

## Tech Stack

- **Whisper** — Local transcription (already running)
- **Claude** — Summarization
- **Telegram Bot** — Interface
- **Put.io API** — Large file handling

---

## Revenue Model

- Free: 30 min/month transcription
- Pro: Unlimited — $9.99/month

---

## Competition

- Wave AI ($7M ARR) — App-based
- Otter.ai — Enterprise focus
- Fireflies — Meeting bots

**Our angle:** Telegram-native, no app needed, multi-language

---

## Next Steps

1. [ ] Create basic Telegram bot
2. [ ] Integrate Whisper transcription
3. [ ] Add put.io download support
4. [ ] Add Claude summarization
5. [ ] Test with Jarod's recordings
