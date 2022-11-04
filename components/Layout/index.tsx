import { DomainAlert } from "@components/Layout/DomainAlert";
import { Footer } from "@components/Layout/Footer";
import { GithubSponsorsAlert } from "@components/Layout/GithubSponsorsAlert";
import { Navbar } from "@components/Layout/Navbar";
import { CONFIG } from "@libs/config";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { type FC, type ReactNode } from "react";

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
				<div className="container mx-auto">
					<GithubSponsorsAlert />
					<DomainAlert />
				</div>
				{children}
				<Footer />
			</>
		</div>
	);
};
