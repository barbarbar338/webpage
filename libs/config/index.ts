import MongoDBSVG from "@assets/elements/mongodb.svg";
import NestSVG from "@assets/elements/nest.svg";
import NextSVG from "@assets/elements/next.svg";
import TailwindSVG from "@assets/elements/tailwind.svg";
import { CONTACT, DISCORD_ID, SOCIALS } from "@libs/config/accounts";

const NOW = new Date().getFullYear();
const STARTED_AT = 2010;
const EXPERIENCE = NOW - STARTED_AT;

export interface IFramework {
	name: string;
	color: string;
	experience: number;
	icon: string;
}

const domain = "338.rocks";

const SEO = {
	layoutTitle: "%s - Barış DEMİRCİ",
	title: "Home - Barış DEMİRCİ",
	domain,
	publishDomain: `https://${domain}`,
	themeColor: "#6D28D9",
	keywords: [
		"baris",
		"demirci",
		"barisbored",
		"barbar",
		"338",
		"hammer",
		"projecthammer",
		"blog",
		"react",
		"next",
		"reactjs",
		"nextjs",
		"barbarbar338",
		"barbarbar"
	],
	description: "Welcome to barbarbar338's profile!",
};

export const CONFIG = {
	EMAIL: "demirci.baris38@gmail.com",
	GITHUB_USERNAME: "barbarbar338",
	AVATAR_URL: "https://avatars.githubusercontent.com/u/35371155",
	LANYARD_ID: DISCORD_ID,
	STARTED_AT,
	NOW,
	EXPERIENCE,
	GA_TRACKING_ID: "G-14SS6XWKC1",
	IMPORTANT_SKILLS: [
		"JavaScript (Node & Client-Side)",
		"TypeScript",
		"GoLang",
		"NoSQL (MongoDB & Redis)",
		"SQL (Postgre & Sqlite)",
	],
	FAVOURITE_FRAMEWORKS: [
		{
			name: "NestJS",
			color: "bg-red-500 dark:bg-red-800",
			experience: NOW - 2020,
			icon: NestSVG,
		},
		{
			name: "MongoDB",
			color: "bg-green-500 dark:bg-green-800",
			experience: NOW - 2015,
			icon: MongoDBSVG,
		},
		{
			name: "NextJS",
			color: "bg-gray-500 dark:bg-gray-700",
			experience: NOW - 2019,
			icon: NextSVG,
		},
		{
			name: "TailwindCSS",
			color: "bg-blue-500 dark:bg-blue-800",
			experience: NOW - 2020,
			icon: TailwindSVG,
		},
	] as IFramework[],
	INTERESTS: [
		{
			name: "TypeScript",
			color: "text-blue-600 dark:text-blue-400",
			href: "https://www.typescriptlang.org/",
		},
		{
			name: "NestJS",
			color: "text-red-600 dark:text-red-400",
			href: "https://nestjs.com/",
		},
		{
			name: "ReactJS",
			color: "text-blue-600 dark:text-blue-400",
			href: "https://reactjs.org/",
		},
		{
			name: "NextJS",
			color: "text-indigo-700 dark:text-indigo-300",
			href: "https://nextjs.org/",
		},
		{
			name: "GoLang",
			color: "text-blue-600 dark:text-blue-400",
			href: "https://golang.org/",
		},
	],
	CONTACT,
	SOCIALS,
	BLOG: {
		discussions: {
			username: "barbarbar338",
			repo: "webpage",
			repo_id: "MDEwOlJlcG9zaXRvcnkyNjc3OTQ5NDE=",
		},
	},
	SOURCE: {
		repo: "webpage",
		username: "barbarbar338",
	},
	DEV: process.env.NODE_ENV != "production",
	REVALIDATION: 60 * 5,
	SEO,
};
