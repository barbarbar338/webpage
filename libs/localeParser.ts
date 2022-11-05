import { CONFIG } from "@libs/config";
import constants from "@locales/constants.json";
import en from "@locales/en.json";
import tr from "@locales/tr.json";
import { useRouter } from "next/router";

const locales = { en, tr };
const tokens = {
	purple: "<span class='text-purple-500'>",
	blue: "<span class='text-blue-500'>",
};

class LocaleParser {
	private locale: keyof typeof locales;

	public constants = constants;

	constructor(locale: keyof typeof locales = "en") {
		this.locale = locale;
	}

	public get(
		name: keyof typeof locales.en,
		args?: { [param: string]: string },
	): string {
		const locale = locales[this.locale] || locales.en;
		let str = locale[name];

		if (!str)
			return `string not found for ${name} in ${
				this.locale || "en"
			}, please contact the developer with ${CONFIG.EMAIL}.`;

		if (args) {
			for (const arg in args) {
				const regToken = new RegExp(`%{${arg}}`, "gm");
				str = str.replace(regToken, args[arg] || "ARG_NOT_FOUND");
			}
		}

		str = this.replaceColors(str);
		str = this.replaceConstants(str);

		return str;
	}

	private replaceConstants(str: string) {
		for (const constant in constants) {
			const regToken = new RegExp(`%{${constant}}`, "gm");
			str = str.replace(
				regToken,
				constants[constant as keyof typeof constants] ||
					"CONSTANT_NOT_FOUND",
			);
		}

		return str;
	}

	private replaceColors(str: string) {
		for (const token in tokens) {
			const value = tokens[token as keyof typeof tokens];
			str = str
				.replace(new RegExp(`<${token}[^>]*>`, "gm"), value)
				.replace(new RegExp(`</${token}[^>]*>`, "gm"), "</span>");
		}

		return str;
	}
}

export function useLocaleParser() {
	const router = useRouter();
	const parser = new LocaleParser(router.locale as keyof typeof locales);
	return parser;
}
