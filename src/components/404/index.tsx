import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

const NotFound: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.max}>
					<div className={styles.head}>404</div>
					<p className={styles.subhead}>Sorry we couldn't find this page.</p>
					<p className={styles.title}>
						But dont worry, you can find plenty of other things on my homepage.
					</p>
					<Link href="/">
						<span>back to homepage</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
