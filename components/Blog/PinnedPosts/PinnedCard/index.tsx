import type { FC } from "react";
import type { IPost } from "@libs/graphql";
import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";
import Tilt from "react-parallax-tilt";

export interface IPinnedCard {
	post: IPost;
}

export const PinnedCard: FC<IPinnedCard> = ({ post }) => (
	<Tilt scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
		<div className="round mx-auto my-5 flex max-w-sm flex-col bg-white px-8 py-6 shadow-md dark:bg-gray-800">
			<div className="flex items-center justify-center">
				{post.labels.map((label, idx) => (
					<Link
						key={idx}
						href={`/blog/category/${label.id}`}
						className="round m-1 p-1 text-sm text-black"
						style={{
							backgroundColor: `#${label.color}`,
						}}
					>
						{label.name}
					</Link>
				))}
			</div>
			<div className="mt-4">
				<Link
					href={`/blog/post/${post.number}`}
					underline
					className="text-lg font-medium text-gray-700 hover:underline dark:text-white"
				>
					{post.title}
				</Link>
			</div>
			<div className="mt-4 flex items-center justify-between">
				<div className="flex items-center">
					<CustomImage
						src={post.author.avatarUrl}
						alt="avatar"
						className="h-8 w-8 rounded-full object-cover"
					/>
					<Link
						href={`https://github.com/${post.author.login}`}
						underline
						className="mx-3 text-sm text-gray-700 dark:text-white"
					>
						{post.author.login}
					</Link>
				</div>
				<span className="text-sm font-light text-gray-600 dark:text-white">
					{post.createdAt}
				</span>
			</div>
		</div>
	</Tilt>
);
