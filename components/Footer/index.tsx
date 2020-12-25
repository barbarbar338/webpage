import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

const Footer: FC = () => {
	return (
		<div className={styles.wrapper}>
			Made with ❤️ using{" "}
			<Link href="https://tailwindcss.com/">
				<span>TailwindCSS</span>
			</Link>{" "}
			and{" "}
			<Link href="https://nextjs.org/">
				<span>NextJS</span>
			</Link>
		</div>
	);
};

export default Footer;
