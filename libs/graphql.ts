import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { CONFIG } from "@libs/config";
import moment from "moment"

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
		(l) => {
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

export const getMostStarredRepos = async (): Promise<IStarredRepo[]> => {
	const { data } = await apollo.query({
		query: gql`
			{
				user(login: "${CONFIG.BLOG.discussions.username}") {
					repositories(
						first: 15
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

	const repos: IStarredRepo[] = data.user.repositories.edges.map((r) => {
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

	const labels: ILabel[] = data.repository.labels.edges.map((l) => {
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
					discussions(first: 100) {
						edges {
							node {
								title
								id
								createdAt
								number
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

	const posts: IPost[] = data.repository.discussions.edges.map((e) => {
		const labels: ILabel[] = e.node.labels.edges.map((l) => {
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

	const posts: IPost[] = data.repository.pinnedDiscussions.edges.map((e) => {
		const labels: ILabel[] = e.node.discussion.labels.edges.map((l) => {
			return {
				color: l.node.color,
				name: l.node.name,
				id: l.node.id,
			} as ILabel;
		});

		return {
			title: e.node.discussion.title,
			author: e.node.discussion.author,
			id: e.node.discussion.id,
			createdAt: moment(e.node.discussion.createdAt).calendar(),
			labels,
			number: e.node.discussion.number,
		} as IPost;
	});

	return posts;
};
