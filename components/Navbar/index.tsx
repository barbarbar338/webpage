import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

const links = [
	{ name: "About Me", path: "/about" },
	{ name: "Projects", path: "/projects" },
];

const Navbar: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Link href="/">
					<span className={styles.name}>barbarbar338</span>
				</Link>
				<div className={styles.links}>
					{links.map((link, i) => (
						<Link key={i} href={link.path}>
							<span>{link.name}</span>
						</Link>
					))}
				</div>
			</div>

			<div className={styles.right}>
				<Link href="https://github.com/barbarbar338/">
					<span className={styles.link}>GitHub</span>
				</Link>
				<Link href="/contact">
					<span className={styles.btn}>Contact</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
