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
        index: resolve(__dirname, "src/index.html"),
        abonnement: resolve(__dirname, "src/abonnement.html"),
        abonnement1: resolve(__dirname, "src/abonnement1.html"),
        abonnement2: resolve(__dirname, "src/abonnement2.html"),
        abonnement3: resolve(__dirname, "src/abonnement3.html"),
        abonnement4: resolve(__dirname, "src/abonnement4.html"),
        betal_bekraeft: resolve(__dirname, "src/betal_bekraeft.html"),
        betal_kreditkort: resolve(__dirname, "src/betal_kreditkort.html"),
        betal: resolve(__dirname, "src/betal.html"),
        blomster: resolve(__dirname, "src/blomster.html"),
        information: resolve(__dirname, "src/information.html"),
        kurv: resolve(__dirname, "src/betal.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        vaser: resolve(__dirname, "src/vaser.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
