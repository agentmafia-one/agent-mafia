/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d9ff',
        secondary: '#1a1a2e',
        background: '#0f0f1a',
        surface: '#1e1e32',
      },
    },
  },
  plugins: [],
}
