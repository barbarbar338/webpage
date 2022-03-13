import type { FC } from "react";
import Up from "@assets/elements/up.svg";
import Down from "@assets/elements/down.svg";
import Left from "@assets/elements/left.svg";
import Right from "@assets/elements/right.svg";
import { Link } from "@components/Utils/Link";
import Tilt from "react-tilt";
import { m } from "framer-motion";
import { Status } from "@components/Home/Hero/Status";
import { CONFIG } from "@libs/config";
import { CustomImage } from "@components/Utils/CustomImage";

export const Hero: FC = () => {
	const lastIDX = CONFIG.INTERESTS.length - 1;
	const lastElement = CONFIG.INTERESTS[lastIDX];

	return (
		<section className="bg-white dark:bg-gray-900 pt-12 lg:pt-20 pb-12 md:pb-24">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap -mx-4 flex-col-reverse md:flex-row">
					<div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
						<div className="w-full text-center lg:text-left">
							<div className="max-w-md mx-auto lg:mx-0">
								<h1 className="my-3 md:mt-0 text-4xl lg:text-5xl text-black dark:text-white font-bold">
									{CONFIG.NAME} {CONFIG.SURNAME}
								</h1>
							</div>
							<div className="max-w-sm mx-auto lg:mx-0">
								<p className="mb-6 text-gray-700 dark:text-gray-300 leading-loose">
									{CONFIG.TITLE[0].toUpperCase() +
										CONFIG.TITLE.slice(
											1,
										).toLowerCase()}{" "}
									with{" "}
									<span className="text-purple-600 dark:text-purple-300">
										over {CONFIG.EXPERIENCE} year(s)
									</span>{" "}
									experience. M
									<Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
										o
									</Link>
									re interested with{" "}
									{CONFIG.INTERESTS.map(
										(interest, idx) =>
											idx != lastIDX && (
												<Link
													underline
													key={idx}
													href={interest.href}
													className={interest.color}
												>
													{interest.name}
													{lastIDX - 1 != idx &&
														","}{" "}
												</Link>
											),
									)}
									and{" "}
									<Link
										underline
										href={lastElement.href}
										className={lastElement.color}
									>
										{lastElement.name}
									</Link>
									.
									<Status />
								</p>
								<div>
									<Link underline href="#about">
										<m.span
											whileHover={{
												scale: 1.05,
											}}
											whileTap={{
												scale: 0.95,
											}}
											className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold round transition duration-200"
										>
											About Me
										</m.span>
									</Link>
									<Link underline href="#contact">
										<m.span
											whileHover={{
												scale: 1.05,
											}}
											whileTap={{
												scale: 0.95,
											}}
											className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 round transition duration-200"
										>
											Contact
										</m.span>
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
								<CustomImage
									className="md:h-128 md:w-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
									src={CONFIG.AVATAR_URL}
									alt="Avatar"
								/>
							</Tilt>
							<CustomImage
								className="hidden md:block absolute"
								style={{
									top: "-2rem",
									right: "3rem",
									zIndex: -1,
								}}
								src={Up}
								alt="UpSVGElement"
							/>
							<CustomImage
								className="hidden md:block absolute"
								style={{
									bottom: "-2rem",
									right: "-2rem",
									zIndex: -1,
								}}
								src={Down}
								alt="DownSVGElement"
							/>
							<CustomImage
								className="hidden md:block absolute"
								style={{
									top: "3rem",
									right: "-3rem",
									zIndex: -1,
								}}
								src={Right}
								alt="RightSVGElement"
							/>
							<CustomImage
								className="hidden md:block absolute"
								style={{
									bottom: "2.5rem",
									left: "-4.5rem",
									zIndex: -1,
								}}
								src={Left}
								alt="LeftSVGElement"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
