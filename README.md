# DDO Forum Redirector

A Chrome extension that rewrote **old DDO (Dungeons & Dragons Online) forum URLs**
to their new equivalents, so stale links and bookmarks no longer returned a 404.

> **Legacy project (2013).** A Chrome extension kept for reference; the target forum
> may no longer exist. Docs refreshed in 2026, behavior unchanged.

## Background

In April 2013, Turbine migrated the DDO Forums to a new platform and changed the
post URLs, but the old URLs were never rewritten to the new ones. The result:

1. Search engines lost their index (and page-rank) for the forums.
2. Every existing bookmark to a forum thread or post broke with a 404 error.

The first problem could only be fixed by the DDO team. The second is what this
extension solved: it transparently redirected the old URLs to the new ones.

## How it works

When you opened one of the old forum URLs, for example:

- `http://forums.ddo.com/showthread.php?t=193439`
- `http://www.ddo.com/en/showthread.php?t=413296`
- `http://forums.ddo.com/showthread.php?p=3850862`
- `http://forums.ddo.com/showpost.php?p=3850862`

you got a 404. The equivalent new URLs looked like:

- `http://ddo.com/forums/showthread.php/193439`
- `http://ddo.com/forums/showthread.php/?p=3850862`

The extension watched requests to `ddo.com`, matched the old URL patterns with a
couple of regular expressions, and redirected the browser to the new URL **before**
the broken page was even loaded.

## Installation

This is an unpacked Chrome extension. To load it:

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode** (toggle, top right).
3. Click **Load unpacked** and select the `src/` folder.

The extension uses the Manifest V2 `webRequest` blocking API, which modern Chrome
versions have since deprecated, so loading it today is mostly of historical interest.

## Structure

```
src/
  manifest.json    Extension manifest (Manifest V2)
  background.js    URL matching and redirect logic
  ddo16.png        Icons
  ddo48.png
  ddo128.png
```

## License

[MIT](LICENSE) © 2013–2026 mdps

---

_Un proyecto de mdps · 2026 · desarrollado en Murcia._
