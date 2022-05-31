import type { NextPage } from "next";
import { MinesweeperBoard } from "@components/Games/Minesweeper/MinesweeperBoard";
import { Layout } from "@components/Layout";
import { LocaleParser } from "@libs/localeParser";
import { useRouter } from "next/router";

const MinesweeperGamePage: NextPage = () => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<Layout title={parser.get("games_minesweeper") as string}>
			<MinesweeperBoard />
		</Layout>
	);
};

export default MinesweeperGamePage;
