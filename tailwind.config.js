module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#f3f4f6',
      },
      borderRadius: {
        bannerRadius: '15px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
