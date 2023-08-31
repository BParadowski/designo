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
  },
  plugins: [],
};
export default config;
