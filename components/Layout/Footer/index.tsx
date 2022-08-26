import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { FiHeart } from "react-icons/fi";
import { CONFIG } from "@libs/config";

export const Footer: FC = () => (
	<div className="bg-white dark:bg-gray-900">
		<div className="m-auto flex max-w-6xl flex-col items-center px-3 pb-5 pt-5 text-center text-sm text-gray-600 dark:text-gray-300 md:flex-row">
			<div className="mt-2">
				&copy; 2020 - {CONFIG.NOW} All rights reserved. Made with{" "}
				<FiHeart className="inline text-red-500" /> by{" "}
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
			<div className="mt-2 flex flex-row md:flex-auto md:flex-row-reverse">
				{CONFIG.CONTACT.map((social, idx) => (
					<Link
						underline
						key={idx}
						href={social.href}
						className="mx-1 w-5 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
					>
						<social.icon className="text-lg" />
					</Link>
				))}
			</div>
		</div>
	</div>
);
