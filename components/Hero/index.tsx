import { FC } from "react";
import Up from "@assets/elements/up.svg";
import Down from "@assets/elements/down.svg";
import Left from "@assets/elements/left.svg";
import Right from "@assets/elements/right.svg";
import Link from "next/link";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

export const Hero: FC = () => {
	return (
		<section className="bg-white dark:bg-gray-900 pt-12 lg:pt-20 pb-12 md:pb-24">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap -mx-4 flex-col-reverse md:flex-row">
					<div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
						<div className="w-full text-center lg:text-left">
							<div className="max-w-md mx-auto lg:mx-0">
								<h1 className="my-3 md:mt-0 text-4xl lg:text-5xl text-black dark:text-white font-bold">
									Barış DEMİRCİ
								</h1>
							</div>
							<div className="max-w-sm mx-auto lg:mx-0">
								<p className="mb-6 text-gray-400 leading-loose">
									Back-end developer with{" "}
									<span className="text-purple-500">
										over {new Date().getFullYear() - 2014}{" "}
										years
									</span>{" "}
									experience. More interested with{" "}
									<Link href="https://www.typescriptlang.org/">
										<span className="text-blue-500 cursor-pointer">
											TypeScript
										</span>
									</Link>
									,{" "}
									<Link href="https://nestjs.com/">
										<span className="text-red-500 cursor-pointer">
											NestJS
										</span>
									</Link>
									,{" "}
									<Link href="https://reactjs.org/">
										<span className="text-blue-600 cursor-pointer">
											ReactJS
										</span>
									</Link>
									,{" "}
									<Link href="https://nextjs.org/">
										<span className="text-gray-600 cursor-pointer">
											NextJS
										</span>
									</Link>{" "}
									and{" "}
									<Link href="https://golang.org/">
										<span className="text-blue-300 cursor-pointer">
											GoLang
										</span>
									</Link>
									.
								</p>
								<div>
									<Link href="#about">
										<motion.span
											whileHover={{
												scale: 1.05,
											}}
											whileTap={{
												scale: 0.95,
											}}
											className="cursor-pointer inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
										>
											About Me
										</motion.span>
									</Link>
									<Link href="#contact">
										<motion.span
											whileHover={{
												scale: 1.05,
											}}
											whileTap={{
												scale: 0.95,
											}}
											className="cursor-pointer inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
										>
											Contact
										</motion.span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
						<div
							className="relative"
							style={{
								zIndex: 0,
							}}
						>
							<Tilt
								className="Tilt"
								options={{
									max: 10,
									reverse: false,
									scale: 1.05,
								}}
							>
								<img
									loading="lazy"
									className="md:h-128 md:w-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
									src="https://avatars.githubusercontent.com/u/35371155"
									alt="Avatar"
									draggable={false}
								/>
							</Tilt>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									top: "-2rem",
									right: "3rem",
									zIndex: -1,
								}}
								src={Up}
								alt="Element Up"
								draggable={false}
							/>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									bottom: "-2rem",
									right: "-2rem",
									zIndex: -1,
								}}
								src={Down}
								alt="Element Down"
								draggable={false}
							/>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									top: "3rem",
									right: "-3rem",
									zIndex: -1,
								}}
								src={Right}
								alt="Element Right"
								draggable={false}
							/>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									bottom: "2.5rem",
									left: "-4.5rem",
									zIndex: -1,
								}}
								src={Left}
								alt="Element Left"
								draggable={false}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
