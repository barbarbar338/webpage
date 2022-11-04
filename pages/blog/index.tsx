import { Categories } from "@components/Blog/Categories";
import { PinnedPosts } from "@components/Blog/PinnedPosts";
import { Posts } from "@components/Blog/Posts";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import {
	getCategories,
	getPinnedPosts,
	getPosts,
	ILabel,
	IPost,
} from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import type { GetStaticProps, NextPage } from "next";

interface IBlogProps {
	pinned: IPost[];
	categories: ILabel[];
	posts: IPost[];
}

const BlogPage: NextPage<IBlogProps> = ({ pinned, categories, posts }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("blog")}>
			<div className="min-h-screen overflow-x-hidden">
				<div className="px-6 py-8">
					<div className="container mx-auto flex justify-between">
						<Posts posts={posts} />
						<div className="-mx-8 hidden w-4/12 lg:block">
							<PinnedPosts posts={pinned} />
							<Categories categories={categories} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default BlogPage;

export const getStaticProps: GetStaticProps<IBlogProps> = async () => {
	const pinned = await getPinnedPosts();
	const categories = await getCategories();
	const posts = await getPosts();

	return {
		props: {
			pinned,
			categories,
			posts,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
