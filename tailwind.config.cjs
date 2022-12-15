// ** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /* PRIMARY */

      sol: "#f5c330",
      rust: "#d2682c",
      himmel: "#cdeff6",
      regnorm: "#d5bba4",
      graes: "#656a41",

      /* COLORS */
      /* rust */
      "rust-100": "#f9eed7",
      "rust-200": "#f4d7b0",
      "rust-300": "e8b886",
      "rust-400": "#d89966",
      "rust-500": "#c36e3b",
      "rust-600": "#a7522d",
      "rust-700": "#8c3b21",
      "rust-800": "#6f2717",
      "rust-900": "#5c1a0f",

      /* himmel */

      "himmel-100": "#f7fefd",
      "himmel-200": "#f0fefd",
      "himmel-300": "#e7fafc",
      "himmel-400": "#dff5f8",
      "himmel-500": "#d4eef5",
      "himmel-600": "#9fc3d1",
      "himmel-700": "#7298ae",
      "himmel-800": "#4c6e8b",
      "himmel-900": "#314f73",

      /* graes */

      "graes-100": "#f6f7e6",
      "graes-200": "#edf0ce",
      "graes-300": "#ced2a6",
      "graes-400": "#a0a57a",
      "graes-500": "#666a46",
      "graes-600": "#565b35",
      "graes-700": "#464c26",
      "graes-800": "#373d1a",
      "graes-900": "#2d3212",

      /* sol */

      "sol-100": "#fdf8d9",
      "sol-200": "#fbf0b4",
      "sol-300": "#f8e48f",
      "sol-400": "#f3d774",
      "sol-500": "#edc551",
      "sol-600": "#caa340",
      "sol-700": "#a98332",
      "sol-800": "#886524",
      "sol-900": "#6f501b",

      /* regnorm */

      "regnorm-100": "#fcf9f2",
      "regnorm-200": "#f9f2e5",
      "regnorm-300": "#f0e4d2",
      "regnorm-400": "#e2d3c0",
      "regnorm-500": "#d1bca7",
      "regnorm-600": "#b2937b",
      "regnorm-700": "#926e56",
      "regnorm-800": "#744c38",
      "regnorm-900": "#5f3423",

      /* COLOR | ALIAS */

      /* BACKGROUNDS */

      "background-color": "#fffdf9",
      "banner-background": "#282828",
      "footer-background1": "#484848",
      "footer-background2": "#323232",

      /* HEADINGS */

      "color-headings": "#000000",

      /* TYPOGRAFI */
      "color-white": "#ffffff",
      "color-black": "#000000",

      /* BUTTONS */

      /* secondary */
      "color-secondary-button-background": "#ffffff00",
    },
    maxWidth: {
      "abb-card-mobile": "175px",
      "abb-card-desktop": "375.39px",
    },
    fontFamily: {
      "font-body": ["Orienta", "sans-serif"],
      "main-heading": ["Sansita", "sans-serif"],
      "other-headings": ["Roboto", "sans-serif"],
      "button-text": ["Roboto", "sans-serif"],
    },
    fontSize: {
      /* mobile */
      "h1-mobile": "2.488rem",
      "h2-mobile": "2.074rem",
      "h3-mobile": "1.728rem",
      "h4-mobile": "1.44rem",
      "h5-mobile": "1.2rem",
      "body-mobile": "1rem",
      "button-mobile": "0.938rem",
      "footer-mobile": "0.938rem",
      "banner-mobile": "6.875rem",
      "abonnement-text-spand": "0.563rem",
      "abonnement-text-info": "0.813rem",
      "progressbar-number": "0.625rem",

      /* desktop */

      "h1-desktop": "5.653rem",
      "h2-desktop": "3.998rem",
      "h3-desktop": "2.827rem",
      "h4-desktop": "1.999rem",
      "h5-desktop": "1.414rem",
      "body-desktop": "1.125rem",
      "banner-desktop": "15.625rem",
      "button-desktop": "1.375rem",
      "progress-heading": "2rem",
      header_text_desktop: "1.2rem",
    },
    dropShadow: {
      shadow: "rgba(70, 70, 70, 0.25)",
    },

    extend: {
      backgroundImage: {
        hero_image: "url('img/hero_billede.webp')",
      },
      spacing: {
        /* mobile */
        "xxxs-spacing-mobile": "5px",
        "xxs-spacing-mobile": "9px",
        "xs-spacing-mobile": "14px",
        "s-spacing-mobile": "18px",
        "m-spacing-mobile": "27px",
        "l-spacing-mobile": "36px",
        "xl-spacing-mobile": "54px",
        "xxl-spacing-mobile": "72px",
        "xxxl-spacing-mobile": "108px",

        /* desktop */

        "xxxs-spacing-desktop": "6px",
        "xxs-spacing-desktop": "11px",
        "xs-spacing-desktop": "17px",
        "s-spacing-desktop": "22px",
        "m-spacing-desktop": "33px",
        "l-spacing-desktop": "44px",
        "xl-spacing-desktop": "66px",
        "xxl-spacing-desktop": "88px",
        "xxxl-spacing-desktop": "132px",
      },
    },
    borderRadius: {
      "radius-mobile": "3px",
      "radius-desktop": "5px",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
