import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "dl-",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        csuccess: "inset 0px 0px 0px 2px #008A05",
        error: "inset 0px 0px 0px 2px #DF1978",
        "nav-bar": "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "highlight-medium": "#0064D1",
        "highlight-dark": "#003D9F",
        "highlight-lightest": "#F2F7FF",
        "neutral-dark": "#6C6C6C",
        "neutral-darkest": "#202020",
        "neutral-medium": "#DEDEDE",
        "neutral-lightest": "#FCFCFC",
        "neutral-light": "#F7F7F7",
        "negative-dark": "#AD0048",
        "positive-medium": "#008A05",
        "positive-dark": "#006B00",
        "support-warning-dark": "#9f5200",
        "support-negative-medium": "#DF1978",
        "support-warning-lightest": "#fff9f2",
        "support-positive-lightest": "#f2fdf9",
        "support-positive-dark": "#006E4A",
        "support-bg-status-warning": "#FFBE79",
        "support-bg-status-success": "#79D6B7",
        "warning-medium": "#D97D08",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
        },
      },
      height: {
        18: "72px",
      },
      width: {
        22: "88px",
      },
    },
  },
  plugins: [],
};
export default config;
