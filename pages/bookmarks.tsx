import type { GetStaticProps, NextPage } from "next";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import axios from "axios";
import { Bookmarks } from "@components/Bookmarks";
import { IBookmark } from "@components/Bookmark";

export interface IBookmarksPage {
	bookmarks: IBookmark[];
}

const BookmarksPage: NextPage<IBookmarksPage> = ({ bookmarks }) => {
	return (
		<Layout title="Bookmarks">
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
        }
    });

	return {
		props: {
			bookmarks: data.data,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
