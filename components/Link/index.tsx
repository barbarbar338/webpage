import styles from "./index.module.scss";
import { FC } from "react";
import Link from "next/link";

export interface IButton {
	from: string;
	to: string;
	href: string;
}

const Button: FC<IButton> = ({ children, from, to, href }) => {
	return (
		<Link href={href}>
			<div
				className={`${styles.btn} from-${from}-400 to-${to}-600 hover:from-${from}-500 hover:to-${to}-700`}
			>
				{children}
			</div>
		</Link>
	);
};

export default Button;
