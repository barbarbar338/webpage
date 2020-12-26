import Sponsors from "@components/Sponsors";
import Layout from "@components/Layout";
import { NextPage } from "next";

const SponsorsPage: NextPage = () => {
	return (
		<Layout title="❤ Sponsors ❤">
			<Sponsors />
		</Layout>
	);
};

export default SponsorsPage;
