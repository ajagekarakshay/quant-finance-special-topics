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
      { text: "Home", link: "/index.md" },
      {
        text: "Probability & Stats",
        link: "/prob-stats/essentials/series.md",
      },
    ],

    sidebar: {
      "/prob-stats/": {
        base: "/prob-stats/",
        items: sidebarProbStats(),
      },
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
        { text: "Series", link: "essentials/1_series.md" },
        { text: "Linear Algebra", link: "essentials/2_linalg.md" },
        {
          text: "Vector calculus",
          link: "essentials/3_vectorcalc.md",
        },
      ],
    },
    {
      text: "Probability",
      collapsed: false,
      items: [
        { text: "Theory", link: "prob/1_theory.md" },
        { text: "Random variables", link: "prob/2_random.md" },
        { text: "Characteristic functions", link: "prob/3_characteristic.md" },
        { text: "Transformations", link: "prob/4_transformation.md" },
      ],
    },
    {
      text: "Stochastic calculus",
      collapsed: false,
      items: [
        { text: "Markov chains", link: "stochastic/1_markov.md" },
        {
          text: "Martingale & Random walk",
          link: "stochastic/2_martingale.md",
        },
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
