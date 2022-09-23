import type { IBookmark } from "@components/Bookmarks/Bookmark";
import axios from "axios";

export const getBookmarks = async () => {
	const url = process.env.STORAGE_URL;
	const token = process.env.STORAGE_AUTH_TOKEN;

	const { data } = await axios.get(`${url}/v1/bookmark`, {
		headers: {
			Authorization: token,
		},
	});

	return data.data as IBookmark[];
};

export const getRepos = async () => {
	const url = process.env.GIT_SERVER_URL;

	const { data } = await axios.get(`${url}/api/repos`);

	return data.data as string[];
};
