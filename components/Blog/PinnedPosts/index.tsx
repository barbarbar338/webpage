import type { FC } from "react";
import type { IPost } from "@libs/graphql";
import { PinnedCard } from "@components/Blog/PinnedPosts/PinnedCard";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";

interface IPinnedPosts {
	posts: IPost[];
}

export const PinnedPosts: FC<IPinnedPosts> = ({ posts }) => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<div className="px-8 mt-10">
			<h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
				{parser.get("pinned_posts")}
			</h1>
			{posts.map((post, idx) => (
				<PinnedCard post={post} key={idx} />
			))}
		</div>
	);
};
