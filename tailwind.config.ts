import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "bss-blue": "#0F172A",
                "bss-blue-light": "#1E3A8A",
                "bss-gold": "#FBBF24",
                "bss-gold-glow": "#FFD700",
            },
            fontFamily: {
                cinzel: ["var(--font-cinzel)", "serif"],
                "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
