import type { IBookmark } from "@components/Bookmarks/Bookmark";
import axios from "axios";

const storageUrl = process.env.STORAGE_URL;

export const getBookmarks = async () => {
	const { data } = await axios.get(`${storageUrl}/bookmark/all`);

	return data.data as IBookmark[];
};
