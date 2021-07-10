import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Link } from "@components/Link";
import ErrorSVG from "@assets/elements/error.svg";
import { CustomImage } from "@components/CustomImage";
import { m } from "framer-motion";

const NotFoundPage: NextPage = () => {
	return (
		<Layout title="Not Found">
			<section className="py-8 px-4 text-center bg-white dark:bg-gray-900 text-black dark:text-white">
				<h1 className="text-5xl font-semibold font-heading">
					Error 404
				</h1>
				<p className="text-gray-400">Page not found</p>
				<CustomImage
					className="max-w-auto md:max-w-sm my-12 mx-auto"
					src={ErrorSVG}
					alt="Error"
				/>
				<div>
					<Link underline={false} href="/">
						<m.span
							whileHover={{
								scale: 1.05,
							}}
							whileTap={{
								scale: 0.95,
							}}
							className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
						>
							Go Home
						</m.span>
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
