/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      'hero': "url(./assets/images/NFT_crypto.png)",
    },
    extend: {
      colors: {
        'primary': '#E2641C',
        'secondary': '#954F40',
      },
    },
  },
  plugins: [],
}
