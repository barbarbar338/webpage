import type { CSSProperties, FC } from "react";
import classnames from "classnames";
import NextLink from "next/link";

export interface ILinkProps {
	href: string;
	className?: string;
	underline?: boolean;
	style?: CSSProperties;
}

export const Link: FC<ILinkProps> = ({
	href,
	children,
	className,
	underline,
	style,
}) =>
	href.startsWith("http") ? (
		<a
			style={style}
			href={href}
			rel="noreferrer"
			target="_blank"
			className={classnames({ "hover:underline": underline }, className)}
		>
			{children}
		</a>
	) : (
		<NextLink passHref href={href}>
			<span
				style={style}
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
