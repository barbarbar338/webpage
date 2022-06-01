import type { FC } from "react";
import type { IStarredRepo } from "@libs/graphql";
import { RepoCard } from "@components/Home/Projects/RepoCard";
import { useLocaleParser } from "@libs/localeParser";

export interface IProjects {
	repos: IStarredRepo[];
	pinned: IStarredRepo[];
}

export const Projects: FC<IProjects> = ({ repos, pinned }) => {
	const parser = useLocaleParser();

	return (
		<section
			id="projects"
			className="min-h-screen py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white"
		>
			<h1
				className="text-4xl mb-10 text-center font-semibold font-heading"
				dangerouslySetInnerHTML={{
					__html: parser.get("starred_repos") as string,
				}}
			/>
			<div className="container mx-auto mb-12">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{repos.map((repo, idx) => (
						<RepoCard key={idx} {...repo} />
					))}
				</div>
			</div>
			<h1
				className="text-4xl mb-10 text-center font-semibold font-heading"
				dangerouslySetInnerHTML={{
					__html: parser.get("pinned_repos") as string,
				}}
			/>
			<div className="container mx-auto mb-12">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{pinned.map((repo, idx) => (
						<RepoCard key={idx} {...repo} />
					))}
				</div>
			</div>
		</section>
	);
};
