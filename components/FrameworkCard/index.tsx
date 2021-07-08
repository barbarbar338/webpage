import type { IFramework } from "@libs/config";
import type { FC } from "react";
import Tilt from "react-tilt";
import classNames from "classnames";
import { CustomImage } from "@components/CustomImage";
export interface IFrameworkCard {
	framework: IFramework;
}

export const FrameworkCard: FC<IFrameworkCard> = ({ framework }) => (
	<Tilt
		className="Tilt"
		options={{
			max: 25,
			reverse: false,
			scale: 1.05,
		}}
	>
		<div className="mb-4 md:mb-8 py-6 pl-6 pr-4 shadow-md rounded bg-gray-200 dark:bg-gray-800">
			<span
				className={classNames(
					"mb-4",
					"inline-block",
					"p-3",
					"rounded-lg",
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
				About {framework.experience} year(s)
			</p>
		</div>
	</Tilt>
);
