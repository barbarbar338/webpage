import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "@components/Layout";
import { getFileContent, getRepo, IRepo } from "@libs/rest";
import { GitLayout } from "@components/Git/Layout";
import { createRef, useEffect } from "react";
import hljs from "highlight.js";

export interface IBrowsePage {
	repo: IRepo;
	file: Buffer;
}

const BrowsePage: NextPage<IBrowsePage> = ({ repo, file }) => {
	const ref = createRef<HTMLDivElement>();
	useEffect(() => {
		const content = ref.current.innerHTML;
		const highlighted = hljs.highlightAuto(content).value;
		ref.current.innerHTML = `<pre>${highlighted}</pre>`;
	}, [ref]);

	return (
		<Layout title={`${repo.repo} - ${repo.branch}`}>
			<GitLayout repo={repo}>
				<div ref={ref}>{Buffer.from(file).toString()}</div>
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
