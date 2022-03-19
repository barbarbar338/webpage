import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { TicTacToeGame } from "@components/Games/TicTacToe";

const TicTacToeGamePage: NextPage = () => {
	return (
		<Layout title="Tic Tac Toe - Games">
			<TicTacToeGame />
		</Layout>
	);
};

export default TicTacToeGamePage;
