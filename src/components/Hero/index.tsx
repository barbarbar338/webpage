import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

const Hero: FC = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.small}>I'm</div>
			<div className={styles.name}>Barış DEMİRCİ</div>
			<div className={styles.title}>
				full-stack developer who is interested more with ReactJS and NestJS
			</div>

			<Link href="/about">
				<span className={styles.more}>About Me</span>
			</Link>
		</div>
	);
};

export default Hero;
