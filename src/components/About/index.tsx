import { FC } from "react";
import Avatar from "@assets/avatar.png";
import styles from "./index.module.scss";
import SocialButtons from "@components/SocialButtons";

const About: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<img src={Avatar} />
			</div>
			<div>
				<h2>Barış DEMİRCİ</h2>
				<p>
					Hello, I am Barış DEMİRCİ (a.k.a. barbarbar338). Thanks for visiting my
					page! I live in Turkey and am someone who spends most of my time playing
					games, listening to songs and coding. I have been in coding since 2010 and
					I started my career first by making simple websites. Then I proceeded to
					become a game developer. <br />
					But right now I'm more interested in TypeScript (JavaScript) because it is
					both the most enjoyable language and a mandatory language that all
					developers should know. Since 2010 I have created many games and many
					simple websites for my customers but I have continued to work for more
					back-end projects since 2017. <br />
					My focus right now is to create lots of open source projects. It makes me
					very happy that my knowledge helps other people. That's why I also have a
					small YouTube channel. I am posting coding tutorials on this channel. I
					said I loved open source projects, don't forget to follow my GitHub profile
					for the codes of this site and more open source projects!
				</p>
			</div>
			<SocialButtons />
		</div>
	);
};

export default About;
