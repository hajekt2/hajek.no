import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Tomas Hajek (@hajekt21)

I design and build systems that generate, transform, and validate customer documents. My work covers OpenText Exstream, accessible PDF/UA output, and AI tools for document engineering.

Co-founder, managing consultant, and lead architect at [Xper Consulting AS](https://xperconsulting.no), where we combine consulting with DocEngine product development.

DocEngine adds accessibility structure to existing PDFs, validates the result, and generates accessible PDF and HTML from templates and structured data.

I am also building [CCMForge](https://ccmforge.com), which brings template analysis, validation, publishing, HTML/PDF composition, and Exstream-focused assistance into one workflow.

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
