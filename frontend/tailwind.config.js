module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#53B39C',
        'background': "292524",
        'grayBackground': "464646",
        'lightGrayBackground': '#D9D9D9',
        'textGrey': '#939191',
        'textLightGrey': '#C8C8C8',
      },
      fontFamily: {
        'monteserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
