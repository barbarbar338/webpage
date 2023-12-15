import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";

export const ResumeAbout: FC = () => {
	const parser = useLocaleParser();
	const lastIDX = CONFIG.INTERESTS.length - 1;
	const lastElement = CONFIG.INTERESTS[lastIDX];

	return (
		<section>
			<h2 className="border-b pb-1 text-2xl font-semibold">
				{parser.get("about")}
			</h2>
			<p
				className="mt-4 text-xs"
				dangerouslySetInnerHTML={{
					__html: parser.get("hero_title", {
						experience: CONFIG.EXPERIENCE.toString(),
						interests: CONFIG.INTERESTS.map((interest, idx) =>
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
			<p
				className="mt-4 text-xs"
				dangerouslySetInnerHTML={{
					__html: parser.get("bio", {
						startedAt: CONFIG.STARTED_AT.toString(),
						experience: CONFIG.EXPERIENCE.toString(),
					}),
				}}
			/>
		</section>
	);
};
