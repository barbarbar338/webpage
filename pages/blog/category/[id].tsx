/* eslint-disable no-mixed-spaces-and-tabs */
import { Categories } from "@components/Categories";
import { Layout } from "@components/Layout";
import { PinnedPosts } from "@components/PinnedPosts";
import { Posts } from "@components/Posts";
import { CONFIG } from "@libs/config";
import {
	getCategories,
	getPinnedPosts,
	getPosts,
	ILabel,
	IPost,
} from "@libs/graphql";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export interface ICategoryProps {
	pinned: IPost[];
	categories: ILabel[];
	posts: IPost[];
	tag: ILabel;
}

const CategoryPage: NextPage<ICategoryProps> = ({
	pinned,
	categories,
	posts,
	tag,
}) => {
	return (
		<Layout title={tag.name}>
			<div className="overflow-x-hidden min-h-screen">
				<div className="px-6 py-8">
					<div className="container flex justify-between mx-auto">
						<Posts posts={posts} title={tag.name} />
						<div className="hidden w-4/12 -mx-8 lg:block">
							<PinnedPosts posts={pinned} />
							<Categories categories={categories} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await getCategories();
	const paths = categories.map((category) => ({
		params: { id: category.id },
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps<ICategoryProps> = async (ctx) => {
	const id = ctx.params.id as string;
	const allPosts = await getPosts();

	let tag: ILabel;

	const posts = allPosts.filter((post) =>
		post.labels.some((label) => label.id == id && (tag = label)),
	);

	if (!tag) {
		return {
			redirect: {
				permanent: false,
				destination: "/404",
			},
		};
	} else {
		const pinned = await getPinnedPosts();
		const categories = await getCategories();

		return {
			props: {
				posts,
				pinned,
				categories,
				tag,
			},
			revalidate: CONFIG.REVALIDATION,
		};
	}
};
