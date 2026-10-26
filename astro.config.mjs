import { defineConfig } from "astro/config";

export default defineConfig({
  // Emit work.html / contact.html so the existing /work and /contact URLs keep working.
  build: { format: "file" },
  trailingSlash: "never",
  // Astro 7's default whitespace rules would drop the space before inline links.
  compressHTML: true,
  vite: {
    // The library's stylesheet export has no file extension, so it must be bundled.
    ssr: { noExternal: ["core-ui-library"] },
  },
});
