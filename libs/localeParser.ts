import en from "@locales/en.yaml";
import tr from "@locales/tr.yaml";
import constants from "@locales/constants.yaml";
import { useRouter } from "next/router";

export interface IToken {
	start: RegExp;
	end: RegExp;
	value: string;
}

export interface ITokens {
	[key: string]: IToken;
}

const locales = { en, tr };
const tokens: ITokens = {
	purple: {
		start: new RegExp("<purple[^>]*>", "gm"),
		end: new RegExp("</purple[^>]*>", "gm"),
		value: "<span class='text-purple-500'>",
	},
};

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

		if (!str) return `string not found for ${name} in ${this.locale || "en"}, please contact the developer.`;

		if (args) {
			for (const arg in args) {
				const regToken = new RegExp(`%{${arg}}`, "gm");

				if (Array.isArray(str))
					str = str.map((s) => s.replace(regToken, args[arg]));
				else str = str.replace(regToken, args[arg]);
			}
		}

		if (typeof str == "string") str = this.replaceColors(str);
		else if (Array.isArray(str))
			str = str.map((s) => this.replaceColors(s));

		str = this.replaceConstants(str);

		return str;
	}

	private replaceConstants(str: string | string[]) {
		for (const constant in constants) {
			const regToken = new RegExp(`%{${constant}}`, "gm");

			if (Array.isArray(str))
				str = str.map((s) => s.replace(regToken, constants[constant]));
			else str = str.replace(regToken, constants[constant]);
		}

		return str;
	}

	private replaceColors(str: string) {
		for (const t in tokens) {
			const token = tokens[t];
			str = str
				.replace(token.start, token.value)
				.replace(token.end, "</span>");
		}

		return str;
	}
}

export function useLocaleParser() {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);
	return parser;
}
