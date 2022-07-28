import { type FC, useEffect, useState } from "react";
import { useLocaleParser } from "@libs/localeParser";
import { Alert } from "@components/Utils/Alert";
import { CONFIG } from "@libs/config";
import { useLocalStorage } from "react-use";

export const DomainAlert: FC = () => {
	const parser = useLocaleParser();

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
		show && (
			<div className="container mx-auto">
				<Alert
					type="warning"
					title={parser.get("new_domain")}
					onClose={handleClose}
					html={parser.get("new_domain_alert", {
						link: `<a rel='noreferrer' target='_blank' href='${CONFIG.SEO.publishDomain}' class='cursor-pointer hover:underline'>${CONFIG.SEO.publishDomain}</a>`,
					})}
				></Alert>
			</div>
		)
	);
};
