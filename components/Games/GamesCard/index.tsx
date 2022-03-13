import type { IconType } from "react-icons";
import type { FC } from "react";
import Tilt from "react-tilt";
import { Tippy } from "@components/Utils/Tippy";
import { Link } from "@components/Utils/Link";
import classnames from "classnames";

export interface IGamesCardProps {
	icon: IconType;
	name: string;
	value: string;
	href: string;
	color: string;
}

export const GamesCard: FC<IGamesCardProps> = ({
	href,
	icon,
	name,
	value,
	color,
}) => {
	const Icon = icon;

	const Card: FC = () => (
		<div className="cursor-pointer px-4 pt-4 bg-gray-200 dark:bg-gray-800 round h-full text-black dark:text-white">
			<div className="flex items-center justify-center">
				<Icon className={classnames("text-6xl", color)} />
			</div>
			<span className="line-clamp-2 text-center h-12 text-xl">
				{name}
			</span>
			<span className="line-clamp-2 text-center h-12 text-lg">
				{value}
			</span>
		</div>
	);

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
					{href ? (
						<Link href={href}>
							<Card />
						</Link>
					) : (
						<Card />
					)}
				</Tilt>
			</div>
		</Tippy>
	);
};
