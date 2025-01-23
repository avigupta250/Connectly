/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        'narrow': '-2px',
        'wider': '4px',
      },
      animation: {
        border: 'borderGlow 2s linear infinite', // Define your custom animation
      },
      keyframes: {
        borderGlow: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(96, 165, 250, 0.5)' }, // Customize glow effect
          '100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
