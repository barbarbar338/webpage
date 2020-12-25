import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";
import Tippy from "@tippyjs/react";

export interface ISocialButton {
	href: string;
	color: string;
	title: string;
	name: string;
}

const SocialButton: FC<ISocialButton> = ({ href, color, title, name }) => {
	return (
		<Tippy content={title} placement="auto">
			<div className={styles.btn}>
				<Link href={href}>
					<span
						className={`border-${color} hover:border-${color} hover:bg-${color}`}
					>
						{name}
					</span>
				</Link>
			</div>
		</Tippy>
	);
};

export default SocialButton;
