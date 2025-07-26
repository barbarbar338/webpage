import fs from "fs";
import path from "path";

const cv_file = path.join(process.cwd(), "cv", "main.pdf");
const public_path = path.join(process.cwd(), "public", "cv.pdf");

async function main() {
	try {
		await fs.promises.copyFile(cv_file, public_path);
		console.log("CV copied successfully");
	} catch (error) {
		console.error("Error copying CV:", error);
	}
}
main();
