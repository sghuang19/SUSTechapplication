import { defineNuxtConfig } from "nuxt/config";
// Auto import for Nuxt components
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxtjs-naive-ui"],
  nitro: {
    prerender: {
      // for static site generation
      routes: ["api/*"],
    },
  },
  vite: {
    plugins: [
      // automatic import for Naive UI components
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
});
