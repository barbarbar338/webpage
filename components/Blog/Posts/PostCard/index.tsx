import type { FC } from "react";
import type { IPost } from "@libs/graphql";
import { CustomImage } from "@components/Utils/CustomImage";
import { FiCalendar, FiClock } from "react-icons/fi";
import { useLocaleParser } from "@libs/localeParser";
import { calculate } from "calculate-readtime";
import { Link } from "@components/Utils/Link";

export interface IPostCard {
	post: IPost;
}

export const PostCard: FC<IPostCard> = ({ post }) => {
	const parser = useLocaleParser();
	const time = calculate(post.body, {
		lessThanOne: parser.get("lessThanOne"),
		singular: parser.get("singular"),
		plural: parser.get("plural"),
		wpm: 150,
	});

	return (
		<div className="mt-6">
			<div className="mx-auto max-w-4xl rounded-xl bg-white px-10 py-6 shadow-md dark:bg-gray-800">
				<div className="flex items-center justify-between">
					<span className="flex items-center font-light text-gray-600 dark:text-white">
						<FiCalendar className="mx-2" /> {post.createdAt} -{" "}
						<FiClock className="mx-2" /> {time}
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
							className="m-1 rounded-xl p-1 text-sm text-black"
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
	);
};
