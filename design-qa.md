# Design QA

## Inputs

- Design baseline: visual option 2 in `docs/visual-reference-option-2.png`.
- Scope: implement the P0 and P1 findings from the homepage audit without adding unverified product claims.
- Final desktop capture: `qa/screenshots/home-desktop-redesign.png` (1440 px viewport).
- Final mobile capture: `qa/screenshots/home-mobile-redesign.png` (390 px viewport).
- Rendering engine: Google Chrome 152, the user's configured default browser.

## Verified Design Changes

- Rebuilt the hero around one value proposition, two calls to action, and two real product screens; the earlier third overlapping phone was removed.
- Expanded the feature area to a 1120 px content width with three alternating 590 px rows and readable 460 px product previews.
- Added a dedicated Qrio Pro section. Every benefit and purchase statement is traceable to the app source and `docs/content-evidence.md`.
- Reworked the privacy band and footer so supporting text remains readable instead of being compressed to fit the old reference height.
- Collapsed the legal table of contents on mobile while keeping all section anchors keyboard- and touch-accessible.
- Preserved the selected direction's dark hero, white feature surface, blue and green accents, and actual Qrio product imagery.

## Responsive And Interaction Review

Browser audits covered 1859 x 968, 1440 x 900, 1024 x 900, 821 x 900, 768 x 1024, 390 x 844, and 320 x 568 for the landing page, plus mobile Privacy Policy and Terms of Use pages.

- No horizontal overflow at any tested width.
- Every image loaded with a non-zero natural size.
- One page-specific `h1` and no duplicate element IDs on each route.
- No site-origin JavaScript exceptions or warnings. Recorded warnings came only from an installed Chrome extension.
- Mobile navigation opens from its 44 x 44 button and closes with Escape.
- The mobile legal table of contents opens on demand, follows section anchors, and collapses after selection.
- Footer links, legal navigation, and primary calls to action retain appropriate touch targets.

## Readability And Contrast Review

Measured foreground/background contrast ratios for the final palette:

- Feature body copy: 5.47:1.
- Privacy body copy: 6.36:1.
- Light-section eyebrow text: 4.74:1.
- Hero eyebrow text: 10.10:1.
- Qrio Pro body copy: 9.07:1.
- Footer secondary text: 4.94:1.

All listed text colors meet WCAG AA for their rendered sizes.

## Content And Privacy Review

- Product statements were checked against the Qrio source; the evidence is recorded in `docs/content-evidence.md`.
- Qrio Pro is described only as a one-time, non-consumable, restorable App Store purchase with unlimited local history, advanced QR styles, and CSV history export.
- Privacy copy explicitly discloses Firebase Analytics and Crashlytics and does not make a false "no data collected" claim.
- The website loads no analytics, ad pixels, third-party fonts, or tracking scripts.
- Privacy Policy and Terms of Use have distinct metadata, canonical URLs, readable navigation, and support contact information.

## Automated Verification

- `npm run build`: passed.
- `npm run test:sites`: 4 tests passed.
- `npm audit --audit-level=high`: 0 vulnerabilities.
- `git diff --check`: passed.

final result: passed
