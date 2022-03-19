import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { TetrisGame } from "@components/Games/Tetris";

const TetrisGamePage: NextPage = () => {
	return (
		<Layout title="Tetris - Games">
			<TetrisGame />
		</Layout>
	);
};

export default TetrisGamePage;
