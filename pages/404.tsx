import { Layout } from "@components/Layout";
import { NextPage } from "next";
import Link from "next/link";
import ErrorSVG from "@assets/elements/error.svg";

const NotFoundPage: NextPage = () => {
	return (
		<Layout title="Not Found">
			<section className="py-8 px-4 text-center bg-gray-900 text-white">
				<h2 className="text-5xl font-semibold font-heading">Error 404</h2>
				<p className="text-gray-400">Page not found</p>

				<img
					className="max-w-auto md:max-w-sm my-12 mx-auto"
					src={ErrorSVG}
					alt="Error SVG"
					draggable={false}
				/>
				<div>
					<Link href="/">
						<span className="cursor-pointer px-4 text-purple-600 hover:underline">
							Go Home
						</span>
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
