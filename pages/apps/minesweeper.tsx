import { MinesweeperBoard } from "@components/Apps/Minesweeper/MinesweeperBoard";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";
import type { NextPage } from "next";

const MinesweeperAppPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("apps_minesweeper")}>
			<MinesweeperBoard />
		</Layout>
	);
};

export default MinesweeperAppPage;
