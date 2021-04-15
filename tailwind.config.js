module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto']
      },  
      spacing: {
        '720': '720px'
      },
      colors: {
        'white-reverse': '#212A2F',
        'grayish': '#4D5559',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })  
  ],
}
