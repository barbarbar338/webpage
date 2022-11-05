import { GitLayout } from "@components/Git/Layout";
import { Layout } from "@components/Layout";
import { handleTreeData } from "@libs/handleTreeData";
import { getRepo, IRepo } from "@libs/rest";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { FC } from "react";

const FolderTree = dynamic(() => import("react-folder-tree"), {
	ssr: false,
}) as FC<{ [key: string]: unknown }>;

export interface IRepoPage {
	repo: IRepo;
}

const RepoPage: NextPage<IRepoPage> = ({ repo }) => {
	const router = useRouter();
	const state = handleTreeData(repo);

	// see @types/global.d.ts
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onNameClick = ({ nodeData }: any) => {
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

export const getServerSideProps: GetServerSideProps<IRepoPage> = async (
	ctx,
) => {
	const repoParam = ctx.params?.repo;
	if (!repoParam)
		return {
			notFound: true,
		};

	const repo = await getRepo(
		typeof repoParam === "string" ? repoParam : repoParam[0],
	);

	return {
		props: {
			repo,
		},
	};
};
