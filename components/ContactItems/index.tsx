import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
	faDiscord,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const ContactItems: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Get in touch</h1>
			<p>Contact me by filling out the form.</p>
			<div className={styles.flexItem}>
				<FontAwesomeIcon icon={faAt} />
				<div>
					<Link href="mailto:demirci.baris38@gmail.com">
						demirci.baris38@gmail.com
					</Link>
				</div>
			</div>
			<div className={styles.flexItem}>
				<FontAwesomeIcon icon={faGithub} />
				<div>
					<Link href="/github">@barbarbar338</Link>
				</div>
			</div>
			<div className={styles.flexItem}>
				<FontAwesomeIcon icon={faInstagram} />
				<div>
					<Link href="/instagram">@ben_baris.d</Link>
				</div>
			</div>
			<div className={styles.flexItem}>
				<FontAwesomeIcon icon={faDiscord} />
				<div>
					<Link href="/discord">barbarbar338#0842</Link>
				</div>
			</div>
		</div>
	);
};

export default ContactItems;
