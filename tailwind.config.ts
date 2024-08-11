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
        "gray-text": "#828282",
        primary: "#9E1E1F",
        white: "#FFFFFF",
        gray: "#E8E8E8",
        red: "#DD1B1C",
        green: "#12D252",
        purple: "#AA4FC8",
        blue: "#12A5D2",
        "black-second": "rgba(0, 0, 0, 0.60)",
        "gray-second": "rgba(255, 255, 255, 0.30)",
        "gray-three": "#F3F3F3",
        "gray-four": "rgba(232, 232, 232, 0.50)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(95deg, rgba(221,26,28,1) 0%, rgba(158,30,31,1) 100%)",
        "gradient-black": "linear-gradient(180deg, rgba(0, 0, 0, 0) 67.5%, rgba(33, 33, 33, 0.70) 100%)",
        footer: "url('/footer.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
