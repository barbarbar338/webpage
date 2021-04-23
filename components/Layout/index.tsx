import { Footer } from "@components/Footer";
import { NextSeo } from "next-seo";
import { FC } from "react";

export interface ILayout {
	title: string;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	return (
		<div className="select-none">
			<NextSeo title={title} />
			{children}
			<Footer />
		</div>
	);
};
