import type { GetStaticProps, NextPage } from "next";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { getRepos } from "@libs/rest";
import Link from "next/link";

export interface IGitPage {
	repos: string[];
}

const GitPage: NextPage<IGitPage> = ({ repos }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("repos")}>
			<div className="min-h-screen leading-normal tracking-normal">
				<div className="container mx-auto w-full md:max-w-3xl">
					<div className="w-full text-xl leading-normal text-gray-800">
						<div className="font-sans">
							<h1 className="break-normal pt-6 pb-2 font-sans text-3xl font-bold text-black dark:text-white md:text-4xl">
								<Link
									href="/git"
									className="cursor-pointer text-purple-600 hover:text-purple-500 hover:underline"
								>
									{parser.get("repos")}
								</Link>
							</h1>
						</div>
						<div className="container prose text-black dark:text-white">
							<p>{parser.get("repos_description")}</p>
							<ul>
								{repos.map((repo, idx) => (
									<li key={idx}>
										<Link
											href={`/git/${repo}`}
											className="cursor-pointer text-purple-600 hover:text-purple-500 hover:underline"
										>
											{repo}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default GitPage;

export const getStaticProps: GetStaticProps<IGitPage> = async () => {
	const repos = await getRepos();

	return {
		props: {
			repos,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
