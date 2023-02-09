import type { IBookmark } from "@components/Bookmarks/Bookmark";
import axios from "axios";

const storageUrl = process.env.STORAGE_URL;
const gitUrl = process.env.GIT_SERVER_URL;

export interface IRepo {
	branch: string;
	repo: string;
	files: string[];
}

export const getBookmarks = async () => {
	const { data } = await axios.get(`${storageUrl}/bookmark/all`);

	return data.data as IBookmark[];
};

export const getRepos = async () => {
	const { data } = await axios.get(`${gitUrl}/api/repos`);

	return data.data as string[];
};

export const getRepo = async (repo: string) => {
	const { data } = await axios.get(`${gitUrl}/api/repos/${repo}`);

	return data.data as IRepo;
};

export const getFileContent = async (repo: string, path: string | string[]) => {
	path = typeof path == "string" ? path : path.join("/");
	const { data } = await axios.get(`${gitUrl}/api/repos/${repo}/${path}`);

	return data.data.file as Buffer;
};
