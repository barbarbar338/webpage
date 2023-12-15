import { IStarredRepo } from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";
import { ProjectCard } from "./ProjectCard";

export interface IResumeProjects {
	repos: IStarredRepo[];
	pinned: IStarredRepo[];
}

export const ResumeProjects: FC<IResumeProjects> = ({ repos, pinned }) => {
	const parser = useLocaleParser();

	return (
		<section>
			<h2 className="mt-6 pb-1 text-2xl font-semibold">
				{parser.get("projects")}
			</h2>
			<div className="flex gap-x-10">
				<div className="w-1/2">
					<p
						className="border-b"
						dangerouslySetInnerHTML={{
							__html: parser.get("starred_repos"),
						}}
					/>
					<ul className="mt-1">
						{repos.map((repo, idx) => (
							<ProjectCard key={idx} {...repo} />
						))}
					</ul>
				</div>

				<div className="w-1/2">
					<p
						className="border-b"
						dangerouslySetInnerHTML={{
							__html: parser.get("pinned_repos"),
						}}
					/>
					<ul className="mt-1">
						{pinned.map((repo, idx) => (
							<ProjectCard key={idx} {...repo} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
