import { Bookmarks } from "@components/Bookmarks";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";
import { NextPage } from "next";

const BookmarksPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("bookmarks_title")}>
			<Bookmarks
				bookmarks={[
					{
						title: "Placeholder",
						createdAt: new Date().toISOString(),
						url: "https://338.rocks",
						description: "This page is still under development.",
						id: 1,
						imageUrl:
							"https://worker.338.rocks/storage/uploads/branding/icon.png",
					},
				]}
			/>
		</Layout>
	);
};

export default BookmarksPage;

// TODO: Fix Cloudflare Workers bookmarks API
/* import { Bookmarks } from "@components/Bookmarks";
import type { IBookmark } from "@components/Bookmarks/Bookmark";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { getBookmarks } from "@libs/rest";
import type { GetStaticProps, NextPage } from "next";

export interface IBookmarksPage {
	bookmarks: IBookmark[];
}

const BookmarksPage: NextPage<IBookmarksPage> = ({ bookmarks }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("bookmarks_title")}>
			<Bookmarks bookmarks={bookmarks} />
		</Layout>
	);
};

export default BookmarksPage;

export const getStaticProps: GetStaticProps<IBookmarksPage> = async () => {
	const bookmarks = await getBookmarks();

	return {
		props: {
			bookmarks: bookmarks,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
 */
