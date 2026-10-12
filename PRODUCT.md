# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two readers per demo page. First, the business owner or partner who receives the link from Hemeron by WhatsApp and judges in seconds whether this proposal is better than their current site and worth paying for. Second, that business's own prospective customers, the people the page must persuade once it ships: for law firms, companies and individuals choosing counsel; for Didáctica Viajes (surface `/didactica`), school directors, teachers and parent committees in Mexico choosing an operator for a coordinated school trip, who need to trust the safety and experience first and then want the trip.

## Product Purpose
demos.diabolicalservices.tech hosts 66 redesign proposals built by Hemeron (a software studio in Aguascalientes, hemeron.com) for Mexican businesses, almost all law firms. Each route is one standalone home page for one business, sent to that business as a sales demo. The page must make the business's real offer clear, feel markedly better than what they have today, and lead to contact. A private directory and a contacts board exist for Hemeron only.

## Capabilities and Constraints
- Nothing invented: logo, colors, copy, names, figures, addresses, phones, emails, services and destinations come from the business's own site (per-business notes in `../NN-slug/brand.md`). Light copy-editing is allowed; new claims, figures, testimonials, people or awards are not.
- Imagery: the business's own photos first (Didáctica's photos are their own trips and clients); stock only as atmosphere, never people presented as the team.
- Stack: Next.js 16 App Router, Tailwind 4, Motion (`motion/react`), `next/font/google`, Phosphor icons. Shared motion primitives live in `src/components/motion`; forms use `DemoForm` and send nothing.
- Every demo is independent: no links between proposals, Spanish unless the original site is in English, responsive (1440 desktop, 390 mobile), reduced motion honored, a floating "Sitio demo · Hablemos" badge from Hemeron on every page.
- Demo CTAs point to the business's real channels (WhatsApp, phone, email, maps) or to in-page anchors.

## Brand Commitments
- Standing preference (2026-10-12, user's choice): proposals follow the convention of the best Framer travel sites (Wayfare, Veya Stays, Trova) played straight at their craft level: full-bleed photography, one-line hook, floating pill nav, pill CTAs, generous air, authored entrance motion. No borrowed gimmicks.
Each business keeps its own logo and brand colors. Didáctica Viajes: blue `#2E3091`, red `#DA2746`, yellow `#FFDE01`, logo vectorized from their PNG, original fonts Fredoka One + Roboto; lema «Máxima aventura al viajar»; operating school trips since 1993; counters +27 años, +10K viajes, +25 destinos, +600K alumnos, +600 escuelas.

## Evidence on Hand
`../69-didactica/brand.md` (all verified content and sources), `../69-didactica/assets/` (logo, 12 trip photos, flags, badges A/D/S, London Eye and Trafalgar Square photos, Cruz Roja training photo), `../69-didactica/original-full.jpg` (their current Elementor site), `public/sitios/didactica/` (the assets already in the project).
