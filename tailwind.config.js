module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'pacifico': ["Pacifico", "cursive"],
        'satisfy': ["Satisfy", "cursive"],
        'madimi': ["Madimi One", "sans-serif"],
        'akaya': ["Akaya Kanadaka", "system-ui"],
        'kalam': ["Kalam", "sans-serif"],
      },
    },

    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'xsm': '375px',
      // => @media (min-width: 375px) { ... }

      'xsl': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [require("tw-elements/plugin.cjs")],
  plugins: [require('tailwindcss-animated')],
  darkMode: "class"
};

