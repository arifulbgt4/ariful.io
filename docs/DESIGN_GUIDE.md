# Design Guide

## Design objective

The interface should feel like an experienced end-to-end product engineer's
working portfolio: precise, calm, technically literate, and easy for an
international client to evaluate. It should not resemble a generic neon
developer template, lead with a technology inventory, or hide weak evidence
behind animation.

## Principles

1. **Evidence before decoration.** Status, source links, live links, and clear
   outcomes matter more than visual effects.
2. **One decision per section.** Every section should answer a specific prospect
   question and offer a logical next action.
3. **High signal density.** Use concise copy, visible hierarchy, and progressive
   disclosure instead of walls of badges.
4. **Calm motion.** Hover and navigation transitions can provide feedback, but
   content must remain visible without JavaScript or animation.
5. **Accessible by default.** Keyboard, contrast, reduced motion, labels, and
   semantic structure are release requirements.
6. **Products before stacks.** Buyer outcomes, lifecycle ownership, maturity,
   and evidence lead; frameworks and tools appear only where they explain a
   delivery decision.
7. **Equal core evidence.** The five core products use the same card scale,
   hierarchy, status prominence, and call to action. No flagship treatment or
   oversized promotional card is allowed.

## Visual tokens

### Color

| Role | Value | Use |
| --- | --- | --- |
| Canvas | `#070A0F` | Page background |
| Raised canvas | `#0B1018` | Cards and content surfaces |
| Section tint | `#090D14` | Alternating section background |
| Primary text | Tailwind `white` | Headlines and high-emphasis labels |
| Body text | `slate-400` | Paragraphs |
| Muted text | `slate-500/600` | Metadata and secondary labels |
| Primary accent | `cyan-200/300` | CTAs, focus, links, and proof cues |
| Secondary accents | `blue-400`, `emerald-300` | Controlled gradients and status |

Accent colors must not carry meaning alone. Add a text label for every status.
Keep the dark canvas and cyan accent, but limit glow, gradients, repeated pills,
and ornamental borders so evidence remains the strongest visual signal.

### Typography

- UI/body: system sans stack in `app/globals.css`
- Technical labels and sequence numbers: system monospace
- Display headings: 900 weight, tight tracking, balanced wrapping
- Body: 16–20px depending on context, 1.6–1.75 line height
- Article measure: approximately 48rem (`max-w-3xl`)

Do not load a third-party web font unless the performance and privacy cost is
explicitly justified.

### Spacing and shape

- Main content width: `max-w-7xl`
- Page padding: 20px mobile, 28px small screens, 40px large screens
- Section rhythm: 80px mobile, 112–128px desktop
- Card radius: 16px
- Feature-shell radius: 32px
- Main controls: 12px radius and at least 48px height
- Borders: low-contrast white at 7–10% opacity

## Core components

Shared CSS classes live in `app/globals.css`:

- `.site-container`
- `.section-shell`
- `.section-kicker`
- `.eyebrow`
- `.button-primary`
- `.button-secondary`
- `.surface-card`
- `.skill-pill`
- `.form-control`
- `.timeline-list`
- `.timeline-list-amber`
- `.sequence-grid`
- `.prose-portfolio`

Reuse these before introducing a one-off variant. If a pattern appears three
times, consider a typed React component.

`.skill-pill` is for compact supporting context on service and case-study detail
pages. Do not use a large technology-pill wall on the homepage or service index.

Do not use dot, dash, or checkmark bullets in the public interface. Preserve
semantic `ul` and `ol` markup, then use `.timeline-list` for single-column
capability, evidence, decision, or risk sequences. Use
`.timeline-list-amber` when the same pattern communicates constraints or
cautions, and `.sequence-grid` for compact multi-column sequences. Article
lists inherit the numbered timeline treatment from `.prose-portfolio`.

`components/InterfaceIcon.tsx` is the shared code-native icon set for compact
interface cues. Footer utility links keep both icon and visible label; homepage
proof items pair one meaningful icon with their existing value and label. Treat
these icons as decorative when adjacent text already names the destination or
fact, and preserve the 44px interactive target for linked controls.

