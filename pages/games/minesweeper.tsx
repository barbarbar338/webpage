import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { MinesweeperBoard } from "@components/Games/Minesweeper/MinesweeperBoard";

const MinesweeperGamePage: NextPage = () => {
	return (
		<Layout title="Minesweeper - Games">
			<MinesweeperBoard />
		</Layout>
	);
};

export default MinesweeperGamePage;
