import type { NextPage } from "next";
import { TicTacToeGame } from "@components/Games/TicTacToe";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";

const TicTacToeGamePage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("games_tic_tac_toe") as string}>
			<TicTacToeGame />
		</Layout>
	);
};

export default TicTacToeGamePage;
