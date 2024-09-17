import "dotenv/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
import { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: {
    enabled: true,
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxtjs/i18n",
    "vuetify-nuxt-module",
    "@vee-validate/nuxt",
    "nuxt-vuefire",
    "@nuxt/icon",
    "@nuxt/eslint",
  ],
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true,
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
  veeValidate: {
    autoImports: true,
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
    defaultLocale: "fr",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },
  eslint: {
    // Aditional configs here
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
