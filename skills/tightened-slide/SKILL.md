---
name: tightened-slide
description: Build single-file HTML horizontal-swipe presentation decks using the Tightened Slide process with locked layouts, strict grid rules, theme presets, image slot discipline, and validation.
---

# Tightened Slide

Use this workflow when a user asks for a Tightened Slide deck, horizontal swipe presentation, HTML slide deck, launch deck, analysis deck, framework deck, product deck, or data-driven talk.

## Operating Assumptions

- This is a Tightened Slide only system.
- The output is a static HTML deck, normally `index.html`, with an adjacent `images/` folder.
- The template is `assets/template.html`.
- Body slides must use registered `S01` to `S22` layouts.
- The validator is required before delivery.
- Supported language modes are English and Korean.

## Step 1: Clarify Only What Matters

If the user provides a complete outline and assets, proceed. If key inputs are missing, ask at most three questions:

1. Audience and presentation setting.
2. Target duration or page count.
3. Source material, language mode, required images/data, and hard constraints.

If the theme is unspecified, default to International Klein Blue from `references/themes.md`.
If the language mode is unspecified, default to English.

## Step 2: Prepare The Deck

Create the target folder and image folder:

```bash
mkdir -p path/to/deck/images
cp assets/template.html path/to/deck/index.html
```

Immediately replace the `<title>` placeholder in `index.html`.

Set the language mode on the root element:

```html
<html lang="en" data-language="en">
```

or:

```html
<html lang="ko" data-language="ko">
```

Korean mode uses the template font stack `SUIT`, `Pretendard`, `Noto Sans KR`, and `Noto Sans` before falling back to Inter and system sans fonts.

If the deck must work offline with local animation fallback, keep `assets/motion.min.js` reachable from the copied HTML path or accept the CDN fallback built into the template.

## Step 3: Preflight

Before writing slide markup:

- Read the template `<style>` block.
- Read `references/layout-lock.md`.
- Read the relevant skeletons in `references/layouts.md`.
- Confirm every class you plan to use exists in the template.
- Do not invent global classes. Use inline styles only for page-specific tuning.

Create a planning table before coding:

```text
page -> data-layout -> reason -> image slot
```

For 7-8 page decks, use at least six different `Sxx` layouts. For 10+ page decks, use at least eight.

## Step 4: Pick Layouts

Use the registered layout set:

- `S01` Index Cover
- `S02` Vertical Timeline + KPI
- `S03` Split Statement
- `S04` Six Cells
- `S05` Three Layers
- `S06` KPI Tower
- `S07` Horizontal Bar
- `S08` Duo Compare
- `S09` Dot Matrix Statement
- `S10` Split Closing
- `S11` Horizontal Timeline
- `S12` Manifesto + Ink Banner
- `S13` Three Forces
- `S14` Loop Form
- `S15` Matrix + Hero Stat
- `S16` Multi-card Brief
- `S17` System Diagram
- `S18` Why Now
- `S19` Four Cards
- `S20` Stacked KPI Ledger
- `S21` Tech Spec Sheet
- `S22` Image Hero

Use `S08 + Tightened Map Component` for maps, routes, city relationships, location networks, or historical movement pages.

Use `S22` for one large image. Use `S15` or `S16` adaptations for multiple images. Do not create unregistered image split or evidence wall layouts.

## Step 5: Apply The Visual System

Hard rules:

- One accent color per deck.
- No gradients, shadows, rounded cards, glass, neon, 3D, or decorative borders.
- Large type uses light weights: `200` or `300`.
- Body text uses restrained weights and clear hierarchy.
- Large sizes use `font-size:min(Xvw,Yvh)` with `Y >= X * 1.6`.
- Headings sit on the left/top content axis unless using registered statement/split layouts.
- Kicker text sits above the title, not beside it.
- `.canvas-card` already has horizontal padding; do not add another `5vw` padding layer inside it.
- Keep all captions, labels, and footnotes above the bottom navigation safe area.
- SVG may draw geometry only; visible labels must be HTML.

Language rules:

- English mode uses concise sentence case titles and direct body copy.
- Korean mode uses short Korean titles, compact body lines, and consistent product terms.
- Diagram labels and generated-image text must match the chosen language mode.

## Step 6: Image Flow

If images are needed:

- Ask before generating new images.
- Choose the layout slot before writing the prompt.
- Use `references/image-prompts.md`.
- Save generated or provided images in `images/`.
- Name images `{page}-{semantic-name}.{ext}`.
- Add `data-image-slot` to every local image.

Slot defaults:

- `S22`: `s22-hero-21x9`
- `S15`: `s15-grid-21x9` or `s15-grid-16x10`
- `S16`: `s16-brief-21x9` or `s16-brief-16x10`

## Step 7: Validate

Run:

```bash
node scripts/validate-deck.mjs path/to/index.html
```

Fix every error. Warnings require visual review.

Then open the deck in a browser and inspect:

- title alignment
- type weight
- spacing between title and body
- image crop and image slot fit
- captions and footnotes above navigation
- ESC index visibility
- `B` static mode

Use `references/checklist.md` as the delivery checklist.
