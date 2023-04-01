/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors : {
        custom : {
          "whatsapp-1" : "#00a884",
          "whatsapp-2" : "#008084",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}