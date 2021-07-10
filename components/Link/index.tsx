import type { FC } from "react";
import classnames from "classnames";
import NextLink from "next/link";

export interface ILinkProps {
	href: string;
	className?: string;
	underline: boolean;
}

export const Link: FC<ILinkProps> = ({
	href,
	children,
	className,
	underline,
}) =>
	href.startsWith("http") ? (
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className={classnames({ "hover:underline": underline }, className)}
		>
			{children}
		</a>
	) : (
		<NextLink href={href}>
			<span
				className={classnames(
					"cursor-pointer",
					{ "hover:underline": underline },
					className,
				)}
			>
				{children}
			</span>
		</NextLink>
	);
