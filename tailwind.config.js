/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/index.html',
    "./pages/courses.html",
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
      colors: {
        primary: '#FF9900',
        secondary: '#272727',
     
      },
      backgroundImage: {
        'my-gradient': 'linear-gradient(225.49deg, #FF9900 -10.05%, #F06445 116.14%)'
      },
    },

  },
  plugins: [],
}