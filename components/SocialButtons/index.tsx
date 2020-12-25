import SocialButton from "@components/SocialButton";
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
		title: "BjEJFwh",
		name: "Discord",
		path: "/discord",
	},
];

const SocialButtons: FC = () => {
	return (
		<div className={styles.wrapper}>
			{socials.map((social, i) => (
				<SocialButton
					key={i}
					color={social.color}
					href={social.path}
					name={social.name}
					title={social.title}
				/>
			))}
		</div>
	);
};

export default SocialButtons;
