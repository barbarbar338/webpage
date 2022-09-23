import type { GetStaticProps, NextPage } from "next";
import type { IBookmark } from "@components/Bookmarks/Bookmark";
import { useLocaleParser } from "@libs/localeParser";
import { Bookmarks } from "@components/Bookmarks";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { getBookmarks } from "@libs/rest";

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
