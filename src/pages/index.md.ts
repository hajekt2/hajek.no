import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Tomas Hajek (@hajekt21)

CCM architecture, document systems, agent-native composition, AI tools, and pragmatic engineering from Norway.

Co-founder, managing consultant, and lead architect at [Xper Consulting AS](https://xperconsulting.no), where we combine consulting with DocEngine product development.

DocEngine focuses on PDF/UA post-composition for existing PDFs and a high-performance composition engine for accessible PDF and HTML output.

Building [CCMForge](https://ccmforge.com): an agent-native document engineering platform for modern CCM work.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Xper Consulting AS: [xperconsulting.no](https://xperconsulting.no)
- CCMForge: [ccmforge.com](https://ccmforge.com)
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
