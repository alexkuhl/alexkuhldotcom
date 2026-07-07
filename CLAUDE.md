# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Alex Kuhl's personal website (alexkuhl.com): a static, single-page HTML site with no build
step, no package manager, and no test suite. It is built on the "Bionick" ThemeForest HTML template
(jQuery + a stack of jQuery plugins for parallax, carousels, and scroll effects).

## Running / previewing

There is no build process — `index.html` can be opened directly in a browser, or served with any
static file server, e.g.:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000/index.html`.

## Structure

- `index.html` — the entire site content lives in this single page. Sections (`#about`, `#resume`,
  `#contact`) are anchored `<section>`s inside `.wrapper-inner`, navigated via in-page scroll links
  rather than separate routes/pages.
- `css/reset.css` — CSS reset, loaded first.
- `css/plugins.css` — styles required by the third-party JS plugins (owl carousel, magnific popup,
  isotope, etc.). Treat as vendor code.
- `css/style.css` — the Bionick theme's main stylesheet, organized into named sections (see the
  banner comment at the top of the file for the section list: Header, Navigation, Home, Resume,
  Skills, Footer, Portfolio, Blog, etc.) — most of these sections are unused since this site only
  uses the About/Resume/Contact single-page layout.
- `css/color.css` — the theme's color accent is centralized here as one shared hex value (currently
  `#E06800`) applied across many unrelated selectors via one big comma-separated rule. Change the
  site's accent color by editing this one value rather than hunting through `style.css`.
- `js/jquery.min.js` — vendored jQuery.
- `js/plugins.js` — a minified bundle of third-party vendor plugins (Modernizr, jQuery easing,
  mousewheel/momentum scrolling, owl carousel, magnific popup, isotope, skrollr, etc.). Not
  hand-written; avoid editing directly.
- `js/scripts.js` — the theme's own glue code (`initBionick()`, `initparallax()`), wiring the
  vendored plugins to this page's DOM (carousels, parallax backgrounds, scroll-spy nav highlighting,
  mobile fallback that disables parallax/video backgrounds on touch devices, the contact form AJAX
  submit handler). This is the file to edit when changing interactive behavior.
- `images/` — page images; `images/bg/` and `images/bg/long/` hold the hero slider and per-section
  scroll-nav background images referenced via `data-bgscr` attributes in `index.html`.
- `fonts/` — Font Awesome icon font, referenced via `fa fa-*` classes in the HTML.

## Notes when editing

- All page copy, structural markup, and section content lives directly in `index.html` — there is no
  templating layer.
- Navigation between sections works by both `.custom-scroll-link` (smooth-scrolls to an anchor) and
  `.scroll-nav` (the left/side nav highlighted by `singlePageNav`, swapping the fixed background image
  and caption via each link's `data-bgscr`/`data-bgtex` attributes). Adding a new section requires
  updating both the `<section id="...">` content and the corresponding scroll-nav `<li>` entry.
- `js/scripts.js` is a manually de-minified/formatted version of the packaged theme JS — keep edits
  consistent with the existing (fairly dense, single-letter-variable) style already in that file
  rather than introducing a different code style for new code in the same functions.
