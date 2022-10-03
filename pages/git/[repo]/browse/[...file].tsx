import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { getFileContent, getRepo, IRepo } from "@libs/rest";
import { GitLayout } from "@components/Git/Layout";
import { Layout } from "@components/Layout";
import hljs from "highlight.js";

export interface IBrowsePage {
	repo: IRepo;
	file: Buffer;
}

const BrowsePage: NextPage<IBrowsePage> = ({ repo, file }) => {
	const content = file ? Buffer.from(file).toString() : "?";

	useEffect(() => {
		const contentDiv = document.getElementById("content") as HTMLDivElement;
		const highlighted = hljs.highlightAuto(content).value;
		contentDiv.innerHTML = `<pre>${highlighted}</pre>`;
	}, [content]);

	return (
		<Layout title={`${repo.repo} - ${repo.branch}`}>
			<GitLayout repo={repo}>
				<div id="content" className="overflow-auto">
					{content}
				</div>
			</GitLayout>
		</Layout>
	);
};

export default BrowsePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const repoParam = context.params.repo as string;
	const repo = await getRepo(repoParam);
	const path = context.params.file;
	const fileContent = await getFileContent(repo.repo, path);

	return {
		props: {
			repo,
			file: fileContent || null,
		},
	};
};
