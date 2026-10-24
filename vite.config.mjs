import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
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