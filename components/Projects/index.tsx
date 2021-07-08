import type { FC } from "react";
import type { IRepoCard } from "@components/RepoCard";
import { RepoCard } from "@components/RepoCard";

export interface IProjects {
	repos: IRepoCard[];
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
						<RepoCard key={idx} {...repo} />
					))}
				</div>
			</div>
		</section>
	);
};
