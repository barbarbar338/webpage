import NotFound from "@components/404";
import Layout from "@components/Layout";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
	return (
		<Layout title="404">
			<NotFound />
		</Layout>
	);
};

export default NotFoundPage;
