import type { FC } from "react";
import Tilt from "react-tilt";
import { Tippy } from "@components/Utils/Tippy";
import { FiStar } from "react-icons/fi";
import { Link } from "@components/Utils/Link";
import { IStarredRepo } from "@libs/graphql";

export const RepoCard: FC<IStarredRepo> = ({
	name,
	primaryLanguage,
	stargazerCount,
	url,
	description,
}) => {
	return (
		<Tippy tooltip="Click Me!">
			<div>
				<Tilt
					className="Tilt"
					options={{
						max: 10,
						reverse: false,
						scale: 1.05,
					}}
				>
					<Link href={url}>
						<div className="p-4 bg-gray-200 dark:bg-gray-800 round h-full text-black dark:text-white">
							<div className="flex items-center space-x-1">
								<span className="flex-grow space-x-2 truncate text-purple-600 dark:text-purple-300">
									{name}
								</span>
								<div className="flex items-center space-x-1">
									<div className="flex items-center space-x-1">
										<span>{stargazerCount}</span>{" "}
										<FiStar className="w-6 h-6 text-yellow-600" />
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
										backgroundColor: primaryLanguage.color,
									}}
								></span>
								<p className="ml-1 mt-1 text-gray-600 dark:text-gray-400 text-xs">
									{primaryLanguage.name}
								</p>
							</div>
						</div>
					</Link>
				</Tilt>
			</div>
		</Tippy>
	);
};
