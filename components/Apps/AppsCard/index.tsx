import type { FC } from "react";
import type { IconType } from "react-icons";
import { useLocaleParser } from "@libs/localeParser";
import { Tippy } from "@components/Utils/Tippy";
import { Link } from "@components/Utils/Link";
import classnames from "classnames";
import Tilt from "react-parallax-tilt";

export interface IAppsCardProps {
	icon: IconType;
	name: string;
	value: string;
	href: string;
	color: string;
}

export const AppsCard: FC<IAppsCardProps> = ({
	href,
	icon,
	name,
	value,
	color,
}) => {
	const parser = useLocaleParser();

	const Icon = icon;

	const Card: FC = () => (
		<div className="round h-full cursor-pointer bg-gray-200 p-4 text-black dark:bg-gray-800 dark:text-white">
			<div className="flex items-center justify-center">
				<Icon className={classnames("text-6xl", color)} />
			</div>
			<span className="h-12 text-center text-xl line-clamp-2">
				{name}
			</span>
			<span className="h-12 text-center text-lg line-clamp-2">
				{value}
			</span>
		</div>
	);

	return (
		<Tippy tooltip={parser.get("click_me")}>
			<div>
				<Tilt scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
					<Link href={href}>
						<Card />
					</Link>
				</Tilt>
			</div>
		</Tippy>
	);
};
