import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body className="antialiased">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
