import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { getCommits, type ICommitsData } from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";

export interface IChangelogProps {
	commitsData: ICommitsData;
}

const ChangelogPage: NextPage<IChangelogProps> = ({ commitsData }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("changelog")}>
			<div className="min-h-screen leading-normal tracking-normal">
				<div className="container mx-auto w-full md:max-w-3xl">
					<div className="w-full text-xl leading-normal text-gray-800">
						<div className="font-sans">
							<h1 className="break-normal pb-2 pt-6 font-sans text-3xl font-bold text-black dark:text-white md:text-4xl">
								{parser.get("changelog")}
							</h1>
							<p className="text-sm font-normal text-gray-500 md:text-base">
								{parser.get("last_commit", {
									date: commitsData.latest,
								})}
							</p>
						</div>
						<div className="container prose text-black dark:text-white">
							<p
								dangerouslySetInnerHTML={{
									__html: parser.get(
										"changelog_description",
										{
											link: `<a rel="noreferrer" target="_blank" href="https://github.com/${
												CONFIG.SOURCE.username
											}/${
												CONFIG.SOURCE.repo
											}">${parser.get("here")}</a>`,
										},
									),
								}}
							/>
							<h2>{parser.get("last_30_commit")}</h2>
							<ul>
								{Object.keys(commitsData.commits).map(
									(date, idx) => {
										const commits =
											commitsData.commits[date];
										return (
											<li key={idx}>
												{date}
												<ul>
													{commits.map(
														(commit, idx) => (
															<li key={idx}>
																<Link
																	target="_blank"
																	href={
																		commit.commitUrl
																	}
																>
																	{
																		commit.message
																	}
																</Link>{" "}
																by{" "}
																{
																	commit
																		.author
																		.name
																}
															</li>
														),
													)}
												</ul>
											</li>
										);
									},
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ChangelogPage;

export const getStaticProps: GetStaticProps<IChangelogProps> = async () => {
	const commitsData = await getCommits();

	return {
		props: {
			commitsData,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
