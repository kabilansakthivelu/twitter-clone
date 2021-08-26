module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'vsm':'350px',
      'sm':'450px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
    extend: {
      maxWidth: {
       '1/4': '10rem',
      },
        inset:{
          '-100':'-47rem',
        },
        width:{
          '2/2': '45%',
          '3/3': '40.3%',
        },
        margin:{
          '88':'21.7rem',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
