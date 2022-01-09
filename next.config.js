/* eslint-disable */
const withImages = require("next-images");

/**
 * @type { import("next").NextConfig }
 */
module.exports = withImages({
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	webpack(config) {
		// replace react with preact to reduce bundle size and faster DevServer
		Object.assign(config.resolve.alias, {
			"react-dom": "preact/compat",
			react: "preact/compat",
		});
		return config;
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
				source: "/hiven",
				destination: "https://hiven.house/MCtyjW",
				permanent: true,
			},
		];
	},
});
