import type { FC } from "react";
import { Footer } from "@components/Footer";
import { domAnimation, LazyMotion } from "framer-motion";
import { NextSeo } from "next-seo";

export interface ILayout {
	title: string;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	return (
		<div className="select-none">
			<NextSeo title={title} />
			<LazyMotion features={domAnimation}>
				{children}
				<Footer />
			</LazyMotion>
		</div>
	);
};
