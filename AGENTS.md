# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable Design Decisions

- Do not compress the homepage to match the height of the original option 2 reference. Product screenshots must be large enough to inspect, and the desktop hero must leave meaningful room for the content below it.
- Keep the Qrio visual language restrained and product-led: dark photographic hero, white reading surfaces, blue and green functional accents, and real in-app screenshots.
- Keep homepage typography on one coherent scale. Secondary product and legal text must remain comfortably readable; do not restore the previous 12px privacy copy or 9px footer copy.
- Explain Qrio Pro on the homepage using only benefits verified in the iOS source. Do not invent pricing, discounts, subscriptions, or unsupported capabilities.
