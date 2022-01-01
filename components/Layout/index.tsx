import { FC, useEffect, useState } from "react";
import { Footer } from "@components/Footer";
import { domAnimation, LazyMotion } from "framer-motion";
import { NextSeo } from "next-seo";
import { Navbar } from "@components/Navbar";
import { Alert } from "@components/Alert";
import { useLocalStorage } from "react-use";

export interface ILayout {
	title: string;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	const [check, setCheck] = useLocalStorage("domain_check", false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!window.location.hostname.includes("338.rocks") && !check) {
			setShow(true);
		}
	}, [check]);

	const handleClose = () => {
		setCheck(true);
		setShow(false);
	};

	return (
		<div className="select-none">
			<NextSeo title={title} />
			<LazyMotion features={domAnimation}>
				<Navbar />
				{show && (
					<div className="container mx-auto">
						<Alert
							type="warning"
							title="New Domain"
							message="I have migrated to a new domain name. Now when entering this site, make sure it says https://338.rocks in the address bar!"
							onClose={handleClose}
						/>
					</div>
				)}
				{children}
				<Footer />
			</LazyMotion>
		</div>
	);
};
