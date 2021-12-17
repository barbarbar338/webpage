import { Layout } from "@components/Layout";
import { Link } from "@components/Link";
import { getPostData, IPostData } from "@libs/graphql";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { Giscus } from "@giscus/react";
import { CONFIG } from "@libs/config";

export interface IPostProps {
	post: IPostData;
}

const PostPage: NextPage<IPostProps> = ({ post }) => {
	return (
		<Layout title={post.title}>
			<main className="relative container mx-auto bg-white dark:bg-gray-800 px-4 rounded-xl">
				<article className="max-w-prose mx-auto py-8">
					<h1 className="text-2xl font-bold text-black dark:text-white">
						{post.title}
					</h1>
					<h2 className="mt-2 text-sm text-gray-500 dark:text-white">
						{post.author.login}, {post.createdAt}
					</h2>
					<div
						className="mt-6 text-black dark:text-white"
						dangerouslySetInnerHTML={{
							__html: post.bodyHTML,
						}}
					/>
					<div>
						<Link underline={false} href="/blog">
							<span className="inline-block mb-3 mt-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200">
								Go Home
							</span>
						</Link>
					</div>
				</article>
				<Giscus
					repo={`${CONFIG.BLOG.discussions.username}/${CONFIG.BLOG.discussions.repo}`}
					repoId={CONFIG.BLOG.discussions.repo_id}
					mapping="number"
					term={post.number.toString()}
					reactionsEnabled="1"
					theme="dark_dimmed"
					emitMetadata="1"
				/>
			</main>
		</Layout>
	);
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async (
	ctx,
): Promise<GetServerSidePropsResult<IPostProps>> => {
	const id = ctx.params.id as string;
	try {
		const post = await getPostData(parseInt(id));
		return {
			props: {
				post,
			},
		};
	} catch (e) {
		return {
			redirect: {
				statusCode: 307,
				destination: "/404",
			},
		};
	}
};
