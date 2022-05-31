import type { NextPage } from "next";
import { TetrisGame } from "@components/Games/Tetris";
import { Layout } from "@components/Layout";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";

const TetrisGamePage: NextPage = () => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<Layout title={parser.get("games_tetris") as string}>
			<TetrisGame />
		</Layout>
	);
};

export default TetrisGamePage;
