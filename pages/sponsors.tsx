import type { GetStaticProps, NextPage } from "next";
import { type ISponsor, getSponsors } from "@libs/rest";
import { SponsorCard } from "@components/SponsorCard";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";

export interface ISponsorsPage {
	sponsors: ISponsor[];
}

const IndexPage: NextPage<ISponsorsPage> = ({ sponsors }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("sponsors")}>
			<section className="py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white text-center">
				<h1
					className="text-4xl mb-5 font-semibold font-heading"
					dangerouslySetInnerHTML={{
						__html: parser.get("my_sponsors"),
					}}
				/>
				<p
					className="text-xl mb-10 text-gray-500"
					dangerouslySetInnerHTML={{
						__html: parser.get("github_sponsors_description", {
							link: `<a rel='noreferrer' target='_blank' href='https://github.com/sponsors/${CONFIG.GITHUB_USERNAME}' class='cursor-pointer hover:underline'>https://github.com/sponsors/${CONFIG.GITHUB_USERNAME}</a>`,
						}),
					}}
				/>
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
						{sponsors.map((sponsor, idx) => (
							<SponsorCard key={idx} sponsor={sponsor} />
						))}
					</div>
					<div className="pt-10">
						<Link href="/">
							<span className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold round transition duration-200">
								{parser.get("go_home")}
							</span>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const getStaticProps: GetStaticProps<ISponsorsPage> = async () => {
	const sponsors = await getSponsors();

	return {
		props: {
			sponsors,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
