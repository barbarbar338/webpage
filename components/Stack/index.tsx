import { FC } from "react";
import HTML from "@assets/stack/html.svg";
import CSS from "@assets/stack/css.svg";
import JS from "@assets/stack/js.svg";
import TAILWIND from "@assets/stack/tailwind.svg";
import TS from "@assets/stack/typescript.svg";
import GO from "@assets/stack/golang.svg";
import DOCKER from "@assets/stack/docker.svg";
import MONGODB from "@assets/stack/mongodb.svg";
import NEST from "@assets/stack/nestjs.svg";
import NEXT from "@assets/stack/nextjs.svg";
import NODE from "@assets/stack/nodejs.svg";
import POSTGRE from "@assets/stack/postgresql.svg";
import REACT from "@assets/stack/react.svg";
import REDIS from "@assets/stack/redis.svg";
import SQLITE from "@assets/stack/sqlite.svg";
import HANDLEBARS from "@assets/stack/handlebars.svg";
import LINUX from "@assets/stack/linux.svg";
import PYTHON from "@assets/stack/python.svg";
import SCSS from "@assets/stack/scss.svg";
import GITHUB from "@assets/stack/github.svg";
import GM8 from "@assets/stack/gm8.svg";
import GMS1 from "@assets/stack/gms1.svg";
import GMS2 from "@assets/stack/gms2.svg";
import CPP from "@assets/stack/cpp.svg";

const stacks = [
	{
		icon: HTML,
		alt: "HTML",
	},
	{
		icon: CSS,
		alt: "CSS",
	},
	{
		icon: TAILWIND,
		alt: "TAILWIND",
	},
	{
		icon: JS,
		alt: "JS",
	},
	{
		icon: TS,
		alt: "TS",
	},
	{
		icon: GO,
		alt: "GO",
	},
	{
		icon: DOCKER,
		alt: "DOCKER",
	},
	{
		icon: MONGODB,
		alt: "MONGODB",
	},
	{
		icon: NEST,
		alt: "NEST",
	},
	{
		icon: NEXT,
		alt: "NEXT",
	},
	{
		icon: NODE,
		alt: "NODE",
	},
	{
		icon: POSTGRE,
		alt: "POSTGRE",
	},
	{
		icon: REACT,
		alt: "REACT",
	},
	{
		icon: REDIS,
		alt: "REDIS",
	},
	{
		icon: SQLITE,
		alt: "SQLITE",
	},
	{
		icon: HANDLEBARS,
		alt: "HANDLEBARS",
	},
	{
		icon: LINUX,
		alt: "LINUX",
	},
	{
		icon: PYTHON,
		alt: "PYTHON",
	},
	{
		icon: SCSS,
		alt: "SCSS",
	},
	{
		icon: GITHUB,
		alt: "GITHUB",
	},
	{
		icon: GM8,
		alt: "GAMEMAKER 8",
	},
	{
		icon: GMS1,
		alt: "GAMEMAKER: STUDIO 1",
	},
	{
		icon: GMS2,
		alt: "GAMEMAKER: STUDIO 2",
	},
	{
		icon: CPP,
		alt: "CPP",
	},
];

function shuffle<T>(a: T[]): T[] {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

export const Stack: FC = () => {
	return (
		<section className="bg-gray-900 text-white">
			<h2 className="text-4xl mb-10 text-center font-semibold font-heading">
				Tech Stack
			</h2>
			<div className="container mx-auto px-4">
				<div className="flex flex-col justify-center">
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
						{shuffle(stacks).map((stack, idx) => (
							<div
								key={idx}
								className="p-4 rounded-3xl flex justify-around items-center"
							>
								<img className="w-16 h-16" src={stack.icon} alt={stack.alt} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
