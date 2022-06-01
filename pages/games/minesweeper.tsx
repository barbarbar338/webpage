import type { NextPage } from "next";
import { MinesweeperBoard } from "@components/Games/Minesweeper/MinesweeperBoard";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";

const MinesweeperGamePage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("games_minesweeper") as string}>
			<MinesweeperBoard />
		</Layout>
	);
};

export default MinesweeperGamePage;
