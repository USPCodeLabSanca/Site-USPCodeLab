module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#53B39C',
<<<<<<< HEAD
        'primaryDark': '#3D8574',
        'primaryDarker': '#30685B',
        'primaryLight': '#6FF2D3',
=======
>>>>>>> e313823 ( estrutura card)
        'background': "#292524",
        'grayBackground': "#464646",
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
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