## Page composition

### Homepage

Positioning hero → delivery ownership → five equal core products → highlighted
EEE Simulator Lab foundation → lifecycle and services → evidence and working
style → compact profile summary/FAQ → Hire CTA.

This order moves from relevance to evidence, then reduces engagement risk before
asking the prospect to use the appropriate `/hire` starting path. A prospect
who needs to confirm fit may use `/hire#consultation`; a prospect with enough
context may use `/hire#project-brief`. The homepage does not embed the full
scheduler or form, a resume CTA, a flagship project, or a full technology grid.
The highlighted Lab block may be wider than a normal Lab card because it is a
separate research-discovery surface after the equal core grid. Its label and
maturity copy must keep EEE Simulator in the Lab tier and state that the current
evidence is documentation, not a working or validated simulator.

### Service page

Buyer problem and specific outcome → ideal fit → lifecycle coverage →
deliverables → evidence and related work/content → FAQ → project-brief CTA.

### Case study

Buyer problem and target users → role and owned scope → maturity matrix →
architecture/system map → decisions and constraints → public evidence → client
relevance → related service/content → project-brief CTA.

Use architecture maps, lifecycle tables, and evidence blocks when verified
screenshots do not exist. Never fabricate product UI to make an unfinished
project look complete.

### Hire page

Offer → fit criteria → five-product proof → engagement options → free
`#consultation` option → inline `#project-brief` form → direct-email fallback.
Keep this route focused and shorter than a general profile page; it is the
site's sole conversion surface.

The consultation section must explain that the free 30-minute call covers fit,
goals, current constraints, and a useful next step rather than complete solution
design. Show the Calendly scheduler only after an explicit load action, retain
the provider cookie banner, and keep a normal external Calendly link visible if
the inline frame fails or is difficult to use.

### Article

Category and title → summary and reading metadata → readable body → relevant
service CTA.

## Responsive behavior

- Design from 320px upward; primary QA begins at 390px.
- Convert two-column hero and contact layouts to one column below large screens.
- Keep the project-brief form single-column where two-column controls would
  reduce label clarity or touch accuracy.
- Keep the consultation frame at least 320px wide within its container, avoid
  page-level horizontal overflow, and allow the provider surface enough height
  to remain usable at mobile and desktop widths.
- Never require horizontal scrolling for tabs, code, or navigation. Code blocks
  may scroll internally.
- Use text wrapping instead of reducing type below legible sizes.
- Mobile navigation locks body scroll and closes on selection or Escape.

## Accessibility checklist

- One `h1` per route and no skipped structural heading levels.
- A skip link targets `#main-content`.
- Visible `:focus-visible` treatment uses cyan with offset.
- Inputs have persistent labels, useful autocomplete, and server validation.
- The consultation iframe has a descriptive title, follows its visible heading
  in keyboard order, and has an equivalent external-link fallback.
- Touch targets are at least 44px; primary controls are 48px.
- Color contrast meets WCAG AA for body text and interactive states.
- Decorative elements use `aria-hidden`.
- Link text describes the destination; repeated cards have a readable title.
- Motion is disabled under `prefers-reduced-motion`.

## Copy style

Use plain, specific English. Prefer “build a subscription workflow with Stripe
webhooks” over “create innovative digital transformation.” Avoid “expert,”
“world-class,” “cutting-edge,” and unsupported superlatives. Name constraints
and status directly; that is part of the brand.

Use `End-to-End Product Engineer for Software, AI & Connected/IoT Products` as
the canonical identity. Explain connected-product delivery as Ariful-owned
discovery, architecture, software, integration, and validated prototype work,
with specialist PCB, certification, and manufacturing partners where required.

Use `Free product consultation` for the booking offer. Explain the 30-minute
boundary directly: it is a no-obligation fit conversation about goals,
constraints, and next steps, not a promise to design the complete solution for
free. Do not claim that the consultation guarantees a project, outcome, or
conversion improvement.
