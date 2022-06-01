import type { FC } from "react";
import { FrameworkCard } from "@components/Home/About/FrameworkCard";
import { useLocaleParser } from "@libs/localeParser";
import { Stack } from "@components/Home/About/Stack";
import { Dot } from "@components/Home/About/Dot";
import { CONFIG } from "@libs/config";

export const About: FC = () => {
	const parser = useLocaleParser();
	const left: JSX.Element[] = [];
	const right: JSX.Element[] = [];

	for (let idx = 0; idx < CONFIG.FAVOURITE_FRAMEWORKS.length; idx++) {
		const framework = CONFIG.FAVOURITE_FRAMEWORKS[idx];
		const component = <FrameworkCard key={idx} framework={framework} />;

		if (idx % 2 == 0) left.push(component);
		else right.push(component);
	}

	return (
		<section
			id="about"
			className="py-10 min-h-screen bg-white dark:bg-gray-900"
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap items-center">
					<div className="w-full lg:w-1/2 mb-12 lg:mb-0">
						<div className="max-w-md lg:mx-auto">
							<span className="text-purple-600 font-bold">
								{parser.get("being_a_title")}
							</span>
							<h2
								className="my-2 text-4xl lg:text-5xl font-bold font-heading text-black dark:text-white"
								dangerouslySetInnerHTML={{
									__html: parser.get("about_title") as string,
								}}
							/>
							<p
								className="mb-6 text-gray-500 leading-loose"
								dangerouslySetInnerHTML={{
									__html: parser.get("bio", {
										startedAt: CONFIG.STARTED_AT.toString(),
										experience:
											CONFIG.EXPERIENCE.toString(),
									}) as string,
								}}
							/>
							<ul className="text-gray-500 font-bold">
								{CONFIG.IMPORTANT_SKILLS.map((skill, idx) => (
									<li key={idx} className="flex mb-4">
										<Dot />
										<span>{skill}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="w-full lg:w-1/2 flex space-x-4">
						<div className="mb-8 lg:mb-0 w-1/2">{left}</div>
						<div className="w-1/2 lg:mt-20 md:px-4">{right}</div>
					</div>
				</div>
			</div>
			<Stack />
		</section>
	);
};
