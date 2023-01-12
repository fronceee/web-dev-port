/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': '#2932FF',
        'bright-orange': '#FF4C29',
        'bright-pink': '#FF29DD',
        'bright-purple': '#6D29FF'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
