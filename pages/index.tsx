import { Navbar } from "@components/Navbar";
import { NextPage } from "next";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Layout } from "@components/Layout";
import { Contact } from "@components/Contact";
import { Projects } from "@components/Projects";
import axios from "axios";

export interface IIndexPage {
	repos: any;
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

IndexPage.getInitialProps = async (ctx) => {
	const res = (
		await axios.get(
			"https://api.github.com/users/barbarbar338/repos?per_page=100",
		)
	).data;
	const repos = res
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.slice(0, 12);
	return { repos };
};

export default IndexPage;
