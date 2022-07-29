import { CONFIG } from "./config";
import axios from "axios";

export interface ISponsor {
	sponsor: {
		login: string;
		name: string;
		avatarUrl: string;
	};
	tierName: string;
}

export const getSponsors = async (): Promise<ISponsor[]> => {
	const res = await axios.get(
		`https://cdn.jsdelivr.net/gh/${CONFIG.GITHUB_USERNAME}/.github@master/sponsors.json`,
	);
	return res.data;
};
