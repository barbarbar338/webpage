import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";
import Link from "next/link";

export const ResumeCertificates: FC = () => {
	const parser = useLocaleParser();

	return (
		<section>
			<h2 className="mt-6 border-b pb-1 text-2xl font-semibold">
				{parser.get("certificates")}
			</h2>
			<ul className="mt-2">
				{CONFIG.CERTIFICATES.map((cert, idx) => (
					<li className="pt-2" key={idx}>
						<p className="flex justify-between text-sm ">
							<Link
								href={cert.href}
								target="_blank"
								className="cursor-pointer text-base text-blue-500 hover:text-blue-600 hover:underline"
							>
								{cert.name}
							</Link>
							{cert.year}
						</p>
						<p className="flex justify-between text-sm">
							{cert.issuer}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};
