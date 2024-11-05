/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  options: {
    safelist: ['text-stroke'], // Prevent this class from being purged
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Lucida Console"', '"Courier New"', 'monospace'], // Add your custom font family here
        fantasy: ['fantasy'],
      },
    },
  },
  plugins: [],
}
