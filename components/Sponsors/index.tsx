import SponsorsCard from "@components/SponsorsCard";
import { FC } from "react";
import styles from "./index.module.scss";
import { SPONSORS } from "./sponsors";

const Sponsors: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cards}>
				{SPONSORS.map((project, i) => (
					<SponsorsCard key={i} {...project} />
				))}
			</div>
		</div>
	);
};

export default Sponsors;
