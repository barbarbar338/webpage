/* eslint-disable no-mixed-spaces-and-tabs */
import { Layout } from "@components/Layout";
import Giscus from "@giscus/react";
import { CONFIG } from "@libs/config";
import { getPostData, getPosts, type IPostData } from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import hljs from "highlight.js";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

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
			const highlighted = hljs.highlightAuto(content || "").value;

			element.innerHTML = `<pre>${highlighted}</pre>`;
		}
	}, []);

	return (
		<Layout title={post.title}>
			<div className="min-h-screen leading-normal tracking-normal">
				<div className="container mx-auto w-full pt-20 md:max-w-3xl">
					<div className="w-full px-4 text-xl leading-normal text-gray-800 md:px-6">
						<div className="font-sans">
							<p className="text-base font-bold text-purple-500 md:text-sm">
								<Link href="/blog">
									<span className="flex cursor-pointer items-center text-base font-bold uppercase text-purple-500 no-underline hover:underline md:text-sm">
										<FiArrowLeft className="inline text-lg" />{" "}
										{parser.get("back_to_blog")}
									</span>
								</Link>
							</p>
							<h1 className="break-normal pb-2 pt-6 font-sans text-3xl font-bold text-black dark:text-white md:text-4xl">
								{post.title}
							</h1>
							<p className="text-sm font-normal text-gray-500 md:text-base">
								{parser.get("published", {
									date: post.createdAt,
								})}
							</p>
						</div>
						<div
							className="container prose text-black dark:text-white"
							dangerouslySetInnerHTML={{ __html: post.bodyHTML }}
						/>
					</div>
					<div className="px-4 py-6 text-base text-gray-500 md:text-sm">
						{parser.get("tags")}{" "}
						{post.labels.length
							? post.labels.map((label, idx) => (
									<Link
										key={idx}
										href={`/blog/category/${label.id}`}
									>
										<span
											className="mx-1 cursor-pointer rounded-xl p-1 text-black md:text-sm"
											style={{
												backgroundColor: `#${label.color}`,
											}}
										>
											{label.name}
										</span>
									</Link>
								))
							: parser.get("no_tags")}
					</div>
					<hr className="mx-4 mb-8 border-b-2 border-gray-700" />
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
					<hr className="mx-4 mb-8 border-b-2 border-gray-700" />
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
	const idParam = ctx.params?.id;
	if (!idParam) {
		return {
			notFound: true,
		};
	}
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
				notFound: true,
			};
		});
};
