import { useLocaleParser } from "@libs/localeParser";
import classnames from "classnames";
import Link from "next/link";
import type { FC } from "react";
import type { IconType } from "react-icons/lib";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "react-use";

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
			<span className="line-clamp-2 h-12 text-center text-xl">
				{name}
			</span>
			<span className="line-clamp-2 h-12 text-center text-lg">
				{value}
			</span>
		</div>
	);

	return (
		<div>
			{href ? (
				<Link href={href} target="_blank">
					<Card />
				</Link>
			) : (
				<Card />
			)}
		</div>
	);
};
