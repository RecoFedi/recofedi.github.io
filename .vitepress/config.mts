import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "RecoFedi",
    description: "RecoFedi is a recommendation system for Fediverse, a social network for federated communities.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/intro/" },
            { text: "Doc", link: "/doc" },
            { text: "Reference", link: "/ref/resources/" },
        ],

        sidebar: {
            "/doc/": [
                {
                    text: "Documentation",
                    items: [{ text: "Index", link: "/doc/" }],
                },
            ],
            "/guide/": [
                {
                    items: [
                        {
                            text: "Introduction",
                            collapsed: false,
                            items: [{ text: "What is RecoFedi?", link: "/guide/intro/" }],
                        },
                    ],
                },
            ],
            "/ref/": [
                {
                    items: [
                        {
                            text: "Sources",
                            collapsed: false,
                            items: [
                                { text: "Resources", link: "/ref/resources/" },
                                { text: "Projects", link: "/ref/projects/" },
                                { text: "Papers", link: "/ref/papers/" },
                            ],
                        },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/recofedi" }],
    },
});
