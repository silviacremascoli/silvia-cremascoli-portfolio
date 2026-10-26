import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { searchForWorkspaceRoot } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(projectRoot),
        path.resolve(projectRoot, "../core-ui-library"),
      ],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "assets/images/**/*",
          dest: ".",
          structured: true,
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        work: "work.html",
        contact: "contact.html",
      },
    },
  },
});