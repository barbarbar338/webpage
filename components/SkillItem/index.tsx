import { FC } from "react";
import Tippy from "@tippyjs/react";
import styles from "./index.module.scss";

export interface ISkillItem {
	percent: string;
	name: string;
	color: string;
}

const SkillItem: FC<ISkillItem> = ({ percent, name, color }) => {
	return (
		<Tippy content={percent} placement="right">
			<div className={styles.item}>
				<div
					className={`${styles.bg} bg-${color}-600`}
					style={{
						width: percent,
					}}
				>
					<div className={`${styles.text} bg-${color}-700`}>{name}</div>
				</div>
			</div>
		</Tippy>
	);
};

export default SkillItem;
