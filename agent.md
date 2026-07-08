# Agent Handoff Notes

This repository is currently being developed on the `xpy_dev` branch. All future code changes for this work should stay on `xpy_dev`; do not modify `main` or `gh-pages` unless the user explicitly asks.

## Project Goal

Build an interactive frontend for the Self-Evolving Agent Radar. The app should help users browse papers and systems across Skill, Memory, Workflow, and Evaluation directions, with a radar-style overview, filters, animated cards, and detailed paper reading pages.

The current frontend is not just a static GitHub Pages export. It is a Vite/React app that keeps the interactive radar experience while absorbing the latest research data and figure resources from the main source snapshot.

## Current Branch State

- Active branch: `xpy_dev`
- Latest pushed commit at handoff: `cb31e39 feat: sync main research data and figures`
- `xpy_dev` was originally forked from `gh-pages`, then source code and data from `main` were brought in.
- The branch has already been pushed to `origin/xpy_dev`.

## Important Files

- `src/App.tsx`
  - Main application shell, navigation, overview page, and paper detail page.
  - The detail page manually fuses the interactive frontend with main's structured prose and figure rendering logic.
  - Important helpers include `resolveAsset`, `RichText`, `SectionHead`, `ClauseList`, and `StructuredProse`.

- `src/styles.css`
  - Main visual system and motion layer.
  - Contains the animated radar, card shimmer, detail page prose styles, figure cards, score metrics, and responsive behavior.
  - Keep motion polished but readable. The user asked for a more "cool" animation style, but avoid making the UI chaotic.

- `src/data/radarData.ts`
  - Defines shared types, page/category taxonomy, and combines imported data.
  - `radarItems` currently combines:
    - `importedSkillItems`
    - `importedMemoryItems`
    - seed items that are not skill or memory
  - `RadarItem` supports optional `figures`.

- `src/data/importedSkillItems.ts`
  - Latest imported Skill data, currently 104 skill entries.

- `src/data/importedMemoryItems.ts`
  - Latest imported Memory data, currently 123 memory entries.

- `public/figures`
  - Latest imported figure resources, currently 117 image files.
  - Figure paths in data are resolved through `import.meta.env.BASE_URL`, so they work under the GitHub Pages base path.

## Latest Main Snapshot

The user downloaded the latest main/master snapshot here:

```text
/Users/xupeiying/Downloads/self-evolving-agent-radar-main
```

That snapshot was used as the source for:

- `src/data/importedSkillItems.ts`
- `src/data/importedMemoryItems.ts`
- `src/vite-env.d.ts`
- `public/figures`
- main's structured prose / figure detail rendering logic, manually adapted into the current interactive frontend

Do not blindly overwrite the interactive frontend with the downloaded snapshot. If main changes again, absorb data and assets first, then manually merge any useful rendering logic into the current `xpy_dev` UI.

## Development Commands

Install dependencies if needed:

```sh
npm install
```

Run local dev server:

```sh
npm run dev
```

The app has been tested locally at:

```text
http://127.0.0.1:5173/self-evolving-agent-radar/
```

Build check:

```sh
npm run build
```

The build currently passes. Vite may warn that the JS chunk is larger than 500 kB because the app includes large research datasets. That warning is expected and not a build failure.

## Git / Workflow Rules

- Stay on `xpy_dev` for all code changes.
- Do not touch `main` or `gh-pages` unless explicitly requested.
- The user has allowed jumping out of the sandbox when needed for git/network operations.
- If network commands fail, the user mentioned using proxy `http://127.0.0.1:7897`.
- Before pushing, run `npm run build` and check `git status --short --branch`.

## Design Direction

The user wants the frontend to feel more polished and visually engaging, especially animations. Current direction:

- Keep the radar and card interactions energetic.
- Preserve readable research browsing; this is a technical research tool, not a landing page.
- Use real figure images where available.
- Detail pages should feel like structured reading notes: summary, method, figures, experiments, findings, limitations, score vector, citation, links, and related papers.
- Avoid breaking long text or letting labels overflow on mobile.

## Verification Already Done

Before this handoff, the following checks passed:

```sh
npm run build
curl -I http://127.0.0.1:5173/self-evolving-agent-radar/
curl -I http://127.0.0.1:5173/self-evolving-agent-radar/figures/skill-d2skill-d2skill_architecture_overview.png
```

The page and figure resource both returned `200 OK`.
