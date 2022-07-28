import { type FC, type ReactNode, useEffect, useState } from "react";
import { useLocaleParser } from "@libs/localeParser";
import { Footer } from "@components/Layout/Footer";
import { Navbar } from "@components/Layout/Navbar";
import { Alert } from "@components/Utils/Alert";
import { CONFIG } from "@libs/config";
import { useLocalStorage } from "react-use";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export interface ILayout {
	title: string;
	children: ReactNode;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	const parser = useLocaleParser();

	const router = useRouter();

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
							title={parser.get("new_domain")}
							onClose={handleClose}
							html={parser.get("new_domain_alert", {
								link: `<a rel='noreferrer' target='_blank' href='${CONFIG.SEO.publishDomain}' class='cursor-pointer hover:underline text-blue-500'>${CONFIG.SEO.publishDomain}</a>`,
							})}
						></Alert>
					</div>
				)}
				{children}
				<Footer />
			</>
		</div>
	);
};
