/* eslint-disable */
const withImages = require("next-images");

module.exports = withImages({
	reactStrictMode: true,
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
		];
	},
});
