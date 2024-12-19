import { defineNuxtConfig } from "nuxt/config";
// Auto import for Nuxt components
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vueuc"], // for Naive UI
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxtjs-naive-ui"],
  nitro: {
    prerender: {
      // for static site generation
      // FIXME: disable pre-rendering API endpoints for now
      // routes: ["/api/stories", "/api/metadata"], // preceding slash needed
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
