import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-700": "#E7816B",
      "primary-300": "#FFAD9B",
      "primary-100": "#FDF3F0",
      black: "#1D1C1E",
      white: " #FFFFFF",
      "neutral-800": "#333136",
      "neutral-300": "#F1F3F5",
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
      center: true,
      padding: { DEFAULT: "1.5rem", sm: "2.5rem", lg: "4rem", "2xl": "6rem" },
    },
    extend: {
      maxWidth: {
        "text-narrow": "45ch",
        "text-heading": "20ch",
      },
      backgroundImage: {
        "cta-pattern":
          "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "small-circle":
          "url('/assets/shared/desktop/bg-pattern-small-circle.svg')",
        "two-circles":
          "url('/assets/shared/desktop/bg-pattern-two-circles.svg')",
        "three-circles":
          "url('/assets/shared/desktop/bg-pattern-three-circles.svg')",
        "hero-pattern": "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        "design-pages-intro-mobile":
          "url('/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        "design-pages-intro-tablet":
          "url('/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg')",
        "intro-web-design":
          "url('/assets/web-design/desktop/bg-pattern-intro-web.svg')",
        "intro-app-design":
          "url('/assets/app-design/desktop/bg-pattern-intro-app.svg')",
        "intro-graphic-design":
          "url('/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg')",
        "about-hero-mobile":
          "url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
        "about-hero-tablet":
          "url('/assets/about/desktop/bg-pattern-hero-about-desktop.svg')",
      },
      letterSpacing: {
        huge: "0.25em",
      },
    },
  },

  plugins: [],
};
export default config;
