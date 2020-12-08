import NextApp from "next/app";
import { DefaultSeo } from "next-seo";

import "@styles/tailwind.css";
import "@styles/index.scss";

export default class App extends NextApp {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return (
			<>
				<DefaultSeo titleTemplate="%s - Barış DEMİRCİ" />
				<Component {...pageProps} />
			</>
		);
	}
}
