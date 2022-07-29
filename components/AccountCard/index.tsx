import type { FC } from "react";
import type { IconType } from "react-icons";
import { useLocaleParser } from "@libs/localeParser";
import { Tippy } from "@components/Utils/Tippy";
import { Link } from "@components/Utils/Link";
import { useCopyToClipboard } from "react-use";
import { toast } from "react-toastify";
import Tilt from "react-parallax-tilt";
import classnames from "classnames";

export interface IAccountCardProps {
	icon: IconType;
	name: string;
	value: string;
	href?: string;
	color: string;
}

export const AccountCard: FC<IAccountCardProps> = ({
	href,
	icon,
	name,
	value,
	color,
}) => {
	const parser = useLocaleParser();

	const Icon = icon;

	const [, copyToClipboard] = useCopyToClipboard();

	const onCopy = () => {
		copyToClipboard(value);
		toast.success(parser.get("account_copied"));
	};

	const Card: FC = () => (
		<div
			onClick={onCopy}
			className="round h-full cursor-pointer bg-gray-200 px-4 pt-4 text-black dark:bg-gray-800 dark:text-white"
		>
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
