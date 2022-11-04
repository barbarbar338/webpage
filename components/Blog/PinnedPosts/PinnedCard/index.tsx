import type { IPost } from "@libs/graphql";
import { shimmer } from "@libs/shimmer";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export interface IPinnedCard {
	post: IPost;
}

export const PinnedCard: FC<IPinnedCard> = ({ post }) => (
	<div className="mx-auto my-5 flex max-w-sm flex-col rounded-xl bg-white px-8 py-6 shadow-md dark:bg-gray-800">
		<div className="flex items-center justify-center">
			{post.labels.map((label, idx) => (
				<Link key={idx} href={`/blog/category/${label.id}`}>
					<span
						style={{
							backgroundColor: `#${label.color}`,
						}}
						className="m-1 rounded-xl p-1 text-sm text-black"
					>
						{label.name}
					</span>
				</Link>
			))}
		</div>
		<div className="mt-4">
			<Link href={`/blog/post/${post.number}`}>
				<span className="cursor-pointer text-lg font-medium text-gray-700 hover:underline dark:text-white">
					{post.title}
				</span>
			</Link>
		</div>
		<div className="mt-4 flex items-center justify-between">
			<div className="flex items-center">
				<Image
					width={32}
					height={32}
					src={post.author.avatarUrl}
					alt="avatar"
					className="h-8 w-8 rounded-full object-cover"
					blurDataURL={shimmer(32, 32)}
					placeholder="blur"
				/>
				<Link href={`https://github.com/${post.author.login}`}>
					<span className="mx-3 cursor-pointer text-sm text-gray-700 hover:underline dark:text-white">
						{post.author.login}
					</span>
				</Link>
			</div>
			<span className="text-sm font-light text-gray-600 dark:text-white">
				{post.createdAt}
			</span>
		</div>
	</div>
);
