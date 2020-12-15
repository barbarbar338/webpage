import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

const socials = [
	{
		color: "black",
		title: "@barbarbar338",
		name: "GitHub",
		path: "/github",
	},
	{
		color: "pink-400",
		title: "@ben_baris.d",
		name: "Instagram",
		path: "/instagram",
	},
	{
		color: "red-400",
		title: "Barış DEMİRCİ",
		name: "YouTube",
		path: "/youtube",
	},
	{
		color: "blue-400",
		title: "barbarbar338#0338",
		name: "Discord",
		path: "/discord",
	},
];

const SocialButtons: FC = () => {
	return (
		<div className={styles.wrapper}>
			{socials.map((social, i) => (
				<div key={i} className={styles.link}>
					<Link href={social.path}>
						<span
							title={social.title}
							className={`cursor-pointer md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-${social.color} hover:border-${social.color} hover:bg-${social.color} hover:text-white shadow-md py-2 px-6 inline-flex items-center`}
						>
							{social.name}
						</span>
					</Link>
				</div>
			))}
		</div>
	);
};

export default SocialButtons;
