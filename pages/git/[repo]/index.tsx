import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { getRepo, getRepos, IRepo } from "@libs/rest";
import dynamic from "next/dynamic";
import { handleTreeData } from "@libs/handleTreeData";
import { FC } from "react";
import { useRouter } from "next/router";
import { GitLayout } from "@components/Git/Layout";

const FolderTree = dynamic(() => import("react-folder-tree"), {
	ssr: false,
}) as FC<{ [key: string]: unknown }>;

export interface IRepoPage {
	repo: IRepo;
}

const RepoPage: NextPage<IRepoPage> = ({ repo }) => {
	const router = useRouter();
	const state = handleTreeData(repo);

	const onNameClick = ({ nodeData }) => {
		if (!nodeData.url) return;
		router.push(nodeData.url);
	};

	return (
		<Layout title={`${repo.repo} - ${repo.branch}`}>
			<GitLayout repo={repo}>
				<FolderTree
					data={state}
					showCheckbox={false}
					readOnly
					initOpenStatus="closed"
					onNameClick={onNameClick}
				/>
			</GitLayout>
		</Layout>
	);
};

export default RepoPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const repos = await getRepos();
	const paths = repos.map((post) => ({
		params: { repo: post },
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps<IRepoPage> = async (ctx) => {
	const repoParam = ctx.params.repo;
	const repo = await getRepo(
		typeof repoParam === "string" ? repoParam : repoParam[0],
	);

	return {
		props: {
			repo,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
