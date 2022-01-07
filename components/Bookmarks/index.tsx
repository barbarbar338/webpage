import { Bookmark, IBookmark } from "@components/Bookmark";
import { FC } from "react";

export interface IBookmarks {
    bookmarks: IBookmark[];
}

export const Bookmarks: FC<IBookmarks> = ({ bookmarks }) => {
    return (
        <section
			id="projects"
			className="min-h-screen py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white"
		>
			<h1 className="text-4xl mb-10 text-center font-semibold font-heading">
				<span className="text-purple-600">Bookmarks</span>
			</h1>
			<div className="container mx-auto mb-12">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{bookmarks.map((bookmark, idx) => (
						<Bookmark key={idx} {...bookmark} />
					))}
				</div>
			</div>
		</section>
    )
}