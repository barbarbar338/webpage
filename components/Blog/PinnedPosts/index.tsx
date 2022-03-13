import { PinnedCard } from "@components/Blog/PinnedPosts/PinnedCard";
import { IPost } from "@libs/graphql";
import { FC } from "react";
import { m } from "framer-motion";
import { CONFIG } from "@libs/config";

interface IPinnedPosts {
	posts: IPost[];
}

export const PinnedPosts: FC<IPinnedPosts> = ({ posts }) => {
	return (
		<m.div
			variants={CONFIG.VARIANTS.container}
			initial="hidden"
			animate="visible"
			className="px-8 mt-10"
		>
			<h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
				Pinned Posts
			</h1>
			{posts.map((post, idx) => (
				<PinnedCard post={post} key={idx} />
			))}
		</m.div>
	);
};
