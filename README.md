# Tomas Hajek's Personal Website

Personal website for [hajek.no](https://hajek.no), built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

This project is based on Peter Steinberger's excellent [`steipete/steipete.me`](https://github.com/steipete/steipete.me) site structure and theme.

## Commands

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Installs dependencies                       |
| `pnpm run dev`   | Starts local dev server at `localhost:4321` |
| `pnpm run build` | Build the production site to `./dist/`      |
| `pnpm run preview` | Preview the build locally                 |

## Embedding videos in posts

Do not embed GitHub `user-attachments` URLs directly in article `<video>` tags. They redirect to short-lived signed asset URLs and may fail when embedded from `hajek.no`.

Preferred workflow:

1. Download or copy the final `.mp4` into `public/videos/`.
2. Reference it from the post with a root-relative URL.
3. Use an explicit MP4 source and a normal fallback link.

Example:

```html
<video controls preload="metadata" playsinline style="width: 100%; border-radius: 0.5rem; margin: 2rem 0;">
  <source src="/videos/example-demo.mp4" type="video/mp4" />
  <a href="/videos/example-demo.mp4">Watch the demo video</a>
</video>
```

After adding a video, run `pnpm run build` and verify:

- `dist/videos/<file>.mp4` exists
- the generated post HTML references `/videos/<file>.mp4`
- the generated post HTML does not reference temporary external asset URLs

## License

Code follows the upstream MIT license. Written content in this repository is original unless otherwise noted.

See [`LICENSE`](LICENSE) for the upstream license terms retained from the source project.
