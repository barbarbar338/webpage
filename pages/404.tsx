import { Layout } from "@components/Layout";
import { NextPage } from "next";
import Link from "next/link";
import ErrorSVG from "@assets/elements/error.svg";

const NotFoundPage: NextPage = () => {
	return (
		<Layout title="Not Found">
			<section className="py-8 px-4 text-center bg-white dark:bg-gray-900 text-black dark:text-white">
				<h1 className="text-5xl font-semibold font-heading">
					Error 404
				</h1>
				<p className="text-gray-400">Page not found</p>
				<img
					loading="lazy"
					className="max-w-auto md:max-w-sm my-12 mx-auto"
					src={ErrorSVG}
					alt="Error SVG"
					draggable={false}
				/>
				<div>
					<Link href="/">
						<span className="cursor-pointer px-4 text-purple-600">
							Go Home
						</span>
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
