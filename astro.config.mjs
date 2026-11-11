import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

export default defineConfig({
  build: { format: "file" },
  trailingSlash: "never",
  // Astro 7's default whitespace rules would drop the space before inline links.
  compressHTML: true,
  vite: {
    // The library's stylesheet export has no file extension, so it must be bundled.
    ssr: { noExternal: ["core-ui-library", "@astrojs/vue-renderer"] },
  },
  integrations: [vue()],
});