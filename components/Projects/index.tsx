import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import colors from "@assets/colors.json";
import Tilt from "react-tilt";
import Tippy from "@tippyjs/react";

export interface IRepoCard {
	html_url: string;
	name: string;
	stargazers_count: number;
	language: string;
	description: string;
}

const RepoCard: FC<IRepoCard> = ({
	html_url,
	name,
	stargazers_count,
	language,
	description,
}) => {
	return (
		<Tippy content="Click Me!">
			<div>
				<Tilt
					className="Tilt"
					options={{
						max: 10,
						reverse: false,
						scale: 1.05,
					}}
				>
					<a href={html_url} target="_blank" rel="noreferrer">
						<div className="cursor-pointer p-4 bg-gray-200 dark:bg-gray-700 rounded-lg h-full text-black dark:text-white">
							<div className="flex items-center space-x-1">
								<span className="flex-grow space-x-2 truncate text-purple-600 dark:text-purple-300">
									{name}
								</span>
								<div className="flex items-center space-x-1">
									<div className="flex items-center space-x-1">
										<span>{stargazers_count}</span>{" "}
										<FontAwesomeIcon
											icon={faStar}
											className="w-6 h-6 text-yellow-600"
										/>
									</div>
								</div>
							</div>
							<p className="line-clamp-2 text-base h-12">
								{description}
							</p>
							<div className="flex mt-3">
								<span
									className="mt-1 block h-4 w-4 bg-gray-400 rounded-full"
									style={{
										backgroundColor: colors[language].color,
									}}
								></span>
								<p className="ml-1 mt-1 text-gray-600 dark:text-gray-400 text-xs">
									{language}
								</p>
							</div>
						</div>
					</a>
				</Tilt>
			</div>
		</Tippy>
	);
};

export interface IProjects {
	repos: any;
}

export const Projects: FC<IProjects> = ({ repos }) => {
	return (
		<section
			id="projects"
			className="min-h-screen py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white"
		>
			<h1 className="text-4xl mb-10 text-center font-semibold font-heading">
				Most <span className="text-purple-600">Starred</span> Repos
			</h1>
			<div className="container mx-auto mb-12">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{repos.map((repo, idx) => (
						<RepoCard
							{...{
								key: idx,
								...repo,
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
