---
name: Didáctica Viajes
description: Premium travel-site craft for a school-trip operator; photography is the ground, one yellow accent, pill controls on cool off-white.
colors:
  didactica-yellow: "#FFDE01"
  yellow-lift: "#FFE94D"
  didactica-blue: "#2E3091"
  ink: "#1B252F"
  scrim-navy: "#0E1250"
  cool-paper: "#F4F5FA"
  white: "#FFFFFF"
  slate-text: "#5B5F73"
typography:
  display:
    fontFamily: "Fredoka, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5.6vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fredoka, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.02
  statement:
    fontFamily: "Fredoka, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.18
  counter:
    fontFamily: "Fredoka, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tabular-nums"
  title:
    fontFamily: "Fredoka, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.25
  body-lg:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.25
  control:
    fontFamily: "Fredoka, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
rounded:
  pill: "9999px"
  surface: "24px"
spacing:
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "96px"
  section-md: "128px"
components:
  button-primary:
    backgroundColor: "{colors.didactica-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 6px 0 24px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-lift}"
  button-nav:
    backgroundColor: "{colors.didactica-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-nav-hover:
    backgroundColor: "{colors.yellow-lift}"
  chip-destino:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  chip-destino-hover:
    backgroundColor: "{colors.didactica-yellow}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 40px 0 16px"
    height: "48px"
  card-quote:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "24px"
  card-blue:
    backgroundColor: "{colors.didactica-blue}"
    textColor: "{colors.white}"
    typography: "{typography.statement}"
    rounded: "{rounded.surface}"
    padding: "40px"
  badge-objetivo:
    backgroundColor: "{colors.didactica-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    size: "56px"
---

# Design System: Didáctica Viajes

> Scope: this world belongs only to the `/didactica` surface (`src/app/(sitios)/didactica/`). The portfolio hosts 66 independent demos; nothing here applies to any other route or to the shared shell.

## Overview

**Creative North Star: "The Trip Already Taken"**

The page is built from Didáctica's own group photographs and treats them as the ground everything else sits on. Type, surfaces and controls are kept quiet and round so the London Eye, the Mexican flag and the neon-scarf groups carry the emotion; the copy and the quote composer state the offer in one beat and get out of the way. Density is low and the rhythm is long: 96 to 128px between sections, one idea per band, generous white and cool-paper gaps.

The palette is a strict two-tone of blue-tinted ink and Didáctica blue with a single yellow accent reserved for the ask. Fredoka's rounded forms set every headline, counter and control; Nunito Sans carries reading text. Everything that can be pressed is a pill; everything that holds content is a 24px surface. Shadows exist but are tinted with the brand's deep navy and pushed far below the element, so lifted elements read as floating over the photo rather than casting a grey drop.

The build rejects the polaroid-collage brochure of the current Didáctica site and the generic headline-plus-three-cards landing page. There are no eyebrows, no kickers, no decorative icon grids and no invented photo captions.

**Key Characteristics:**
- Photography as ground: full-bleed hero and work band, unequal 12-column gallery, circular photo strip.
- One accent (yellow) used only on calls to action, the objective badges and hover states.
- Fredoka 500/600 for everything that is not body copy; Nunito Sans 400/700 for body and labels.
- Pill controls, 24px surfaces, 1px alpha hairlines; no bordered cards.
- Navy-tinted, long-throw shadows on floating elements only (nav, quote card, photo circles).
- Scroll-linked and entrance motion on one shared ease-out curve; every effect has a reduced-motion fallback.

## Colors

A two-blue, one-yellow palette on cool off-white and white, with deep navy reserved for scrims and shadow tint.

### Primary
- **Didáctica Yellow** (`{colors.didactica-yellow}`): the only accent. Primary pills, nav CTA, hover fill of destination chips and social circles, the A/D/S objective badges, contact icons on the blue band, text selection background.
- **Yellow Lift** (`{colors.yellow-lift}`): hover fill of every yellow pill.

### Secondary
- **Didáctica Blue** (`{colors.didactica-blue}`): the brand blue. Counter numerals, type-of-trip labels in the destination list, the coordinator pull-quote card, the closing contact band, and the field focus ring tint.

