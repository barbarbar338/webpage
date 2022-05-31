import type { NextPage } from "next";
import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";
import { Layout } from "@components/Layout";
import ErrorSVG from "@assets/elements/error.svg";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";

const NotFoundPage: NextPage = () => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<Layout title="Not Found">
			<section className="py-8 px-4 text-center bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
				<h1 className="text-5xl font-semibold font-heading">
					{parser.get("error_404")}
				</h1>
				<p className="text-gray-400">{parser.get("page_not_found")}</p>
				<CustomImage
					className="max-w-auto md:max-w-sm my-12 mx-auto"
					src={ErrorSVG}
					alt="Error"
				/>
				<div>
					<Link href="/">
						<span className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold round transition duration-200">
							{parser.get("go_home")}
						</span>
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
