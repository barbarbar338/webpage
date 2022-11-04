import { PinnedCard } from "@components/Blog/PinnedPosts/PinnedCard";
import type { IPost } from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import type { FC } from "react";

interface IPinnedPosts {
	posts: IPost[];
}

export const PinnedPosts: FC<IPinnedPosts> = ({ posts }) => {
	const parser = useLocaleParser();

	return (
		<div className="mt-10 px-8">
			<h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
				{parser.get("pinned_posts")}
			</h1>
			{posts.map((post, idx) => (
				<PinnedCard post={post} key={idx} />
			))}
		</div>
	);
};
