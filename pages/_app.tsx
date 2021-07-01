import NextApp from "next/app";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

import "@styles/tailwind.css";
import "@styles/index.scss";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";

export default class App extends NextApp {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider defaultTheme="dark" attribute="class">
				<DefaultSeo titleTemplate="%s - Barış DEMİRCİ" />
				<Component {...pageProps} />
				<ToastContainer position="bottom-right" />
			</ThemeProvider>
		);
	}
}
