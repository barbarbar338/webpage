import { PinnedCard } from "@components/PinnedCard";
import { IPost } from "@libs/graphql";
import { FC } from "react";

interface IPinnedPosts {
	posts: IPost[];
}

export const PinnedPosts: FC<IPinnedPosts> = ({ posts }) => {
	return (
		<div className="px-8 mt-10">
			<h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
				Pinned Posts
			</h1>
			{posts.map((post, idx) => (
				<PinnedCard post={post} key={idx} />
			))}
		</div>
	);
};
