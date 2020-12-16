import { FC } from "react";
import ContactItems from "@components/ContactItems";
import ContactForm from "@components/ContactForm";
import styles from "./index.module.scss";

const Contact: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cont}>
				<div className={styles.fix}>
					<div className={styles.gridWrapper}>
						<ContactItems />
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
