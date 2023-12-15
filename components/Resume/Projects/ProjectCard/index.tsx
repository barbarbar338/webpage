import { IStarredRepo } from "@libs/graphql";
import Link from "next/link";
import { FC } from "react";

export const ProjectCard: FC<IStarredRepo> = ({
	description,
	name,
	primaryLanguage,
	stargazerCount,
	url,
}) => (
	<li className="py-2">
		<div className="my-1 flex justify-between">
			<Link href={url} target="_blank">
				<strong>{name}</strong>
			</Link>
			<p className="flex">
				<span className="ml-1 rounded bg-gray-600 bg-yellow-700 px-2 py-1 text-xs text-white">
					{stargazerCount}
				</span>
				<span
					className="ml-1 rounded px-2 py-1 text-xs text-white"
					style={{
						backgroundColor: primaryLanguage?.color || "black",
					}}
				>
					{primaryLanguage?.name || "N/A"}
				</span>
			</p>
		</div>
		<p className="text-xs">{description}</p>
	</li>
);
