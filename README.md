# BlinkChat — MVP (Instant Expert Chat)

A minimal full‑stack prototype with:
- **Node + Express + Socket.IO + SQLite** backend
- **Simple web client** (vanilla HTML/JS) for login, listing experts, and real‑time chat
- **JWT auth** (demo password: `password`), **expert profiles**, **start chat**, **send/receive messages**
- Stripe Checkout endpoint placeholder for credits (optional)

## Quick Start (Local)
1) Install Node LTS (>=18)
2) In the project root:
   ```bash
   npm install
   npm run seed -w server   # creates demo users + one expert
   npm run dev              # runs API at http://localhost:4000
   ```
3) Open `web/index.html` in your browser.
   - Login with `user@example.com` or `expert@example.com` (password `password`).
   - Pick an expert, click to start a chat, and message in real‑time.

## Environment
- Copy `server/.env.example` to `server/.env` and set values.
- Stripe is optional; if omitted, payments endpoint returns a mock response.

## Deploy Notes
- **Server**: Deploy to Render/Railway/Fly. Persist the `blinkchat.db` or use a managed Postgres later.
- **Web**: Serve `web/` as static hosting on Netlify/Vercel or behind the server.
- Add a domain: `blinkchat.app` (if available) or similar.

## Next Steps
- Add **per‑minute billing**: tally chat duration; charge from stored credits.
- Add **expert availability** & notifications.
- Add **image/file uploads** in chat.
- Add **AI copilots** to greet, summarize, and suggest follow‑ups.
- Build **waitlist + onboarding flow** and start pre‑sales.

## Security & Legal
- This MVP is for prototyping only. Before real users, add rate limits, TLS, PII/data retention policies, ToS/Privacy, and moderation.

— Built for Kaidey, Aug 2025


## v2 Updates (Per-minute Billing + Branding + Deploy Helpers)
- Credits wallet with 30s billing ticks server-side
- Header balance + Add $10 test top-up
- Render/Netlify configs included
