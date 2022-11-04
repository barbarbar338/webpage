import type { IFramework } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { shimmer } from "@libs/shimmer";
import classNames from "classnames";
import Image from "next/image";
import type { FC } from "react";

export interface IFrameworkCard {
	framework: IFramework;
}

export const FrameworkCard: FC<IFrameworkCard> = ({ framework }) => {
	const parser = useLocaleParser();

	return (
		<div className="mb-4 rounded-xl bg-gray-200 py-6 pl-6 pr-4 shadow-md dark:bg-gray-800 md:mb-8">
			<span
				className={classNames(
					"mb-4 inline-block rounded-xl p-3",
					framework.color,
				)}
			>
				<Image
					placeholder="blur"
					blurDataURL={shimmer(32, 32)}
					width={32}
					height={32}
					src={framework.icon}
					className="h-10 w-10"
					alt={framework.name}
				/>
			</span>
			<h3 className="mb-2 font-heading text-xl font-bold text-black dark:text-white sm:text-2xl">
				{framework.name}
			</h3>
			<p className="leading-loose text-gray-700 dark:text-gray-300">
				{parser.get("framework_year", {
					experience: framework.experience.toString(),
				})}
			</p>
		</div>
	);
};
