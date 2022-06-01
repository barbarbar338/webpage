import type { NextPage } from "next";
import { TetrisGame } from "@components/Games/Tetris";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";

const TetrisGamePage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("games_tetris") as string}>
			<TetrisGame />
		</Layout>
	);
};

export default TetrisGamePage;
