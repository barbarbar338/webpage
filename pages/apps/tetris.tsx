import { TetrisGame } from "@components/Apps/Tetris";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";
import type { NextPage } from "next";

const TetrisAppPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("apps_tetris")}>
			<TetrisGame />
		</Layout>
	);
};

export default TetrisAppPage;
