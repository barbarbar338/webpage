import type { IPost } from "@libs/graphql";
import type { FC } from "react";
import { PostCard } from "@components/Blog/Posts/PostCard";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";

export interface IPosts {
	posts: IPost[];
	title?: string;
}

export const Posts: FC<IPosts> = ({ posts, title }) => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<div className="w-full lg:w-8/12">
			<div className="flex items-center justify-between">
				<h1
					className="text-xl font-bold text-gray-700 md:text-2xl dark:text-white"
					dangerouslySetInnerHTML={{
						__html: title || (parser.get("posts") as string),
					}}
				/>
			</div>
			{posts.map((post, idx) => (
				<PostCard post={post} key={idx} />
			))}
		</div>
	);
};
