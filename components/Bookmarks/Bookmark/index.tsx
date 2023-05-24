import { useLocaleParser } from "@libs/localeParser";
import moment from "moment";
import Link from "next/link";
import type { FC } from "react";

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
			<div className="flex max-w-md flex-col gap-5 rounded-lg bg-white px-8 py-8 shadow-lg dark:bg-gray-800">
				<div className="flex items-center">
					{/* 
						TODO: I don't know how to configure next/image component for all hostnames 
						without putting them in next.config.js file. Need find a solution for this.
						This is just a bad workaround.
					*/}
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
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
						className=" line-clamp-4 h-24 text-gray-600 dark:text-gray-50"
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
