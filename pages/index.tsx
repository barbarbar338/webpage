import { About } from "@components/Home/About";
import { Contact } from "@components/Home/Contact";
import { Hero } from "@components/Home/Hero";
import { Projects } from "@components/Home/Projects";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import {
	getMostStarredRepos,
	getPinnedRepos,
	IStarredRepo,
} from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import type { GetStaticProps, NextPage } from "next";

export interface IIndexPage {
	repos: IStarredRepo[];
	pinned: IStarredRepo[];
}

const IndexPage: NextPage<IIndexPage> = ({ repos, pinned }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("home_title")}>
			<Hero />
			<About />
			<Projects repos={repos} pinned={pinned} />
			<Contact />
		</Layout>
	);
};

export default IndexPage;

export const getStaticProps: GetStaticProps<IIndexPage> = async () => {
	const repos = await getMostStarredRepos();
	const pinned = await getPinnedRepos();

	return {
		props: {
			repos,
			pinned,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
