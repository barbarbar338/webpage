/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { CONFIG } from "@libs/config";
import moment from "moment";

export const apollo = new ApolloClient({
	uri: "https://api.github.com/graphql",
	cache: new InMemoryCache(),
	headers: {
		"GraphQL-Features": "discussions_api",
		Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
	},
});

export interface IAuthor {
	login: string;
	avatarUrl: string;
}

export interface ILabel {
	name: string;
	color: string;
	id: string;
}

export interface IPost {
	title: string;
	id: string;
	number: number;
	createdAt: string;
	author: IAuthor;
	labels: ILabel[];
	body: string;
}

export interface IStarredRepo {
	name: string;
	url: string;
	stargazerCount: number;
	description: string;
	primaryLanguage: {
		name: string;
		color: string;
	};
}

export interface IPostData {
	title: string;
	author: IAuthor;
	bodyHTML: string;
	createdAt: string;
	labels: ILabel[];
	number: number;
}

export interface ICommitAuthor {
	name: string;
}

export interface ICommit {
	message: string;
	committedDate: string;
	author: ICommitAuthor;
	commitUrl: string;
}

export interface ICommitsData {
	commits: { [key: string]: ICommit[] };
	latest: string;
}

export const getPostData = async (no: number): Promise<IPostData> => {
	const { data } = await apollo.query({
		query: gql`
			{
				repository(owner: "${CONFIG.BLOG.discussions.username}", name: "${CONFIG.BLOG.discussions.repo}") {
					discussion(number: ${no}) {
						title
						author {
							login
							avatarUrl
						}
						bodyHTML
						createdAt
						number
						labels(first: 3) {
							edges {
								node {
									color
									id
									name
								}
							}
						}
					}
				}
			}
		`,
	});

	const labels: ILabel[] = data.repository.discussion.labels.edges.map(
		(l: any) => {
			return {
				color: l.node.color,
				name: l.node.name,
				id: l.node.id,
			} as ILabel;
		},
	);

	const post: IPostData = {
		title: data.repository.discussion.title,
		bodyHTML: data.repository.discussion.bodyHTML,
		createdAt: moment(data.repository.discussion.createdAt).calendar(),
		author: data.repository.discussion.author,
		labels,
		number: data.repository.discussion.number,
	};

	return post;
};

export interface ISponsor {
	name?: string;
	login: string;
	avatarUrl: string;
	tier: string;
	isOneTime: boolean;
}

export const getSponsors = async (): Promise<ISponsor[]> => {
	const { data } = await apollo.query({
		query: gql`
			{
				user(login: "${CONFIG.GITHUB_USERNAME}") {
					sponsorshipsAsMaintainer(first: 100) {
						nodes {
							privacyLevel
							isOneTimePayment
							tier {
								monthlyPriceInDollars
							}
							sponsorEntity {
								... on User {
									name
									login
									avatarUrl
								}
							}
						}
					}
				}
			}
		`,
	});

	const sponsors: ISponsor[] = data.user.sponsorshipsAsMaintainer.nodes
		.filter((node: any) => node.privacyLevel == "PUBLIC")
		.map((node: any) => ({
			name: node.sponsorEntity.name,
			login: node.sponsorEntity.login,
			avatarUrl: node.sponsorEntity.avatarUrl,
			tier: node.tier.monthlyPriceInDollars,
			isOneTime: node.isOneTimePayment,
		}));

	return sponsors;
};

export const getPinnedRepos = async (): Promise<IStarredRepo[]> => {
	const { data } = await apollo.query({
		query: gql`
			{
				user(login: "${CONFIG.BLOG.discussions.username}") {
					pinnedItems(first: 6, types: REPOSITORY) {
						nodes {
							... on Repository {
								name
								url
								stargazerCount
								primaryLanguage {
									name
									color
								}
								description
							}
						}
					}
				}
			}
		`,
	});

	const repos: IStarredRepo[] = data.user.pinnedItems.nodes.map((r: any) => {
		return {
			description: r.description,
			name: r.name,
			primaryLanguage: r.primaryLanguage,
			stargazerCount: r.stargazerCount,
			url: r.url,
		} as IStarredRepo;
	});

	return repos;
};

