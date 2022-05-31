import en from "@locales/en.yaml";
import constants from "@locales/constants.yaml";

const locales = { en };

export class LocaleParser {
	private locale: string;
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
		return str;
	}
}
