/** @type {import("prettier").Config} */
const config = {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	tabWidth: 4,
	useTabs: true,
	bracketSpacing: true,
	singleQuote: false,
	endOfLine: "crlf",
	trailingComma: "all",
	semi: true,
};

export default config;
