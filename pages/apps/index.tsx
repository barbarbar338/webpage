import type { NextPage } from "next";
import { AppsCard } from "@components/Apps/AppsCard";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { Layout } from "@components/Layout";
import { FiBox, FiCrop, FiX } from "react-icons/fi";
import { FaBomb } from "react-icons/fa";

const AppsPage: NextPage = () => {
	const parser = useLocaleParser();

	const apps = [
		{
			name: parser.get("minesweeper"),
			description: parser.get("minesweeper_description"),
			icon: FaBomb,
			href: "/apps/minesweeper",
			color: "text-black",
		},
		{
			name: parser.get("tetris"),
			description: parser.get("tetris_description"),
			icon: FiBox,
			href: "/apps/tetris",
			color: "text-blue-500",
		},
		{
			name: parser.get("tic_tac_toe"),
			description: parser.get("tic_tac_toe_description"),
			icon: FiX,
			href: "/apps/tictactoe",
			color: "text-red-500",
		},
		{
			name: parser.get("overlay_creator"),
			description: parser.get("overlay_creator_description"),
			icon: FiCrop,
			href: "/apps/overlay-creator",
			color: "text-indigo-500",
		},
	];

	return (
		<Layout title={parser.get("apps")}>
			<section className="min-h-screen bg-white py-10 px-4 text-center text-black dark:bg-gray-900 dark:text-white">
				<h1
					className="mb-10 font-heading text-4xl font-semibold"
					dangerouslySetInnerHTML={{
						__html: parser.get("all_apps"),
					}}
				/>
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-3">
						{apps.map((app, idx) => (
							<AppsCard
								key={idx}
								icon={app.icon}
								name={app.name}
								value={app.description}
								href={app.href}
								color={app.color}
							/>
						))}
					</div>
					<div className="pt-10">
						<Link href="/">
							<span className="round mb-3 inline-block w-full bg-purple-600 py-2 px-6 font-semibold leading-loose text-white transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto">
								{parser.get("go_home")}
							</span>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AppsPage;
