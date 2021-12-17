import type { GetStaticPropsResult, NextPage } from "next";
import { Navbar } from "@components/Navbar";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Layout } from "@components/Layout";
import { Contact } from "@components/Contact";
import { Projects } from "@components/Projects";
import { CONFIG } from "@libs/config";
import { getMostStarredRepos, IStarredRepo } from "@libs/graphql";

export interface IIndexPage {
	repos: IStarredRepo[];
}

const IndexPage: NextPage<IIndexPage> = ({ repos }) => {
	return (
		<Layout title="Home">
			<Navbar />
			<Hero />
			<About />
			<Projects repos={repos} />
			<Contact />
		</Layout>
	);
};

export default IndexPage;

export async function getStaticProps(): Promise<
	GetStaticPropsResult<IIndexPage>
> {
	if (CONFIG.DEV)
		return {
			props: {
				repos: [
					{
						description: "Example description",
						url: "https://github.com/barbarbar338/webpage",
						primaryLanguage: {
							name: "Go",
							color: "#375eab",
						},
						name: "Example Repo",
						stargazerCount: 999,
					},
				],
			},
		};

	const repos = await getMostStarredRepos();

	return {
		props: {
			repos,
		},
		revalidate: 60 * 15,
	};
}
