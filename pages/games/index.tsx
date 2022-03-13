import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { FaBomb } from "react-icons/fa";
import { Link } from "@components/Utils/Link";
import { m } from "framer-motion";
import { GamesCard } from "@components/Games/GamesCard";

const games = [
	{
		name: "Minesweeper",
		description: "A classic game of minesweeper",
		icon: FaBomb,
		href: "/games/minesweeper",
		color: "text-black",
	},
];

const GamesPage: NextPage = () => {
	return (
		<Layout title="Games">
			<section className="min-h-screen py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white text-center">
				<h1 className="text-4xl mb-10 font-semibold font-heading">
					All <span className="text-purple-600">Games</span>
				</h1>
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
						{games.map((game, idx) => (
							<GamesCard
								key={idx}
								icon={game.icon}
								name={game.name}
								value={game.description}
								href={game.href}
								color={game.color}
							/>
						))}
					</div>
					<div className="pt-10">
						<Link href="/">
							<m.span
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{
									scale: 0.95,
								}}
								className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold round transition duration-200"
							>
								Go Home
							</m.span>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default GamesPage;
