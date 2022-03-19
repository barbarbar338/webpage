import type { NextPage } from "next";
import { TicTacToeGame } from "@components/Games/TicTacToe";
import { Layout } from "@components/Layout";

const TicTacToeGamePage: NextPage = () => {
	return (
		<Layout title="Tic Tac Toe - Games">
			<TicTacToeGame />
		</Layout>
	);
};

export default TicTacToeGamePage;
