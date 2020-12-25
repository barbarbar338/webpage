import Link from "@components/Link";
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
			<Link from="blue" to="blue" href="/about">
				About Me
			</Link>
		</div>
	);
};

export default Hero;
