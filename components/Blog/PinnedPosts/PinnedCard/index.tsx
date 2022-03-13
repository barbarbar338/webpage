import { IPost } from "@libs/graphql";
import { FC } from "react";
import Tilt from "react-tilt";
import { Link } from "@components/Utils/Link";
import { CustomImage } from "@components/Utils/CustomImage";
import { m } from "framer-motion";
import { CONFIG } from "@libs/config";

export interface IPinnedCard {
	post: IPost;
}

export const PinnedCard: FC<IPinnedCard> = ({ post }) => {
	return (
		<Tilt
			className="Tilt"
			options={{
				max: 25,
				reverse: false,
				scale: 1.05,
			}}
		>
			<m.div
				variants={CONFIG.VARIANTS.item}
				className="flex flex-col max-w-sm px-8 py-6 mx-auto my-5 bg-white dark:bg-gray-800 round shadow-md"
			>
				<div className="flex items-center justify-center">
					{post.labels.map((label, idx) => (
						<Link
							key={idx}
							href={`/blog/category/${label.id}`}
							className="m-1 p-1 text-sm text-black round"
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
						className="text-lg font-medium text-gray-700 dark:text-white hover:underline"
					>
						{post.title}
					</Link>
				</div>
				<div className="flex items-center justify-between mt-4">
					<div className="flex items-center">
						<CustomImage
							src={post.author.avatarUrl}
							alt="avatar"
							className="object-cover w-8 h-8 rounded-full"
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
			</m.div>
		</Tilt>
	);
};
