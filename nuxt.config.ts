import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
      "stores",
      "stores/*/index.{ts,js,mjs,mts}",
      "stores/**",
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  routeRules: {
    "/": {
      redirect: {
        to: "/weather",
      },
    },
  },

  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
});
