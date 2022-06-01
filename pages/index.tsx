import type { GetStaticProps, NextPage } from "next";
import { useLocaleParser } from "@libs/localeParser";
import { Projects } from "@components/Home/Projects";
import { Contact } from "@components/Home/Contact";
import { About } from "@components/Home/About";
import { Hero } from "@components/Home/Hero";
import { Layout } from "@components/Layout";
import {
	getMostStarredRepos,
	getPinnedRepos,
	IStarredRepo,
} from "@libs/graphql";
import { CONFIG } from "@libs/config";

export interface IIndexPage {
	repos: IStarredRepo[];
	pinned: IStarredRepo[];
}

const IndexPage: NextPage<IIndexPage> = ({ repos, pinned }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("home") as string}>
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
