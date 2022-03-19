import type { NextPage } from "next";
import { TetrisGame } from "@components/Games/Tetris";
import { Layout } from "@components/Layout";

const TetrisGamePage: NextPage = () => {
	return (
		<Layout title="Tetris - Games">
			<TetrisGame />
		</Layout>
	);
};

export default TetrisGamePage;
