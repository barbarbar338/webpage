import TailwindSVG from "@assets/elements/tailwind.svg";
import NestSVG from "@assets/elements/nest.svg";
import MongoDBSVG from "@assets/elements/mongodb.svg";
import NextSVG from "@assets/elements/next.svg";
import { CONTACT, DISCORD_ID, SOCIALS } from "@libs/accounts";
import { STACKS } from "@libs/stack";

const NOW = new Date().getFullYear();
const STARTED_AT = 2014;
const EXPERIENCE = NOW - STARTED_AT;

export interface IFramework {
	name: string;
	color: string;
	experience: number;
	icon: string;
}

export const CONFIG = {
	NAME: "Barış",
	SURNAME: "DEMİRCİ",
	NICK: "barbarbar338",
	EMAIL: "demirci.baris38@gmail.com",
	GITHUB_USERNAME: "barbarbar338",
	AVATAR_URL: "https://avatars.githubusercontent.com/u/35371155", // dont forget to change next.config.js
	LANYARD_ID: DISCORD_ID,
	STARTED_AT,
	NOW,
	EXPERIENCE,
	TITLE: "back-end developer",
	BIO: `I am a student from Turkey who codes for fun. I have been in coding since ${STARTED_AT} and I started my career first by making simple websites. I have been using JavaScript (Node & Client-side) for ${EXPERIENCE} years. Now I'm trying to produce lots of open source projects and working as freelancer.`,
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
			color: "text-blue-600 dark:text-blue-300",
			href: "https://golang.org/",
		},
	],
	CONTACT,
	SOCIALS,
	STACKS,
	DEV: process.env.NODE_ENV != "production",
};
