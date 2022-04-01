import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { CONFIG } from "@libs/config";
import { FiHeart } from "react-icons/fi";

export const Footer: FC = () => {
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="flex pb-5 px-3  items-center text-center m-auto pt-5 text-gray-600 dark:text-gray-300 text-sm flex-col md:flex-row max-w-6xl">
				<div className="mt-2">
					&copy; {CONFIG.NOW} All rights reserved. Made with{" "}
					<FiHeart className="text-red-500 inline" /> by{" "}
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
				<div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
					{CONFIG.CONTACT.map((social, idx) => (
						<Link
							underline
							key={idx}
							href={social.href}
							className="w-6 mx-1 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
						>
							<social.icon />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
