import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-text": "#0D0907",
        "gray-text": "#828282",
        primary: "#9E1E1F",
        white: "#FFFFFF",
        gray: "#E8E8E8",
        red: "#DD1B1C",
        green: "#12D252",
        purple: "#AA4FC8",
        blue: "#12A5D2",
        "gray-5": "#F3F3F3",
        "gray-process-text": "#4F4F4F",
        "gray-process": "#D9D9D9",
        "black-second": "rgba(0, 0, 0, 0.60)",
        "gray-second": "rgba(255, 255, 255, 0.30)",
        "gray-three": "#F3F3F3",
        "gray-four": "rgba(232, 232, 232, 0.50)",
      },
      boxShadow: {
        card: "30px 50px 80px 0px rgba(0, 0, 0, 0.15)",
        "select-card": "0 0 0 2px rgba(221, 27, 28, 0.1)",
      },
      padding: {
        "px-primary": "0px 16px",
      },
      maxWidth: {
        "max-w-primary": "1440px",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(95deg, rgba(221,26,28,1) 0%, rgba(158,30,31,1) 100%)",
        "gradient-black": "linear-gradient(180deg, rgba(0, 0, 0, 0) 67.5%, rgba(33, 33, 33, 0.70) 100%)",
        footer: "url('/footer.svg')",
        banner: "url('/banner.svg')",
        "banner-tablet": "url('/banner-tablet.svg')",
        hero: "url('/hero.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
