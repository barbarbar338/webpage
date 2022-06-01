import en from "@locales/en.yaml";
import constants from "@locales/constants.yaml";
import { useRouter } from "next/router";

const locales = { en };

class LocaleParser {
	private locale: string;
	public constants = constants;
	constructor(locale = "en") {
		this.locale = locale;
	}

	public get(
		name: string,
		args?: { [param: string]: string },
	): string | string[] {
		const locale = locales[this.locale] || locales["en"];
		let str = locale[name];
		for (const constant in constants) {
			const regToken = new RegExp(`%{${constant}}`, "gm");
			if (Array.isArray(str)) {
				str = str.map((s) => s.replace(regToken, constants[constant]));
			} else {
				str = str.replace(regToken, constants[constant]);
			}
		}
		if (args) {
			for (const arg in args) {
				const regToken = new RegExp(`%{${arg}}`, "gm");
				if (Array.isArray(str)) {
					str = str.map((s) => s.replace(regToken, args[arg]));
				} else {
					str = str.replace(regToken, args[arg]);
				}
			}
		}

		if (typeof str == "string") str = this.replaceColors(str);
		else if (Array.isArray(str)) str.map((s) => this.replaceColors(s));

		return str;
	}

	private replaceColors(str: string) {
		return str
			.replace(/<purple[^>]*>/gim, "<span class='text-purple-500'>")
			.replace(/<\/purple[^>]*>/gim, "</span>");
	}
}

export function useLocaleParser() {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);
	return parser;
}
