/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, { optimizeImages: false }]], {
	dir: "src",
	distDir: "../dist",
	cssModules: true,
});
