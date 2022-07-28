import type { NextPage } from "next";
import { TicTacToeGame } from "@components/Apps/TicTacToe";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";

const TicTacToeAppPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("apps_tic_tac_toe")}>
			<TicTacToeGame />
		</Layout>
	);
};

export default TicTacToeAppPage;
