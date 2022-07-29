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
			className="min-h-screen bg-white py-10 px-4 text-black dark:bg-gray-900 dark:text-white"
		>
			<h1
				className="mb-10 text-center font-heading text-4xl font-semibold"
				dangerouslySetInnerHTML={{
					__html: parser.get("starred_repos"),
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
				className="mb-10 text-center font-heading text-4xl font-semibold"
				dangerouslySetInnerHTML={{
					__html: parser.get("pinned_repos"),
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
