import type { FC } from "react";
import type { IFramework } from "@libs/config";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import classNames from "classnames";
import Tilt from "react-parallax-tilt";

export interface IFrameworkCard {
	framework: IFramework;
}

export const FrameworkCard: FC<IFrameworkCard> = ({ framework }) => {
	const parser = useLocaleParser();

	return (
		<Tilt scale={1.05} tiltMaxAngleX={25} tiltMaxAngleY={25}>
			<div className="round mb-4 bg-gray-200 py-6 pl-6 pr-4 shadow-md dark:bg-gray-800 md:mb-8">
				<span
					className={classNames(
						"mb-4",
						"inline-block",
						"p-3",
						"round",
						framework.color,
					)}
				>
					<CustomImage
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
		</Tilt>
	);
};
