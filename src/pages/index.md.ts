import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Tomas Hajek (@hajekt21)

CCM architecture, document systems, AI tools, and pragmatic engineering from Norway.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- X: [@hajekt21](https://x.com/hajekt21)
- GitHub: [@hajekt2](https://github.com/hajekt2)
- Email: tomas@hajek.no

---

*This is the markdown-only version of hajek.no. Visit [hajek.no](https://hajek.no) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
