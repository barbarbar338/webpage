import type { GetStaticProps, NextPage } from "next";
import type { IBookmark } from "@components/Bookmarks/Bookmark";
import { useLocaleParser } from "@libs/localeParser";
import { Bookmarks } from "@components/Bookmarks";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import axios from "axios";

export interface IBookmarksPage {
	bookmarks: IBookmark[];
}

const BookmarksPage: NextPage<IBookmarksPage> = ({ bookmarks }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("bookmarks") as string}>
			<Bookmarks bookmarks={bookmarks} />
		</Layout>
	);
};

export default BookmarksPage;

export const getStaticProps: GetStaticProps<IBookmarksPage> = async () => {
	const url = process.env.STORAGE_URL as string;
	const token = process.env.STORAGE_AUTH_TOKEN as string;

	const { data } = await axios.get(`${url}/v1/bookmark`, {
		headers: {
			Authorization: token,
		},
	});

	return {
		props: {
			bookmarks: data.data,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
