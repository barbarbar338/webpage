import Document, { Html, Head, Main, NextScript } from "next/document";

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
					<meta
						name="og:url"
						content="https://barbarbar338.fly.dev/"
					/>
					<meta
						name="keywords"
						content="baris, demirci, barbarbar338, barbar, 338, hammer, projecthammer"
					/>
					<link
						rel="canonical"
						href="https://barbarbar338.fly.dev/"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="antialiased">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
