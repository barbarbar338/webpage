import classNames from "classnames";
import NextLink from "next/link";
import { FC } from "react";

export interface ILinkProps {
	href: string;
	className?: string;
}

export const Link: FC<ILinkProps> = ({ href, children, className }) =>
	href.startsWith("http") ? (
		<a href={href} rel="noreferrer" target="_blank" className={className}>
			{children}
		</a>
	) : (
		<NextLink href={href}>
			<span className={classNames("cursor-pointer", className)}>
				{children}
			</span>
		</NextLink>
	);
