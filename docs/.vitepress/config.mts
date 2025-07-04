import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quantitative Finance",
  description: "Math foundations and selected topics in quant finance",
  markdown: {
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Probability & Stats", link: "/prob-stats/essentials/series.md" },
    ],

    sidebar: {
      "/prob-stats/": { base: "/prob-stats/", items: sidebarProbStats() },
      "/ml/": { base: "/ml/", items: sidebarML() },
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ajagekarakshay/quant-finance-special-topics",
      },
    ],
  },
});

function sidebarProbStats(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Essentials",
      collapsed: false,
      items: [
        { text: "Series", link: "essentials/series.md" },
        { text: "Linear Algebra", link: "essentials/linalg.md" },
        {
          text: "Vector calculus",
          link: "essentials/vectorcalc.md",
        },
      ],
    },
    {
      text: "Probability",
      collapsed: false,
      items: [
        { text: "Theory", link: "prob/theory.md" },
        { text: "Random variables", link: "prob/random.md" },
      ],
    },
  ];
}

function sidebarML(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Essentials",
      collapsed: false,
      items: [
        { text: "Series", link: "prob-stats/essentials/series.md" },
        { text: "Linear Algebra", link: "prob-stats/essentials/linalg.md" },
        {
          text: "Vector calculus",
          link: "prob-stats/essentials/vectorcalc.md",
        },
      ],
    },
    {
      text: "Probability",
      collapsed: false,
      items: [{ text: "Theory", link: "prob-stats/prob/theory.md" }],
    },
  ];
}
