import { CustomImage } from "@components/CustomImage";
import { IPost } from "@libs/graphql";
import { Link } from "@components/Link";
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
				<div
					key={idx}
					className="flex flex-col max-w-sm px-8 py-6 mx-auto my-5 bg-white dark:bg-gray-800 rounded-lg shadow-md"
				>
					<div className="flex items-center justify-center">
						{post.labels.map((label, idx) => (
							<Link
								key={idx}
								underline={false}
								href={`/blog/category/${label.id}`}
								className="m-1 p-1 text-sm text-black rounded"
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
							underline={true}
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
								underline={true}
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
			))}
		</div>
	);
};
