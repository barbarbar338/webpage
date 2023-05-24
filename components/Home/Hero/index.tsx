import { Status } from "@components/Home/Hero/Status";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { shimmer } from "@libs/shimmer";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export const Hero: FC = () => {
	const parser = useLocaleParser();

	const lastIDX = CONFIG.INTERESTS.length - 1;
	const lastElement = CONFIG.INTERESTS[lastIDX];

	return (
		<section className="bg-white pb-12 pt-12 dark:bg-gray-900 md:pb-24 lg:pt-20">
			<div className="container mx-auto px-4">
				<div className="-mx-4 flex flex-col-reverse flex-wrap md:flex-row">
					<div className="mb-12 flex w-full items-center px-4 md:mb-20 lg:mb-0 lg:w-1/2">
						<div className="w-full text-center lg:text-left">
							<div className="mx-auto max-w-md lg:mx-0">
								<h1 className="my-3 text-4xl font-bold text-black dark:text-white md:mt-0 lg:text-5xl">
									{parser.constants["name"]}{" "}
									{parser.constants["surname"]}
								</h1>
							</div>
							<div className="mx-auto max-w-sm lg:mx-0">
								<p
									className="mb-6 leading-loose text-gray-700 dark:text-gray-300"
									dangerouslySetInnerHTML={{
										__html: parser.get("hero_title", {
											experience:
												CONFIG.EXPERIENCE.toString(),
											interests: CONFIG.INTERESTS.map(
												(interest, idx) =>
													idx != lastIDX
														? `<a
															rel="noreferrer"
															target="_blank"
															href="${interest.href}"
															class="${interest.color} hover:underline"
														>${interest.name}</a>`
														: "",
											)
												.filter((i) => !!i)
												.join(", "),
											lastInterest: `<a
													rel="noreferrer"
													target="_blank"
													href="${lastElement.href}"
													class="${lastElement.color} hover:underline"
												>${lastElement.name}</a>`,
										}),
									}}
								/>
								<Status />
								<div>
									<Link href="#about">
										<span className="mb-3 inline-block w-full cursor-pointer rounded-xl bg-purple-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto">
											{parser.get("about_me")}
										</span>
									</Link>
									<Link href="#contact">
										<span className="inline-block w-full cursor-pointer rounded-xl border-2 border-gray-700 bg-gray-900 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:border-gray-600 lg:w-auto">
											{parser.get("contact")}
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-full items-center justify-center px-4 lg:w-1/2">
						<div
							className="relative"
							style={{
								zIndex: 0,
							}}
						>
							<Image
								width={512}
								height={512}
								className="w-full max-w-lg rounded-3xl object-cover md:h-128 md:w-128"
								src={CONFIG.AVATAR_URL}
								alt="Avatar"
								placeholder="blur"
								blurDataURL={shimmer(512, 512)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
