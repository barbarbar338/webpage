import { FC } from "react";
import Link from "next/link";
import Tilt from "react-tilt";
import Tippy from "@tippyjs/react";
import styles from "./index.module.scss";

export interface IProjectCard {
	href: string;
	name: string;
	avatar: string;
}

const ProjectCard: FC<IProjectCard> = ({ href, name, avatar }) => {
	return (
		<Link href={href}>
			<div className={styles.wrapper}>
				<Tilt
					className="Tilt"
					options={{
						max: 40,
						reverse: false,
						scale: 1.05,
					}}
				>
					<Tippy content="Click me!">
						<div className={styles.card}>
							<div className={styles.image}>
								<img src={avatar} alt={name} />
							</div>
							<h2>{name}</h2>
						</div>
					</Tippy>
				</Tilt>
			</div>
		</Link>
	);
};

export default ProjectCard;
