/** @type {import("next").NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/barbarbar338",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.instagram.com/barisdemircix",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://www.youtube.com/@barbarbar338",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/BjEJFwh",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
