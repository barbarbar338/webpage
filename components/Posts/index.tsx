import { CustomImage } from "@components/CustomImage";
import { Link } from "@components/Link";
import { IPost } from "@libs/graphql";
import { FC, Fragment } from "react";
import Tilt from "react-tilt";

export interface IPosts {
	posts: IPost[];
	title?: string;
}

export const Posts: FC<IPosts> = ({ posts, title }) => {
	return (
		<div className="w-full lg:w-8/12">
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
				<Tilt
					key={idx}
					className="Tilt"
					options={{
						max: 10,
						reverse: false,
						scale: 1.05,
					}}
				>
					<div className="mt-6">
						<div className="max-w-4xl px-10 py-6 mx-auto bg-white dark:bg-gray-800 rounded-t-xl rounded-bl-xl shadow-md">
							<div className="flex items-center justify-between">
								<span className="font-light text-gray-600 dark:text-white">
									{post.createdAt}
								</span>
							</div>
							<div className="mt-2">
								<Link
									underline
									href={`/blog/post/${post.number}`}
									className="text-2xl font-bold text-gray-700 dark:text-white"
								>
									{post.title}
								</Link>
							</div>
							<div className="flex items-center justify-between mt-4">
								<Link
									underline
									href={`/blog/post/${post.number}`}
									className="text-blue-500"
								>
									Read more
								</Link>
								<div>
									<Link
										underline
										href={`https://github.com/${post.author.login}`}
										className="flex items-center"
									>
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
				</Tilt>
			))}
		</div>
	);
};
