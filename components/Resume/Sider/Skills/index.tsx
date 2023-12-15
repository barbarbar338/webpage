import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import classNames from "classnames";
import { FC } from "react";

export const ResumeSkills: FC = () => {
	const parser = useLocaleParser();

	return (
		<>
			<strong className="text-xl font-medium">
				{parser.get("skills")}
			</strong>
			<hr />
			{CONFIG.SKILLS.map((skills, idx) => (
				<div key={idx}>
					<hr />
					<ul className="mb-2 mt-2">
						{skills.map((skill, i) => (
							<li
								key={idx + "_" + i}
								className="mb-1 w-full rounded-full bg-blue-200"
							>
								<div
									className={classNames(
										"h-full w-2/3 rounded-full text-center text-sm text-white",
										skill.color,
									)}
									style={{
										width: `${skill.value}%`,
									}}
								>
									{skill.name} {skill.value}%
								</div>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
};
