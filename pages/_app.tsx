import NextApp from "next/app";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Favicon from "@assets/favicon.png";
import Avatar from "@assets/avatar.png";

import "@styles/tailwind.css";
import "@styles/index.scss";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";

export default class App extends NextApp {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<meta name="og:image" content={Avatar.src} />
					<meta name="twitter:image" content={Favicon.src} />
					<link rel="icon" href={Favicon.src} />
				</Head>
				<DefaultSeo titleTemplate="%s - Barış DEMİRCİ" />
				<Component {...pageProps} />
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</>
		);
	}
}
