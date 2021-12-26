import { PinnedCard } from "@components/PinnedCard";
import { IPost } from "@libs/graphql";
import { FC } from "react";
import { m, Variants } from "framer-motion";

interface IPinnedPosts {
	posts: IPost[];
}

const container: Variants = {
	visible: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

export const PinnedPosts: FC<IPinnedPosts> = ({ posts }) => {
	return (
		<m.div
			variants={container}
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
