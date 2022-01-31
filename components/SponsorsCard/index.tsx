import { FC } from "react";
import Tilt from "react-tilt";
import styles from "./index.module.scss";
import SocialButton from "@components/SocialButton";

export interface ISponsorsCard {
	name: string;
	title: string;
	description: string;
	links: {
		name: string;
		url: string;
	}[];
}

const SponsorsCard: FC<ISponsorsCard> = ({
	name,
	title,
	description,
	links,
}) => {
	return (
		<div className={styles.wrapper}>
			<Tilt
				className="Tilt"
				options={{
					max: 40,
					reverse: false,
					scale: 1.05,
				}}
			>
				<div className={styles.card}>
					<h1>{name}</h1>
					<h2>{title}</h2>
					<p>{description}</p>
					{links.map((link, i) => (
						<SocialButton
							key={i}
							color="green-500"
							href={link.url}
							name={link.name}
							title={link.name}
						/>
					))}
				</div>
			</Tilt>
		</div>
	);
};

export default SponsorsCard;
