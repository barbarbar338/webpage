import type { IconType } from "react-icons";
import type { FC } from "react";
import Tilt from "react-tilt";
import { Tippy } from "@components/Tippy";
import { Link } from "@components/Link";
import classnames from "classnames";
import { useCopyToClipboard } from "react-use";
import { toast } from "react-toastify";

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
	const Icon = icon;

	const [, copyToClipboard] = useCopyToClipboard();

	const onCopy = () => {
		copyToClipboard(value);
		toast.success("✨ Account copied to clipboard!");
	};

	const Card: FC = () => (
		<div
			onClick={onCopy}
			className="cursor-pointer px-4 pt-4 bg-gray-200 dark:bg-gray-800 rounded-t-xl rounded-bl-xl h-full text-black dark:text-white"
		>
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
