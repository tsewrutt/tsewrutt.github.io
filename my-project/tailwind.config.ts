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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // card: "var(--card)",
        // muted: "var(--text-muted)",
        // accent: "var(--accent)",
        // accentHover: "var(--accent-hover)",
        // borderColor: "var(--border-color)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "text-muted": "var(--text-muted)",
        "border-color": "var(--border-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
