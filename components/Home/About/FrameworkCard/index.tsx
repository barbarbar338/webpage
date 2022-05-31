import type { FC } from "react";
import type { IFramework } from "@libs/config";
import { CustomImage } from "@components/Utils/CustomImage";
import classNames from "classnames";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";
export interface IFrameworkCard {
	framework: IFramework;
}

export const FrameworkCard: FC<IFrameworkCard> = ({ framework }) => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
	<Tilt scale={1.05} tiltMaxAngleX={25} tiltMaxAngleY={25}>
		<div className="mb-4 md:mb-8 py-6 pl-6 pr-4 shadow-md round bg-gray-200 dark:bg-gray-800">
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
					className="w-10 h-10"
					alt={framework.name}
				/>
			</span>
			<h3 className="mb-2 text-xl sm:text-2xl font-bold font-heading text-black dark:text-white">
				{framework.name}
			</h3>
			<p className="text-gray-700 dark:text-gray-300 leading-loose">
				{parser.get("framework_year", {
					experience: framework.experience.toString()
				})}
			</p>
		</div>
	</Tilt>
)}