### Neutral
- **Ink** (`{colors.ink}`): blue-tinted near-black. Body text color of the page, footer and work-band backgrounds, the arrow disc inside yellow pills, nav burger lines. Alpha tints of Ink are the hairline vocabulary: 12% field border, 10% section rules, 8% rings and list dividers; 80% nav links, 60% helper text, 55% select caret, 45% placeholder and muted "Cotizar" affordance.
- **Scrim Navy** (`{colors.scrim-navy}`): hero background and the color behind every gradient scrim and shadow (`rgba(14,18,80,…)`). Never used as a flat surface.
- **Cool Paper** (`{colors.cool-paper}`): the alternating section surface (trayectoria, gallery) and the resting fill of destination chips and hovered list rows.
- **White** (`{colors.white}`): page background, destinations and work sections, field backgrounds, and at 92% with blur the quote card; at 88% with blur the floating nav.
- **Slate Text** (`{colors.slate-text}`): secondary reading text (counter labels, section intros, list descriptions, work-band definitions). On blue and ink surfaces secondary text is white at 70 to 88%.

### Named Rules
**The One Yellow Rule.** Yellow appears only where the visitor can act or where the brand marks its three objectives. It never fills a surface, a heading or a decorative shape.
**The Navy Shadow Rule.** Every shadow and scrim derives from Scrim Navy, never from black or grey.

## Typography

**Display Font:** Fredoka (500, 600), loaded via `next/font` as `--s69-display`
**Body Font:** Nunito Sans (400, 600, 700), loaded via `next/font` as `--s69-body`

**Character:** Fredoka's soft geometric rounds match the pill-and-circle form language and the brand's original Fredoka One lockup; Nunito Sans keeps the same friendliness at reading sizes without competing.

### Hierarchy
- **Display** (Fredoka 600, `clamp(2.75rem, 5.6vw, 4.75rem)`, 0.98, -0.01em): the hero lema only, white on the photo, max two lines (max-width 600px).
- **Headline** (Fredoka 600, `clamp(2.5rem, 4.4vw, 4rem)`, 1.02): every section h2.
- **Statement** (Fredoka 500, `clamp(1.75rem, 3.6vw, 3.25rem)`, 1.18): the scroll-filled trajectory sentence; the same weight and leading family sizes down to `clamp(1.5rem, 2.6vw, 2.25rem)` / 1.2 for the blue pull-quote card and `clamp(1.875rem, 3.2vw, 2.75rem)` / 1.08 for the work-band h3.
- **Counter** (Fredoka 600, `clamp(2.5rem, 4vw, 3.5rem)`, 1, tabular-nums): the five proof figures in Didáctica Blue.
- **Title** (Fredoka 500, 24px, 1.25): list and definition titles (work resources, objectives); international destination names sit at 22px / 26px md, subsection h3 ("Nacionales", "Internacionales") at 20px, quote card heading at 22px.
- **Body Large** (Nunito Sans 400, 18px, 20px md in hero, 1.625): section intros and hero subtext, max 46 to 52ch.
- **Body** (Nunito Sans 400, 15 to 17px, 1.625): descriptions, definitions, address lines (17px semibold on blue), max 60ch.
- **Label** (Nunito Sans 700, 14px): form field labels and the type-of-trip line under each destination (in Didáctica Blue). Sentence case, never uppercase, never letter-spaced.
- **Control** (Fredoka 600, 16px; nav and chips 15px semibold): text inside every pill and nav link.
- **Caption** (Nunito Sans 400, 12px, 1.375, Ink 60%): the helper line under the quote button.

### Named Rules
**The Fredoka Everywhere Above Body Rule.** Any text larger than body copy, and any text inside a control, is Fredoka. Nunito Sans never sets a heading.
**The No Kicker Rule.** Sections open with the headline itself; there are no eyebrows, overlines or uppercase tracking anywhere on the surface.

## Layout

Content sits in a 1200px container with 20px gutters (32px from md). The floating nav uses a narrower 1120px inner width, 64px tall, inset 16px/20px from the viewport top. Section rhythm is 96px vertical padding, 128px from md; the trajectory section opens at 80px (112 md, 128 lg) because it follows the hero's negative-margin quote card.

