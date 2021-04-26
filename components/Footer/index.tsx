import {
	faDiscord,
	faGithub,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

const socials = [
	{
		href: "https://github.com/barbarbar338",
		icon: faGithub,
	},
	{
		href: "https://instagram.com/ben_baris.d",
		icon: faInstagram,
	},
	{
		href: "https://www.youtube.com/channel/UC0tkTcxf5F3DdR3RJtaAuXg",
		icon: faYoutube,
	},
	{
		href: "https://discord.com/invite/BjEJFwh",
		icon: faDiscord,
	},
];

export const Footer: FC = () => {
	return (
		<div className="bg-white dark:bg-gray-900 pt-2 ">
			<div className="flex pb-5 px-3 m-auto pt-5 text-gray-600 dark:text-gray-300 text-sm flex-col md:flex-row max-w-6xl">
				<div className="mt-2">
					&copy; {new Date().getFullYear()} All rights reserved. Made with ❤ by{" "}
					<Link href="https://github.com/barbarbar338">
						<span className="text-purple-600 cursor-pointer">barbarbar338</span>
					</Link>{" "}
					using{" "}
					<Link href="https://nextjs.org/">
						<span className="text-gray-600 cursor-pointer">NextJS</span>
					</Link>{" "}
					and{" "}
					<Link href="https://tailwindcss.com/">
						<span className="text-green-600 cursor-pointer">TailwindCSS</span>
					</Link>
				</div>
				<div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-purple-600 dark:text-purple-400">
					{socials.map((social, idx) => (
						<Link key={idx} href={social.href}>
							<span className="cursor-pointer w-6 mx-1">
								<FontAwesomeIcon icon={social.icon} />
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
