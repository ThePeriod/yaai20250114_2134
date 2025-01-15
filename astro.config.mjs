import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/serverless";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-supabase-auth.vercel.app",
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), solidJs()],
});
