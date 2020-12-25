import { FC } from "react";
import ProjectCard from "@components/ProjectCard";
import { PROJECTS } from "./projects";
import styles from "./index.module.scss";

const Projects: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cards}>
				{PROJECTS.map((project, i) => (
					<ProjectCard key={i} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
