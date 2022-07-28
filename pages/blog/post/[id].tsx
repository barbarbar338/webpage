/* eslint-disable no-mixed-spaces-and-tabs */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { type IPostData, getPostData, getPosts } from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { FiArrowLeft } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Giscus from "@giscus/react";
import hljs from "highlight.js";

export interface IPostProps {
	post: IPostData;
}

const PostPage: NextPage<IPostProps> = ({ post }) => {
	const parser = useLocaleParser();

	const { theme } = useTheme();

	useEffect(() => {
		const codeBlocks = document.querySelectorAll(".highlight");
		for (const element of codeBlocks) {
			const content = element.getAttribute(
				"data-snippet-clipboard-copy-content",
			);
			const highlighted = hljs.highlightAuto(content).value;

			element.innerHTML = `<pre>${highlighted}</pre>`;
		}
	}, []);

	return (
		<Layout title={post.title}>
			<div className="leading-normal tracking-normal min-h-screen">
				<div className="container w-full md:max-w-3xl mx-auto pt-20">
					<div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
						<div className="font-sans">
							<p className="text-base md:text-sm text-purple-500 font-bold">
								<Link
									href="/blog"
									className="text-base md:text-sm uppercase text-purple-500 font-bold no-underline hover:underline"
								>
									<FiArrowLeft className="inline" />{" "}
									{parser.get("back_to_blog")}
								</Link>
							</p>
							<h1 className="font-bold font-sans break-normal text-black dark:text-white pt-6 pb-2 text-3xl md:text-4xl">
								{post.title}
							</h1>
							<p className="text-sm md:text-base font-normal text-gray-500">
								{parser.get("published", {
									date: post.createdAt,
								})}
							</p>
						</div>
						<div
							className="container text-black dark:text-white prose"
							dangerouslySetInnerHTML={{ __html: post.bodyHTML }}
						/>
					</div>
					<div className="text-base md:text-sm text-gray-500 px-4 py-6">
						{parser.get("tags")}{" "}
						{post.labels.length
							? post.labels.map((label, idx) => (
									<Link
										key={idx}
										href={`/blog/category/${label.id}`}
										className="text-black md:text-sm p-1 mx-2 round"
										style={{
											backgroundColor: `#${label.color}`,
										}}
									>
										{label.name}
									</Link>
							  ))
							: parser.get("no_tags")}
					</div>
					<hr className="border-b-2 border-gray-700 mb-8 mx-4" />
					<div className="container p-4">
						<Giscus
							repo={`${CONFIG.BLOG.discussions.username}/${CONFIG.BLOG.discussions.repo}`}
							repoId={CONFIG.BLOG.discussions.repo_id}
							mapping="number"
							term={post.number.toString()}
							reactionsEnabled="1"
							theme={theme == "dark" ? "dark_dimmed" : "light"}
							emitMetadata="1"
						/>
					</div>
					<hr className="border-b-2 border-gray-700 mb-8 mx-4" />
				</div>
			</div>
		</Layout>
	);
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getPosts();
	const paths = posts.map((post) => ({
		params: { id: post.number.toString() },
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps<IPostProps> = async (ctx) => {
	const idParam = ctx.params.id;
	const id = parseInt(typeof idParam == "string" ? idParam : idParam[0]);
	return getPostData(id)
		.then((post) => {
			return {
				props: {
					post,
				},
				revalidate: CONFIG.REVALIDATION,
			};
		})
		.catch(() => {
			return {
				redirect: {
					permanent: false,
					destination: "/404",
				},
			};
		});
};
