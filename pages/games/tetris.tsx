import type { NextPage } from "next";
import { TetrisGame } from "@components/Games/Tetris";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";

const TetrisGamePage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("games_tetris") as string}>
			<TetrisGame />
		</Layout>
	);
};

export default TetrisGamePage;
