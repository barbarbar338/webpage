import type { NextPage } from "next";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";
import ErrorSVG from "@assets/elements/error.svg";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title="Not Found">
			<section className="min-h-screen bg-white py-8 px-4 text-center text-black dark:bg-gray-900 dark:text-white">
				<h1 className="font-heading text-5xl font-semibold">
					{parser.get("error_404")}
				</h1>
				<p className="text-gray-400">{parser.get("page_not_found")}</p>
				<Image
					width={512}
					height={512}
					className="max-w-auto my-12 mx-auto md:max-w-sm"
					src={ErrorSVG}
					alt="Error"
				/>
				<div>
					<Link href="/">
						<span className="mb-3 inline-block w-full cursor-pointer rounded-xl bg-purple-600 py-2 px-6 font-semibold leading-loose text-white transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto">
							{parser.get("go_home")}
						</span>
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
