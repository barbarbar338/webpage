import { Bookmarks } from "@components/Bookmarks";
import type { IBookmark } from "@components/Bookmarks/Bookmark";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import type { GetStaticProps, NextPage } from "next";
//import { getBookmarks } from "@libs/rest";

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
	//const bookmarks = await getBookmarks();

	return new Promise((resolve) =>
		resolve({
			props: {
				bookmarks: [
					{
						createdAt: new Date().toLocaleDateString(),
						description: "Example",
						id: 123,
						imageUrl:
							"https://jqetijvmergeabbsbhjm.supabase.co/storage/v1/object/public/uploads/branding/icon.png",
						title: "Example",
						url: "https://338.rocks",
					},
				], //bookmarks,
			},
			revalidate: CONFIG.REVALIDATION,
		}),
	);
};
