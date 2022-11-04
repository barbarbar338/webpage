import { Alert } from "@components/Utils/Alert";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { useEffect, useState, type FC } from "react";
import { useLocalStorage } from "react-use";

export const DomainAlert: FC = () => {
	const parser = useLocaleParser();

	const [check, setCheck] = useLocalStorage("domain_check", false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!window.location.hostname.includes(CONFIG.SEO.domain) && !check) {
			setShow(true);
		}
	}, [check]);

	const handleClose = () => {
		setCheck(true);
		setShow(false);
		window.open(CONFIG.SEO.publishDomain);
	};
	return show ? (
		<Alert
			type="warning"
			title={parser.get("new_domain")}
			onClose={handleClose}
			html={parser.get("new_domain_alert", {
				link: `<a rel='noreferrer' target='_blank' href='${CONFIG.SEO.publishDomain}' class='cursor-pointer hover:underline'>${CONFIG.SEO.publishDomain}</a>`,
			})}
		></Alert>
	) : (
		<></>
	);
};
