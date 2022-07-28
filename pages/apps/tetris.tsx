import type { NextPage } from "next";
import { TetrisGame } from "@components/Apps/Tetris";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";

const TetrisAppPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("apps_tetris")}>
			<TetrisGame />
		</Layout>
	);
};

export default TetrisAppPage;
