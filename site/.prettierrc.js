/** @type {import("@types/prettier").Options} */
module.exports = {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: [
		import("prettier-plugin-astro"),
		import("prettier-plugin-tailwindcss") /* Must come last */,
	],
	overrides: [
		{
			files: "**/*astro",
			options: {
				parser: "astro",
			},
		},
	],
};
