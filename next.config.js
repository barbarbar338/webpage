/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const withImages = require("next-images");
const withYAML = require("next-yaml");

module.exports = withPlugins([withImages, withYAML], {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	i18n: {
		locales: ["en", "tr"],
		defaultLocale: "en",
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/barbarbar338",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.instagram.com/ben_baris.d",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://www.youtube.com/ProjectHammer",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/BjEJFwh",
				permanent: true,
			},
			{
				source: "/pokemon",
				destination: "https://discord.gg/CNXVAuhGGa",
				permanent: true,
			},
		];
	},
});
