import NextProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { pageview } from "@libs/ga";
import { CONFIG } from "@libs/config";
import Script from "next/script";
import Head from "next/head";
import Favicon from "@assets/icon.svg";

import "@styles/tailwind.css";
import "@styles/index.scss";
import "@styles/blog.scss";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () =>
			router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	return (
		<>
			<Head>
				<meta name="og:image" content={Favicon} />
				<meta name="twitter:image" content={Favicon} />
				<link rel="icon" href={Favicon} />
			</Head>
			<ThemeProvider defaultTheme="dark" attribute="class">
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_TRACKING_ID}`}
				/>
				<Script
					id="gtag-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag("js", new Date());
							gtag("config", "${CONFIG.GA_TRACKING_ID}", {
								page_path: window.location.pathname,
							});
						`,
					}}
				/>
				<Script src="https://cdn.polyfill.io/v3/polyfill.min.js" />
				<NextProgress color="#6D28D9" />
				<DefaultSeo titleTemplate="%s - Barış DEMİRCİ" />
				<Component {...pageProps} />
				<ToastContainer position="bottom-right" />
			</ThemeProvider>
		</>
	);
};

export default App;
