import type { FC } from "react";
import type { IPost } from "@libs/graphql";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import Tilt from "react-parallax-tilt";

export interface IPostCard {
	post: IPost;
}

export const PostCard: FC<IPostCard> = ({ post }) => {
	const parser = useLocaleParser();

	return (
		<Tilt scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
			<div className="mt-6">
				<div className="round mx-auto max-w-4xl bg-white px-10 py-6 shadow-md dark:bg-gray-800">
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
					<div className="mt-4 flex items-center justify-between">
						<Link
							underline
							href={`/blog/post/${post.number}`}
							className="text-blue-500"
						>
							{parser.get("read_more")}
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
									className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
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
								className="round m-1 p-1 text-sm text-black"
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
	);
};
