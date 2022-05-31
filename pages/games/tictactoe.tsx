import type { NextPage } from "next";
import { TicTacToeGame } from "@components/Games/TicTacToe";
import { Layout } from "@components/Layout";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";

const TicTacToeGamePage: NextPage = () => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<Layout title={parser.get("games_tic_tac_toe") as string}>
			<TicTacToeGame />
		</Layout>
	);
};

export default TicTacToeGamePage;
