import type { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import moment from "moment";

export interface IBookmark {
	id: number;
	url: string;
	title: string;
	description: string;
	imageUrl: string;
	createdAt: string;
}

export const Bookmark: FC<IBookmark> = ({
	createdAt,
	description,
	imageUrl,
	title,
	url,
}) => {
	const parser = useLocaleParser();

	return (
		<div>
			<div className="flex max-w-md flex-col gap-5 rounded-lg bg-white py-8 px-8 shadow-lg dark:bg-gray-800">
				<div className="flex items-center">
					<CustomImage
						className="flex h-20 w-20 justify-center"
						src={imageUrl}
						alt={title}
					/>
					<Link
						underline
						href={url}
						className="ml-4 text-3xl font-semibold text-gray-800 dark:text-white"
					>
						<h2> {title}</h2>
					</Link>
				</div>
				<div>
					<p
						className=" h-24 text-gray-600 line-clamp-4 dark:text-gray-50"
						title={description}
					>
						{description}
					</p>
					<span className="mt-4 flex text-sm font-medium text-indigo-500">
						{parser.get("bookmarked", {
							date: moment(createdAt).calendar(),
						})}
					</span>
				</div>
			</div>
		</div>
	);
};
