/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, { optimizeImages: false }]], {
	cssModules: true,
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
				destination: "https://youtube.com/ProjectHammer",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/BjEJFwh",
				permanent: true,
			},
		];
	},
});
