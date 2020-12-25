import { FC } from "react";
import Navbar from "@components/Navbar";
import { NextSeo } from "next-seo";
import styles from "./index.module.scss";
import Footer from "@components/Footer";

export interface ILayout {
	title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {
	return (
		<>
			<NextSeo title={title} />
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.cardBG} />
					<div className={styles.cardContent}>
						<div className={styles.btns}>
							<span />
							<span />
							<span />
						</div>
						<div className={styles.children}>
							<Navbar />
							{children}
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
