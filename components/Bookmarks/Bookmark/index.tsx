import type { FC } from "react";
import { useLocaleParser } from "@libs/localeParser";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

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
					<Image
						width={128}
						height={128}
						className="flex h-20 w-20 justify-center"
						src={imageUrl}
						alt={title}
					/>
					<Link href={url}>
						<h2 className="ml-4 cursor-pointer text-3xl font-semibold text-gray-800 hover:underline dark:text-white">
							{title}
						</h2>
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
