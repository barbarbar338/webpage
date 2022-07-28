import { type FC, type ReactNode } from "react";
import { DomainAlert } from "@components/Layout/DomainAlert";
import { Footer } from "@components/Layout/Footer";
import { Navbar } from "@components/Layout/Navbar";
import { CONFIG } from "@libs/config";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export interface ILayout {
	title: string;
	children: ReactNode;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	const router = useRouter();

	return (
		<div className="select-none">
			<NextSeo
				title={title}
				canonical={`${CONFIG.SEO.publishDomain}${router.pathname}`}
			/>
			<>
				<Navbar />
				<DomainAlert />				
				{children}
				<Footer />
			</>
		</div>
	);
};
