# research-astro-starlight

**Motivation: setup a project to explore Astro v5 with Starlight documentation framework, adding Tailwind v4 and shadcn.**

## Design

- [Astro Docs](https://docs.astro.build)
- [Astro Starlight Docs](https://starlight.astro.build/)
- [Tailwind v4](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)

## User Guide

Still very much experimental, trying out combinations of Tailwind, ShadCN, React and Astro.

Generally overcame many issues relatively easily where Astro Starlight provides documentation and examples.

Template of `docs` and `splash` might be good to add a `no-content` option that excludes the hero and title banner.

## Developers Guide

- `npm install`
- `npm run dev`

## Handover Suggestions

_Nuggets of Knowledge and Thinking from last people to work on the project._
_e.g. suggestions for technical debt reduction, simplification or enhancements_

- [ ] Failed to get PageFrame override to size override header properly
- [ ] Failed to get Header override to size correctly
- [x] Added customized color theme for Starlight, and Tailwind and ShadCN
- [x] Customized some header components
- [x] Created custom starlight page to override/enhance basic Starlight Page
- [x] Created standalong Astro page with React components (but couldn't get light/dark to work with Starlights)
- [x] Installed all ShadCN components (they had not added support for Tailwind v4)
- [x] Tailwind v4 was easy but breaks ShadCN
