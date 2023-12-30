/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      colors: {
        'regal-blue': '#c89A46',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg2.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

