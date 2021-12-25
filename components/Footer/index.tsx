import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONFIG } from "@libs/config";
import { Link } from "@components/Link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer: FC = () => {
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="flex pb-5 px-3 m-auto pt-5 text-gray-600 dark:text-gray-300 text-sm flex-col md:flex-row max-w-6xl">
				<div className="mt-2">
					&copy; {CONFIG.NOW} All rights reserved. Made with{" "}
					<FontAwesomeIcon icon={faHeart} className="text-red-500" />{" "}
					by{" "}
					<Link
						underline
						href="https://github.com/barbarbar338"
						className="text-purple-600"
					>
						barbarbar338
					</Link>{" "}
					using{" "}
					<Link
						underline
						href="https://nextjs.org/"
						className="text-gray-600"
					>
						NextJS
					</Link>{" "}
					and{" "}
					<Link
						underline
						href="https://tailwindcss.com/"
						className="text-green-700 dark:text-green-400"
					>
						TailwindCSS
					</Link>
				</div>
				<div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-purple-600 dark:text-purple-400">
					{CONFIG.CONTACT.map((social, idx) => (
						<Link
							underline
							key={idx}
							href={social.href}
							className="w-6 mx-1"
						>
							<FontAwesomeIcon icon={social.icon} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
