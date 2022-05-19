import type { FC, JSXElementConstructor, ReactElement, ReactNode } from "react";
import TippyJS from "@tippyjs/react";

export interface ITippyProps {
	tooltip: string;
	children: ReactNode;
}

export const Tippy: FC<ITippyProps> = ({ children, tooltip }) => {
	return (
		<TippyJS content={tooltip}>
			{
				children as ReactElement<
					never,
					string | JSXElementConstructor<never>
				>
			}
		</TippyJS>
	);
};
