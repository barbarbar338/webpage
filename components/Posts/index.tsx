import { CustomImage } from "@components/CustomImage";
import { Link } from "@components/Link";
import { IPost } from "@libs/graphql";
import { FC } from "react";

export interface IPosts {
	posts: IPost[];
}

export const Posts: FC<IPosts> = ({ posts }) => {
	return (
		<div className="w-full lg:w-8/12">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
					Posts
				</h1>
			</div>
			{posts.map((post, idx) => (
				<div key={idx} className="mt-6">
					<div className="max-w-4xl px-10 py-6 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
						<div className="flex items-center justify-between">
							<span className="font-light text-gray-600 dark:text-white">
								{post.createdAt}
							</span>
						</div>
						<div className="mt-2">
							<Link
							underline={true}
								href={`/blog/post/${post.id}`}
								className="text-2xl font-bold text-gray-700 dark:text-white"
							>
								{post.title}
							</Link>
						</div>
						<div className="flex items-center justify-between mt-4">
							<Link
							underline={true}
								href={`/blog/post/${post.id}`}
								className="text-blue-500"
							>
								Read more
							</Link>
							<div>
								<Link underline={true} href={`https://github.com/${post.author.login}`} className="flex items-center">
									<CustomImage
										src={post.author.avatarUrl}
										alt="avatar"
										className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
									/>
									<h1 className="font-bold text-gray-700 dark:text-white">
										{post.author.login}
									</h1>
								</Link>
							</div>
						</div>
						<div>
							{post.labels.map((label, idx) => (
								<Link
									underline={false}
									key={idx}
									href={`/blog/category/${label.id}`}
									className="p-1 m-1 text-sm text-black rounded"
									style={{
										backgroundColor: `#${label.color}`,
									}}
								>
									{label.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