The hero is a full-bleed photo at min 78svh (100svh capped at 1000px on lg) with a top-heavy navy scrim (80% at top fading to 0% at 60%, back to 28% at the bottom); copy sits top-left over the sky so the group, the flag and the banner stay visible below. On lg the quote card is absolutely positioned top-right at 400px wide, aligned to the container's right gutter; below lg it drops under the photo with a -48px overlap, centered at max 440px.

Destinations is a 5/7 column split on lg with the left column sticky at 112px. The gallery is a 12-column grid (7/5, then 5/7) with 16px gaps (12px on mobile) and a 440px minimum row; the circular strip is a horizontally scrolling row of 132px (160px md) discs with hidden scrollbars. "¿Cómo trabajamos?" is a full-bleed photo band followed by a two-column definition list (220px term column from md) that bleeds to the viewport edge beside a photo (46% on lg). Contact is a two-column grid on lg. Breakpoints are Tailwind defaults: 640, 768, 1024.

Inner spacing steps actually reused: 12, 16, 20, 24, 40, 48, 56, 64, 80px. Lists use 1px Ink 8 to 10% hairlines between rows, with 24 to 36px row padding, instead of cards.

## Elevation & Depth

Depth comes first from tonal layering (white, cool paper, blue, ink bands in sequence) and from photographs with gradient scrims. Shadows are reserved for the three elements that float over photography or scroll: the nav pill, the quote card and the circular photo strip. All are navy-tinted, large-blur, strongly negative-spread so they read as a soft halo under the element. Glass is used twice: the nav (white 88% + backdrop blur 24px) and the quote card (white 92% + backdrop blur 12px), each finished with a 1px ring (Ink 8%, White 60%).

### Shadow Vocabulary
- **Nav float** (`box-shadow: 0 18px 50px -22px rgba(14,18,80,0.45)`): the floating pill nav.
- **Card float** (`box-shadow: 0 24px 60px -24px rgba(14,18,80,0.45)`): the quote composer card.
- **Disc float** (`box-shadow: 0 14px 30px -16px rgba(14,18,80,0.4)`): circular photos in the strip.
- **Focus ring** (`box-shadow: 0 0 0 3px rgba(46,48,145,0.14)`): form fields on focus, paired with a blue border.

### Named Rules
**The Float-Only Rule.** Shadows belong to elements that sit over a photo or over the page; content in flow (lists, chips, image tiles, blue card) is flat.

## Shapes

