/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: {
            primary: "#111827",
            light: "#4b5563",
            dark: "#1F2937",
          },
          gray: {
            DEFAULT: "#F3F4F6",
            dark: "#6B7280"
          },
          amber: "#D97706",
          sky: "#0284C7",
          red: "#DC2626",
          orange: "#EA580C",
          yellow: "#CA8A04",
          lime: "#65A30D",
          green: "#16A34A",
          emerald: "#059669",
          teal: "#0D9488",
          cyan: "#0891B2",
          blue: "#2563EB",
          indigo: "#4F46E5",
          violet: "#7C3AED",
          purple: "#9333EA",
          fuchsia: "#C026D3",
          pink: "#DB2777",
          rose: "#E11D48",
        }
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
