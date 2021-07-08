import type { FC } from "react";
import classnames from "classnames";
import NextLink from "next/link";

export interface ILinkProps {
	href: string;
	className?: string;
}

export const Link: FC<ILinkProps> = ({ href, children, className }) =>
	href.startsWith("http") ? (
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className={classnames("hover:underline", className)}
		>
			{children}
		</a>
	) : (
		<NextLink href={href}>
			<span
				className={classnames(
					"cursor-pointer",
					"hover:underline",
					className,
				)}
			>
				{children}
			</span>
		</NextLink>
	);
