import type { GetStaticProps, NextPage } from "next";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { getCommits, ICommitsData } from "@libs/graphql";
import { Link } from "@components/Utils/Link";
import { m } from "framer-motion";

export interface IChangelogProps {
	commitsData: ICommitsData;
}

const ChangelogPage: NextPage<IChangelogProps> = ({ commitsData }) => {
	return (
		<Layout title="Changelog">
			<div className="leading-normal tracking-normal min-h-screen">
				<div className="container w-full md:max-w-3xl mx-auto">
					<div className="w-full text-xl text-gray-800 leading-normal">
						<div className="font-sans">
							<h1 className="font-bold font-sans break-normal text-black dark:text-white pt-6 pb-2 text-3xl md:text-4xl">
								Changelog
							</h1>
							<p className="text-sm md:text-base font-normal text-gray-500">
								Last commit: {commitsData.latest}
							</p>
						</div>
						<div className="container text-black dark:text-white prose">
							<p>
								The changelog below displays the thirty most
								recent commits for this website. Click{" "}
								<Link
									href={`https://github.com/${CONFIG.BLOG.discussions.username}/${CONFIG.BLOG.discussions.repo}`}
								>
									here
								</Link>{" "}
								if you want to learn more information about this
								website.
							</p>
							<h2>Last 30 commits:</h2>
							<m.ul
								variants={CONFIG.VARIANTS.container}
								initial="hidden"
								animate="visible"
							>
								{Object.keys(commitsData.commits).map(
									(date, idx) => {
										const commits =
											commitsData.commits[date];
										return (
											<m.li
												variants={CONFIG.VARIANTS.item}
												key={idx}
											>
												{date}
												<m.ul
													variants={
														CONFIG.VARIANTS
															.container
													}
													initial="hidden"
													animate="visible"
												>
													{commits.map(
														(commit, idx) => (
															<m.li
																variants={
																	CONFIG
																		.VARIANTS
																		.item
																}
																key={idx}
															>
																<Link
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
															</m.li>
														),
													)}
												</m.ul>
											</m.li>
										);
									},
								)}
							</m.ul>
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