Two radii only. Everything pressable is a full pill: buttons, nav bar, chips, fields, social circles, objective badges, flag discs and the photo strip. Everything that frames content is 24px: the quote card, gallery tiles, the blue pull-quote card and the hover fill of a destination row. No square corners appear except on full-bleed photo bands. Borders are 1px hairlines of Ink at 8 to 12% (or White at 10 to 15% on dark bands); there are no 2px strokes and no bordered cards. The yellow primary pill always carries a dark circular arrow disc flush to its right edge (44px in the 56px pill, 40px in the quote card's button).

## Components

### Buttons
- **Shape:** full pill (`{rounded.pill}`).
- **Primary (`button-primary`):** Didáctica Yellow on Ink, Fredoka 600 16px, 56px tall, 24px left padding and 6px right padding so the 44px Ink arrow disc (yellow arrow, Phosphor bold 18px) sits inside the edge. Used for "Cotiza tu viaje" in the hero and the contact band (the latter opens WhatsApp).
- **Nav (`button-nav`):** same colors, 48px tall, 24px horizontal padding, 15px, no disc.
- **Hover / Active:** fill moves to Yellow Lift; arrow disc nudges 2px right over 200ms; `.press` scales to 0.97 on active.
- **Text link:** Fredoka 500 16px with a trailing bold arrow that nudges 3px on hover (`.nudge`), white on the hero ("Ver destinos") or Ink 45% rising to Ink on row hover ("Cotizar").
- **Icon circle:** 48px pill, White 10% fill with White 15% ring, hover Yellow fill with Ink glyph (social links on the blue band).

### Chips
- **Style (`chip-destino`):** Cool Paper fill, Ink text, Nunito Sans 600 15px, 8px x 16px padding, pill.
- **State:** hover fills Didáctica Yellow; chips are links that preselect the destination in the quote composer.

### Cards / Containers
- **Quote card (`card-quote`):** 24px radius, White 92% with 12px backdrop blur, 20px padding (24px from sm), card-float shadow, White 60% ring. Holds a Fredoka 500 22px title, three fields and the primary button.
- **Blue card (`card-blue`):** 24px radius, Didáctica Blue, white Fredoka 500 pull-quote, 32px padding (40px md). Sits in the photo grid as the one non-photo tile.
- **Photo tiles:** 24px radius, `object-cover`, 1.04 zoom on hover over 700ms.
- No bordered or shadowed content cards anywhere else; lists use hairlines.

### Inputs / Fields
- **Style (`input-field`):** 48px pill, White fill, 1px Ink 12% border, Nunito Sans 15px Ink, 16px left padding and 40px right padding for the Ink 55% caret (selects) or 16px (number input). Labels are Nunito Sans 700 14px above the field with 6px gap.
- **Focus:** border becomes Didáctica Blue and the 3px blue focus ring appears, 200ms.
- **Placeholder:** Ink 45%. No error or disabled state exists on the surface.

### Navigation
- **Style:** fixed floating pill, 64px tall, White 88% + blur, Ink 8% ring, nav-float shadow, logo at 124px (150px md) left, links Nunito Sans 600 15px Ink 80% with the `.link-u` draw-in underline and Ink on hover, yellow nav button right.
- **Mobile (below lg):** burger with two 1.5px Ink lines; full-screen white panel, Fredoka 500 30px links separated by hairlines, the yellow button at the end, 260ms drop-in with 40ms link stagger.

### Counters
Five figures in a `dl`: Fredoka 600 counter numerals in Didáctica Blue with tabular digits, counting up over 1.4s on view; 15px Slate Text labels (max 180px). Two columns on mobile, three on md, five on lg, separated from the statement above by an Ink 10% rule.

### Scroll Statement (signature)
A single Fredoka 500 paragraph whose words rise from 55% to 100% opacity in sequence as the paragraph scrolls from 85% to 45% of the viewport. Reduced motion renders it fully opaque.

### Objective Badges
56px yellow discs carrying one Fredoka 600 24px letter (A, D, S) beside a Fredoka 500 24px title and 15px White 78% text.

### Motion grammar
One curve for everything: `cubic-bezier(0.23, 1, 0.32, 1)` (`--ease-out`), with `cubic-bezier(0.77, 0, 0.175, 1)` only for the clip-path wipe. Hero entrance: items stagger 90ms after a 150ms delay (quote card after 450ms), each rising 24px over 0.9s, the h1 additionally landing from a 6px blur. Scroll reveals: 18px rise over 0.7s; staggered lists 16px rise over 0.6s with 40 to 80ms gaps. Media reveals: bottom-to-top clip wipe 1.1s while the image settles from 1.08 to 1 over 1.6s. Hero photo parallax drifts ±50px. Micro: press 0.97 scale 160ms, image zoom 1.04 700ms, arrow nudge 220ms, underline draw 250ms. Every effect collapses to opacity-only or static under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** put yellow only on actions, hover fills and the A/D/S badges; keep its share of any screen small.
- **Do** set every heading, counter and control label in Fredoka (600 for h1/h2/counters/buttons, 500 for statements and titles).
- **Do** use pills for anything pressable and 24px for anything that frames content.
- **Do** tint every shadow and scrim with Scrim Navy (`rgba(14,18,80,…)`) and keep shadows on floating elements only.
- **Do** separate list rows with 1px Ink 8 to 10% hairlines and generous row padding instead of cards.
- **Do** keep reading text in Slate Text on light surfaces and White 70 to 88% on blue or ink bands, 46 to 60ch wide.
- **Do** keep the hero copy top-left over the sky so the group photo stays unobstructed.

### Don't:
- **Don't** add eyebrows, kickers, overlines or uppercase letter-spaced labels.
- **Don't** fill a surface, heading or decorative shape with yellow, and don't introduce a second accent (red is not used on this surface).
- **Don't** use grey or black shadows, 2px borders or bordered cards.
- **Don't** caption the circular photo strip or the gallery with destination names; the photos are not matched to places.
- **Don't** set headings in Nunito Sans or body copy in Fredoka.
- **Don't** use square corners on any control or content frame.
