/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				primary: colors.emerald[500],
				"primary-dark": colors.emerald[800],
				"primary-hover": colors.emerald[600],
				secondary: colors.emerald[50],
				tertiary: colors.emerald[100],
				"gray-secondary": colors.gray[500],
				"gray-tertiary": colors.gray[400],
				border: colors.gray[300],
				text: colors.gray[500],
				title: colors.gray[800],
				link: colors.emerald[500],
				"red-primary": colors.red[600],
				"red-secondary": colors.red[400],
				"result-correct": colors.emerald[500],
				"result-incorrect": colors.red[500],
				"result-unanswered": colors.gray[300],
				"result-skipped": colors.gray[200],
				underline: colors.gray[100],
			},
		},
	},
}
