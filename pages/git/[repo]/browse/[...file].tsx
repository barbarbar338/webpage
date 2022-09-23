import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "@components/Layout";
import { getFileContent, getRepo, IRepo } from "@libs/rest";
import { GitLayout } from "@components/Git/Layout";

export interface IBrowsePage {
	repo: IRepo;
	file: Buffer;
}

const BrowsePage: NextPage<IBrowsePage> = ({ repo, file }) => {
	return (
		<Layout title={`${repo.repo} - ${repo.branch}`}>
			<GitLayout repo={repo}>
				<pre>
					<code>{Buffer.from(file).toString()}</code>
				</pre>
			</GitLayout>
		</Layout>
	);
};

export default BrowsePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const repoParam = context.params.repo as string;
	const repo = await getRepo(repoParam);
	const path = (context.params.file as string[]).join("/");
	const fileContent = await getFileContent(repo.repo, path);

	return {
		props: {
			repo,
			file: fileContent,
		},
	};
};
