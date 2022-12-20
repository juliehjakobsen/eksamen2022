// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        abonnement: resolve(_dirname, "src/abonnement.html"),
        abonnement1: resolve(_dirname, "src/abonnement1.html"),
        abonnement2: resolve(_dirname, "src/abonnement2.html"),
        abonnement3: resolve(_dirname, "src/abonnement3.html"),
        abonnement4: resolve(_dirname, "src/abonnement4.html"),
        betal_bekraeft: resolve(_dirname, "src/betal_bekraeft.html"),
        betal_kreditkort: resolve(_dirname, "src/betal_kreditkort.html"),
        betal: resolve(_dirname, "src/betal.html"),
        blomster: resolve(_dirname, "src/blomster.html"),
        information: resolve(_dirname, "src/information.html"),
        kurv: resolve(_dirname, "src/betal.html"),
        sitemap: resolve(_dirname, "src/sitemap.html"),
        vaser: resolve(_dirname, "src/vaser.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
