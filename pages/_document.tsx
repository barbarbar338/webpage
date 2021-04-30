import Document, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "@assets/icon.png";
import Avatar from "@assets/avatar.webp";

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="HandheldFriendly" content="true" />
					<meta name="robots" content="INDEX, FOLLOW" />
					<meta name="copyright" content="Barış DEMİRCİ" />
					<meta name="theme-color" content="#ffa33b" />
					<meta
						name="author"
						content="Barış DEMİRCİ, demirci.baris38@gmail.com"
					/>
					<meta
						name="description"
						content="Welcome to barbarbar338's profile!"
					/>
					<meta name="og:title" content="barbarbar338" />
					<meta
						name="og:site_name"
						content="barbarbar338"
						title="title"
					/>
					<meta name="og:url" content="https://bariscodes.me/" />
					<meta
						name="keywords"
						content="baris, demirci, barbarbar338, barbar, 338, hammer, projecthammer"
					/>
					<meta name="og:image" content={Avatar} />
					<meta name="twitter:image" content={Favicon} />
					<link rel="icon" href={Favicon} />
					<link rel="canonical" href="https://bariscodes.me/" />
				</Head>
				<body className="antialiased bg-body text-body font-body">
					<Main />
					<script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
					<NextScript />
				</body>
			</Html>
		);
	}
}
