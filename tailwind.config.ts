import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stroke: "var(--border-input)",
      },
      fontFamily: {
        text: "var(--font-poppins)",
        title: "var(--font-khand)",
      },
    },
  },
  plugins: [],
} satisfies Config;
