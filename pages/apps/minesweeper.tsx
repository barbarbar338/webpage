import type { NextPage } from "next";
import { MinesweeperBoard } from "@components/Apps/Minesweeper/MinesweeperBoard";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";

const MinesweeperAppPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("apps_minesweeper") as string}>
			<MinesweeperBoard />
		</Layout>
	);
};

export default MinesweeperAppPage;
