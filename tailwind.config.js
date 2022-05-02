// eslint-disable-next-line import/no-unresolved
const defaultTheme = require('tailwindcss/defaultTheme')
// eslint-disable-next-line import/no-unresolved
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['nunito', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        emphasis: '#F97316',
        primary: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
        disabled: colors.gray
      }
    },
  },
  plugins: [],
};
