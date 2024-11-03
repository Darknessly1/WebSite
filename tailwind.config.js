/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Lucida Console"', '"Courier New"', 'monospace'], // Add your custom font family here
      },
    },
  },
  plugins: [],
}
