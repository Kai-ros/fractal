// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  telemetry: false,
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
  fonts: {
    providers: {
      // Disable external providers to avoid certificate issues
      google: false,
      fontsource: false,
      googleicons: false,
    },
  },
});
