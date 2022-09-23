/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require("next-images");

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	swcMinify: true,
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
};

module.exports = withImages(nextConfig);