export const getMostStarredRepos = async (): Promise<IStarredRepo[]> => {
	const { data } = await apollo.query({
		query: gql`
			{
				user(login: "${CONFIG.BLOG.discussions.username}") {
					repositories(
						first: 6
						orderBy: { field: STARGAZERS, direction: DESC }
					) {
						edges {
							node {
								name
								url
								stargazerCount
								primaryLanguage {
									name
									color
								}
								description
							}
						}
					}
				}
			}
		`,
	});

	const repos: IStarredRepo[] = data.user.repositories.edges.map((r: any) => {
		return {
			description: r.node.description,
			name: r.node.name,
			primaryLanguage: r.node.primaryLanguage,
			stargazerCount: r.node.stargazerCount,
			url: r.node.url,
		} as IStarredRepo;
	});

	return repos;
};

export const getCategories = async (): Promise<ILabel[]> => {
	const { data } = await apollo.query({
		query: gql`
			{
				repository(owner: "${CONFIG.BLOG.discussions.username}", name: "${CONFIG.BLOG.discussions.repo}") {
					labels(first: 20) {
                        edges {
                            node {
                                color
                                name
                                id
                            }
                        }
                    }
				}
			}
		`,
	});

	const labels: ILabel[] = data.repository.labels.edges.map((l: any) => {
		return {
			color: l.node.color,
			name: l.node.name,
			id: l.node.id,
		} as ILabel;
	});

	return labels;
};

export const getPosts = async (): Promise<IPost[]> => {
	const { data } = await apollo.query({
		query: gql`
			{
				repository(owner: "${CONFIG.BLOG.discussions.username}", name: "${CONFIG.BLOG.discussions.repo}") {
					discussions(first: 100, orderBy: { direction: DESC, field: CREATED_AT }) {
						edges {
							node {
								title
								id
								createdAt
								number
								body
								author {
									avatarUrl
									login
								}
								labels(first: 3) {
									edges {
										node {
											name
											color
											id
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	});

	const posts: IPost[] = data.repository.discussions.edges.map((e: any) => {
		const labels: ILabel[] = e.node.labels.edges.map((l: any) => {
			return {
				color: l.node.color,
				name: l.node.name,
				id: l.node.id,
			} as ILabel;
		});

		return {
			title: e.node.title,
			author: e.node.author,
			id: e.node.id,
			createdAt: moment(e.node.createdAt).calendar(),
			labels,
			number: e.node.number,
			body: e.node.body,
		} as IPost;
	});

	return posts;
};

export const getPinnedPosts = async (): Promise<IPost[]> => {
	const { data } = await apollo.query({
		query: gql`
			{
				repository(owner: "${CONFIG.BLOG.discussions.username}", name: "${CONFIG.BLOG.discussions.repo}") {
					pinnedDiscussions(first: 10) {
						edges {
							node {
								discussion {
									title
									id
									createdAt
									number
									body
									author {
										avatarUrl
										login
									}
									labels(first: 3) {
										edges {
											node {
												name
												color
                                                id
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	});

	const posts: IPost[] = data.repository.pinnedDiscussions.edges.map(
		(e: any) => {
			const labels: ILabel[] = e.node.discussion.labels.edges.map(
				(l: any) => {
					return {
						color: l.node.color,
						name: l.node.name,
						id: l.node.id,
					} as ILabel;
				},
			);

			return {
				title: e.node.discussion.title,
				author: e.node.discussion.author,
				id: e.node.discussion.id,
				createdAt: moment(e.node.discussion.createdAt).calendar(),
				labels,
				number: e.node.discussion.number,
				body: e.node.discussion.body,
			} as IPost;
		},
	);

	return posts;
};

export const getCommits = async (): Promise<ICommitsData> => {
	const { data } = await apollo.query({
		query: gql`
			{
				repository(owner: "${CONFIG.BLOG.discussions.username}", name: "${CONFIG.BLOG.discussions.repo}") {
					defaultBranchRef {
						target {
							... on Commit {
								history(first: 100) {
									edges {
										node {
											... on Commit {
												message
												committedDate
												author {
													name
												}
												commitUrl
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	});

	const commitsData: ICommitsData = {
		commits: {},
		latest: "Unknown",
	};

	data.repository.defaultBranchRef.target.history.edges.map((c: any) => {
		const commitDate = moment(c.node.committedDate);
		if (!commitsData.commits[commitDate.format("YYYY-MM-DD")])
			commitsData.commits[commitDate.format("YYYY-MM-DD")] =
				[] as ICommit[];

		commitsData.commits[commitDate.format("YYYY-MM-DD")].push({
			message: c.node.message,
			committedDate: commitDate.calendar(),
			commitUrl: c.node.commitUrl,
			author: {
				name: c.node.author.name,
			},
		} as ICommit);
	});

	commitsData.latest =
		commitsData.commits[
			Object.keys(commitsData.commits)[0]
		][0].committedDate;

	return commitsData;
};
