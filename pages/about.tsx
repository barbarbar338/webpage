import About from "@components/About";
import Layout from "@components/Layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
	return (
		<Layout title="About Me">
			<About />
		</Layout>
	);
};

export default AboutPage;
