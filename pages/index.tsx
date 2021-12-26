import type { GetStaticProps, NextPage } from "next";
import { Navbar } from "@components/Navbar";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Layout } from "@components/Layout";
import { Contact } from "@components/Contact";
import { Projects } from "@components/Projects";
import { getMostStarredRepos, IStarredRepo } from "@libs/graphql";
import { CONFIG } from "@libs/config";

export interface IIndexPage {
	repos: IStarredRepo[];
}

const IndexPage: NextPage<IIndexPage> = ({ repos }) => {
	return (
		<Layout title="Home">
			<Hero />
			<About />
			<Projects repos={repos} />
			<Contact />
		</Layout>
	);
};

export default IndexPage;

export const getStaticProps: GetStaticProps<IIndexPage> = async () => {
	const repos = await getMostStarredRepos();

	return {
		props: {
			repos,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
