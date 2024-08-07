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
        primary: "#9E1E1F",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(95deg, #DD1B1C0%, #9E1E1F99.22%)",
        "footer-mobile": "url('./src/assets/images/bg-footer.png')",
      },
    },
  },
  plugins: [],
};
export default config;
