import Layout from "@components/Layout";
import Projects from "@components/Projects";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
	return (
		<Layout title="Projects">
			<Projects />
		</Layout>
	);
};

export default ProjectsPage;
