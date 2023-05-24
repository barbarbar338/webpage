import { Bookmark, type IBookmark } from "@components/Bookmarks/Bookmark";
import { useLocaleParser } from "@libs/localeParser";
import type { FC } from "react";

export interface IBookmarks {
	bookmarks: IBookmark[];
}

export const Bookmarks: FC<IBookmarks> = ({ bookmarks }) => {
	const parser = useLocaleParser();

	return (
		<section
			id="projects"
			className="min-h-screen bg-white px-4 py-10 text-black dark:bg-gray-900 dark:text-white"
		>
			<h1 className="mb-10 text-center font-heading text-4xl font-semibold">
				<span
					className="text-purple-600"
					dangerouslySetInnerHTML={{
						__html: parser.get("bookmarks"),
					}}
				/>
			</h1>
			<div className="container mx-auto mb-12">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{bookmarks.map((bookmark, idx) => (
						<Bookmark key={idx} {...bookmark} />
					))}
				</div>
			</div>
		</section>
	);
};
