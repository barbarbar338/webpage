import { TicTacToeGame } from "@components/Apps/TicTacToe";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";
import type { NextPage } from "next";

const TicTacToeAppPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("apps_tic_tac_toe")}>
			<TicTacToeGame />
		</Layout>
	);
};

export default TicTacToeAppPage;
