import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

export interface ISocialButton {
	href: string;
	color: string;
	title: string;
	name: string;
}

const SocialButton: FC<ISocialButton> = ({ href, color, title, name }) => {
	return (
		<div className={styles.btn}>
			<Link href={href}>
				<span
					title={title}
					className={`border-${color} hover:border-${color} hover:bg-${color}`}
				>
					{name}
				</span>
			</Link>
		</div>
	);
};

export default SocialButton;
