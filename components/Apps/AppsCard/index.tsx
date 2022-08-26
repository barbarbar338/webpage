import type { FC } from "react";
import type { IconType } from "react-icons";
import { Link } from "@components/Utils/Link";
import classnames from "classnames";

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
	const Icon = icon;

	return (
		<div>
			<Link href={href}>
				<div className="h-full cursor-pointer rounded-xl bg-gray-200 p-4 text-black dark:bg-gray-800 dark:text-white">
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
			</Link>
		</div>
	);
};
