import { type FC, useEffect, useState } from "react";
import { Footer } from "@components/Layout/Footer";
import { Navbar } from "@components/Layout/Navbar";
import { Alert } from "@components/Utils/Alert";
import { Link } from "@components/Utils/Link";
import { CONFIG } from "@libs/config";
import { useLocalStorage } from "react-use";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export interface ILayout {
	title: string;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	const [check, setCheck] = useLocalStorage("domain_check", false);
	const [show, setShow] = useState(false);
	const router = useRouter();

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
			<NextSeo
				title={title}
				canonical={`${CONFIG.SEO.publishDomain}${router.pathname}`}
			/>
			<>
				<Navbar />
				{show && (
					<div className="container mx-auto">
						<Alert
							type="warning"
							title="New Domain"
							onClose={handleClose}
						>
							I have migrated to a new domain name. Now when
							entering this site, make sure it says{" "}
							<Link
								href="https://338.rocks"
								underline
								className="text-blue-500 hover:text-blue-400"
							>
								https://338.rocks
							</Link>{" "}
							in the address bar!
						</Alert>
					</div>
				)}
				{children}
				<Footer />
			</>
		</div>
	);
};
