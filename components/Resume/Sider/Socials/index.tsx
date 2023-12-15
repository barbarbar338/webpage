import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";

export const ResumeSocials: FC = () => {
	const parser = useLocaleParser();

	return (
		<>
			<strong className="text-xl font-medium">
				{parser.get("socials")}
			</strong>
			<hr />
			<ul className="mb-10 mt-2">
				{CONFIG.CONTACT.map((contact, idx) => (
					<li key={idx} className="mt-1 px-2">
						<strong className="mr-1">{contact.name}:</strong>{" "}
						{contact.value}
					</li>
				))}
			</ul>
		</>
	);
};
