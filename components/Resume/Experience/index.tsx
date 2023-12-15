import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";

export const ResumeWorkExperience: FC = () => {
	const parser = useLocaleParser();

	return (
		<section>
			<h2 className="mt-6 border-b pb-1 text-2xl font-semibold">
				{parser.get("work_experience")}
			</h2>
			<ul className="mt-2">
				{CONFIG.WORK_EXPERIENCE.map((experience, idx) => (
					<li className="pt-2" key={idx}>
						<p className="flex justify-between text-sm">
							<strong className="text-base">
								{experience.name}
							</strong>
							{experience.era}
						</p>
						<p className="flex justify-between text-base">
							{experience.title}
							<small>{experience.location}</small>
						</p>
						<p className="text-justify text-xs">
							{experience.description}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};
