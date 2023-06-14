/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/index.html',
    "./pages/contact.html"
  ],
  theme: {
    extend: {
      screens: {
        'xss': '374px',
        // // => @media (min-width: 374px) { ... }
        'xs': '500px',
        // // => @media (min-width: 500px) { ... }
      },
    },

  },
  plugins: [],
}