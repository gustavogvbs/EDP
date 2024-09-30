/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			padding: {
				21: 21,
				58: 58,
			},
			maxWidth: {
				edp: 1440,
			},
			colors: {
				"edp-dark-blue": "#212E3E",
				"edp-blue-stone": "#225E66",
				"edp-green": "#26FE53",
				"edp-green-hover": "#7eff97",
				"edp-dark-blue-hover": "#424d5b",
				"edp-purple": "#6D32FF",
				"edp-black": "#1E1E1E",
				"edp-grey": "#7c9599",
				"edp-dark-gray": "#455558",
			},
			backgroundColor: {
				"edp-footer-blue": "#212E3E",
			},
			fontFamily: {
				mulish: '"Mulish", sans-serif',
			},
		},
	},
	plugins: [],
};
