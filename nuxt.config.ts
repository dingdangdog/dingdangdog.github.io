// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "DingDangDog",
      link: [
        {
          rel: "icon",
          href: "/dingdangdog.jpg",
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  $development: {},
  $production: {},
  css: ["~/assets/css/base.css"],
  runtimeConfig: {},
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "zh",
        name: "简体中文",
      },
    ],
    vueI18n: "./i18n.config.ts",
    // By default, Nuxt i18n module attempts to redirect users to their preferred language by detecting their browser's language. This is controlled by the detectBrowserLanguage option.
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
