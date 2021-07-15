/* eslint-disable */
const withImages = require("next-images");

module.exports = withImages({
	reactStrictMode: true,
	webpack(config) {
		// replace react with preact to reduce bundle size and faster DevServer
		Object.assign(config.resolve.alias, {
			"react-dom": "preact/compat",
			react: "preact/compat",
		});
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
		];
	},
});
