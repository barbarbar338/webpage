import type { FC } from "react";
import type { IconType } from "react-icons/lib";
import { useLocaleParser } from "@libs/localeParser";
import { useCopyToClipboard } from "react-use";
import { toast } from "react-toastify";
import classnames from "classnames";
import Link from "next/link";

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
			className="h-full cursor-pointer rounded-xl bg-gray-200 px-4 pt-4 text-black dark:bg-gray-800 dark:text-white"
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
		<div>
			{href ? (
				<Link className="cursor-pointer" href={href}>
					<Card />
				</Link>
			) : (
				<Card />
			)}
		</div>
	);
};
