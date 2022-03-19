import type { NextPage } from "next";
import { MinesweeperBoard } from "@components/Games/Minesweeper/MinesweeperBoard";
import { Layout } from "@components/Layout";

const MinesweeperGamePage: NextPage = () => {
	return (
		<Layout title="Minesweeper - Games">
			<MinesweeperBoard />
		</Layout>
	);
};

export default MinesweeperGamePage;
