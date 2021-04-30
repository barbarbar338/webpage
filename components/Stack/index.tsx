import { FC } from "react";
import Tippy from "@tippyjs/react";
import Tilt from "react-tilt";
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
import WEBPACK from "@assets/stack/webpack.svg";
import RUST from "@assets/stack/rust.svg";
import RUBY from "@assets/stack/ruby.svg";
import CRYSTAL from "@assets/stack/crystal.svg";
import CLOJURE from "@assets/stack/clojure.svg";
import VLANG from "@assets/stack/vlang.svg";

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
		alt: "TailwindCSS",
	},
	{
		icon: JS,
		alt: "JavaScript",
	},
	{
		icon: TS,
		alt: "TypeScript",
	},
	{
		icon: GO,
		alt: "GoLang",
	},
	{
		icon: DOCKER,
		alt: "Docker",
	},
	{
		icon: MONGODB,
		alt: "MongoDB",
	},
	{
		icon: NEST,
		alt: "NestJS",
	},
	{
		icon: NEXT,
		alt: "NextJS",
	},
	{
		icon: NODE,
		alt: "NodeJS",
	},
	{
		icon: POSTGRE,
		alt: "PostgreSQL",
	},
	{
		icon: REACT,
		alt: "ReactJS",
	},
	{
		icon: REDIS,
		alt: "Redis",
	},
	{
		icon: SQLITE,
		alt: "SQLite",
	},
	{
		icon: HANDLEBARS,
		alt: "Handlebars",
	},
	{
		icon: LINUX,
		alt: "LINUX",
	},
	{
		icon: PYTHON,
		alt: "Python",
	},
	{
		icon: SCSS,
		alt: "SCSS",
	},
	{
		icon: GITHUB,
		alt: "GitHub",
	},
	{
		icon: GM8,
		alt: "GameMaker 8",
	},
	{
		icon: GMS1,
		alt: "GameMaker: Studio 1",
	},
	{
		icon: GMS2,
		alt: "GameMaker: Studio 2",
	},
	{
		icon: CPP,
		alt: "C++",
	},

	{
		icon: WEBPACK,
		alt: "Webpack",
	},
	{
		icon: RUST,
		alt: "Rust",
	},
	{
		icon: RUBY,
		alt: "Ruby",
	},
	{
		icon: CRYSTAL,
		alt: "Crystal",
	},
	{
		icon: CLOJURE,
		alt: "Clojure",
	},
	{
		icon: VLANG,
		alt: "VLang",
	},
];

export const Stack: FC = () => {
	return (
		<section className="bg-white dark:bg-gray-900 text-black dark:text-white">
			<h1 className="text-4xl mb-10 text-center font-semibold font-heading">
				Tech Stack
			</h1>
			<div className="container mx-auto px-4">
				<div className="flex flex-col justify-center">
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
						{stacks.map((stack, idx) => (
							<Tilt
								key={idx}
								className="Tilt"
								options={{
									max: 20,
									reverse: false,
									scale: 1.05,
								}}
							>
								<Tippy content={stack.alt}>
									<div className="p-4 rounded-3xl flex justify-around items-center bg-gray-200 dark:bg-gray-800">
										<img
											loading="lazy"
											className="w-16 h-16"
											src={stack.icon}
											alt={stack.alt}
											draggable={false}
										/>
									</div>
								</Tippy>
							</Tilt>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
