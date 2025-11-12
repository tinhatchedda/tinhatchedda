# Tin Hat Chedda™ — Volume 1 Site

This is a ready-to-deploy static site scaffold for **Tin Hat Chedda™**.
Drop your five 5-second loop videos and your 21-second trailer into `/assets/video/` and a low, looping hum into `/assets/audio/hum.mp3`.

## Files to Provide
- `assets/video/vol1-trailer.mp4` — 21s montage cut (autoplays in hero)
- `assets/video/file01.mp4` — The Chedda Incident
- `assets/video/file02.mp4` — The Pull
- `assets/video/file03.mp4` — Clockland Arrival
- `assets/video/file04.mp4` — Prophecy of the Shroom
- `assets/video/file05.mp4` — The Glitch Return
- `assets/audio/hum.mp3` — your 16mm-style low static hum
- Optional: `assets/img/poster-*.jpg` for video posters

## How to Run
Just open `index.html` locally or host on GitHub Pages / Netlify.
Edit copy inside `index.html` (search for "FILE 01" etc) and style in `styles.css`.

## Notes
- Audio requires a user interaction to start on mobile; use the "Unmute Audio" button.
- The site is mobile-optimized and supports touch/scroll.
- Slogans rotate in the footer; edit them via `window.__THC_SLOGANS__` in `index.html`.