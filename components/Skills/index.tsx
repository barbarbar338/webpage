import SkillItem from "@components/SkillItem";
import { FC } from "react";
import styles from "./index.module.scss";

const skills = [
	{
		color: "blue",
		name: "TypeScript",
		percent: "90%",
	},
	{
		color: "indigo",
		name: "React",
		percent: "80%",
	},
	{
		color: "red",
		name: "NestJS",
		percent: "100%",
	},
	{
		color: "gray",
		name: "NextJS",
		percent: "70%",
	},
	{
		color: "blue",
		name: "Tailwind",
		percent: "55%",
	},
	{
		color: "indigo",
		name: "Bootstrap",
		percent: "60%",
	},
	{
		color: "green",
		name: "NodeJS",
		percent: "100%",
	},
	{
		color: "yellow",
		name: "JavaScript (DOM)",
		percent: "85%",
	},
	{
		color: "blue",
		name: "CSS",
		percent: "45%",
	},
	{
		color: "yellow",
		name: "HTML",
		percent: "100%",
	},
];

const Skills: FC = () => {
	return (
		<div className={styles.wrapper}>
			{skills.map((item, i) => (
				<SkillItem key={i} {...item} />
			))}
		</div>
	);
};

export default Skills;
