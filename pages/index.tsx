import { Navbar } from "@components/Navbar";
import { GetStaticPropsResult, NextPage } from "next";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Layout } from "@components/Layout";
import { Contact } from "@components/Contact";
import { Projects } from "@components/Projects";
import { IRepoCard } from "@components/RepoCard";
import axios from "axios";
import { CONFIG } from "@libs/config";

export interface IIndexPage {
	repos: IRepoCard[];
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
	const res = (
		await axios.get(
			`https://api.github.com/users/${CONFIG.GITHUB_USERNAME}/repos?per_page=100`,
		)
	).data as IRepoCard[];
	const repos = res
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.slice(0, 15);
	return {
		props: {
			repos,
		},
		revalidate: 60 * 15,
	};
}
