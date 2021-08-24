module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
       '1/4': '10rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
