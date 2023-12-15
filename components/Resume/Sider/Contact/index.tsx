import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import Link from "next/link";
import { FC } from "react";

export const ContactDetails: FC = () => {
	const parser = useLocaleParser();

	return (
		<>
			<strong className="text-xl font-medium">
				{parser.get("contact_details")}
			</strong>
			<hr />
			<ul className="mb-10 mt-2">
				<li className="mt-1 px-2">
					<strong className="mr-1">{parser.get("website")}</strong>
					<Link
						href={CONFIG.SEO.publishDomain}
						className="block text-blue-500 hover:text-blue-600 hover:underline"
					>
						{CONFIG.SEO.publishDomain}
					</Link>
				</li>
				<li className="mt-1 px-2">
					<strong className="mr-1">{parser.get("phone")}</strong>
					<Link
						href={`tel:${CONFIG.PHONE}`}
						className="block text-blue-500 hover:text-blue-600 hover:underline"
					>
						{CONFIG.PHONE}
					</Link>
				</li>
				<li className="mt-1 px-2">
					<strong className="mr-1">{parser.get("email")}</strong>
					<Link
						href={`mailto:${CONFIG.EMAIL}`}
						className="block text-blue-500 hover:text-blue-600 hover:underline"
					>
						{CONFIG.EMAIL}
					</Link>
				</li>
				<li className="mt-1 px-2">
					<strong className="mr-1">{parser.get("location")}</strong>
					<span className="block text-blue-500">
						{CONFIG.LOCATION}
					</span>
				</li>
			</ul>
		</>
	);
};
