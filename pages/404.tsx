import ErrorSVG from "@assets/elements/error.svg";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";
import { shimmer } from "@libs/shimmer";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title="Not Found">
			<section className="min-h-screen bg-white px-4 py-8 text-center text-black dark:bg-gray-900 dark:text-white">
				<h1 className="font-heading text-5xl font-semibold">
					{parser.get("error_404")}
				</h1>
				<p className="text-gray-400">{parser.get("page_not_found")}</p>
				<Image
					placeholder="blur"
					width={512}
					height={512}
					blurDataURL={shimmer(512, 512)}
					className="max-w-auto mx-auto my-12 md:max-w-sm"
					src={ErrorSVG}
					alt="Error"
				/>
				<div>
					<Link href="/">
						<span className="mb-3 inline-block w-full cursor-pointer rounded-xl bg-purple-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto">
							{parser.get("go_home")}
						</span>
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
