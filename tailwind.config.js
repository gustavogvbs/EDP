/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "edp-dark-blue": "#212E3E",
        "edp-blue-stone": "#225E66",
        "edp-green": "#26FE53",
        "edp-green-hover": "#7eff97",
        "edp-purple": "#6D32FF",
        "edp-black": "#1E1E1E",
        "edp-grey": "#7c9599",
      },
      fontFamily: {
        mulish: '"Mulish", sans-serif',
      },
    },
  },
  plugins: [],
};
