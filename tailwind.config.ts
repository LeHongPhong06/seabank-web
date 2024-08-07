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
        "gradient-primary": "from-[#dd1a1c] to-[#9e1e1f]",
        footer: "url('/footer.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
