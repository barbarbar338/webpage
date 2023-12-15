import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";

export const ResumeEducation: FC = () => {
	const parser = useLocaleParser();

	return (
		<section>
			<h2 className="mt-6 border-b pb-1 text-2xl font-semibold">
				{parser.get("education")}
			</h2>
			<ul className="mt-2">
				{CONFIG.EDUCATION.map((education, idx) => (
					<li className="pt-2" key={idx}>
						<p className="flex justify-between text-sm">
							<strong className="text-base">
								{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
								{parser.get(education.name as any)}
							</strong>
							{education.era}
						</p>
						<p className="flex justify-between text-sm">
							{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
							{parser.get(education.department as any)}
							<small>
								{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
								{parser.get(education.degree as any)} - GPA:{" "}
								{education.gpa}
							</small>
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};
