import type { NextPage } from "next";
import { TicTacToeGame } from "@components/Games/TicTacToe";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";

const TicTacToeGamePage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("games_tic_tac_toe") as string}>
			<TicTacToeGame />
		</Layout>
	);
};

export default TicTacToeGamePage;
