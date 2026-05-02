// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

export const SITE: Site = {
  website: "https://hajek.no/",
  author: "Tomas Hajek",
  profile: "https://hajek.no/about",
  desc: "CCM architecture, document systems, AI tools, and pragmatic engineering from Norway.",
  title: "Tomas Hajek",
  ogImage: "tomas-hajek-profile.png",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/hajekt2/hajek.no/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "Europe/Oslo",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

export const NAV_LINKS: SocialLink[] = [
  { href: "/", label: "Blog" },
  { href: "/about", label: "About" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/hajekt2", label: "GitHub" },
  { href: "https://x.com/hajekt21", label: "Twitter" },
  { href: "/rss.xml", label: "RSS" },
];

export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  BlueSky: "bsky",
  RSS: "rss",
  Email: "mail",
};
