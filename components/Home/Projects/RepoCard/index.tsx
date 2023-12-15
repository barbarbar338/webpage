import type { IStarredRepo } from "@libs/graphql";
import Link from "next/link";
import type { FC } from "react";
import { FiStar } from "react-icons/fi";

export const RepoCard: FC<IStarredRepo> = ({
	name,
	primaryLanguage,
	stargazerCount,
	url,
	description,
}) => {
	return (
		<Link
			href={url}
			target="_blank"
			className="h-full cursor-pointer rounded-xl bg-gray-200 p-4 text-black dark:bg-gray-800 dark:text-white"
		>
			<div className="flex items-center space-x-1">
				<span className="flex-grow space-x-2 truncate text-purple-600 dark:text-purple-300">
					{name}
				</span>
				<div className="flex items-center space-x-1">
					<div className="flex items-center space-x-1">
						<span>{stargazerCount}</span>{" "}
						<FiStar className="h-6 w-6 text-yellow-600" />
					</div>
				</div>
			</div>
			<p className="line-clamp-2 h-12 text-base">{description}</p>
			<div className="mt-3 flex">
				<span
					className="mt-1 block h-4 w-4 rounded-full bg-gray-400"
					style={{
						backgroundColor: primaryLanguage?.color || "black",
					}}
				></span>
				<p className="ml-1 mt-1 text-xs text-gray-600 dark:text-gray-400">
					{primaryLanguage?.name || "N/A"}
				</p>
			</div>
		</Link>
	);
};
