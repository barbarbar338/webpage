import { Link } from "@components/Utils/Link";
import { PostCard } from "@components/Blog/Posts/PostCard";
import { IPost } from "@libs/graphql";
import { FC, Fragment } from "react";
import { m } from "framer-motion";
import { CONFIG } from "@libs/config";

export interface IPosts {
	posts: IPost[];
	title?: string;
}

export const Posts: FC<IPosts> = ({ posts, title }) => {
	return (
		<m.div
			variants={CONFIG.VARIANTS.container}
			initial="hidden"
			animate="visible"
			className="w-full lg:w-8/12"
		>
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
					{title || (
						<Fragment>
							P
							<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
								o
							</Link>
							sts
						</Fragment>
					)}
				</h1>
			</div>
			{posts.map((post, idx) => (
				<PostCard post={post} key={idx} />
			))}
		</m.div>
	);
};
