import { Layout } from "@components/Layout";
import { SponsorCard } from "@components/SponsorCard";
import { CONFIG } from "@libs/config";
import { getSponsors, type ISponsor } from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";

export interface ISponsorsPage {
	sponsors: ISponsor[];
}

const IndexPage: NextPage<ISponsorsPage> = ({ sponsors }) => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("sponsors")}>
			<section className="min-h-screen bg-white py-10 px-4 text-center text-black dark:bg-gray-900 dark:text-white">
				<h1
					className="mb-5 font-heading text-4xl font-semibold"
					dangerouslySetInnerHTML={{
						__html: parser.get("my_sponsors"),
					}}
				/>

				<div className="container mx-auto mb-12">
					<p className="mb-5 text-xl text-gray-500">
						{parser.get("github_sponsors_description")}
					</p>
					<Link
						href={`https://github.com/sponsors/${CONFIG.GITHUB_USERNAME}`}
						target="_blank"
						className="inline-block w-full cursor-pointer rounded-xl bg-purple-600 py-2 px-6 font-semibold leading-loose text-white transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto"
					>
						{parser.get("support_me")}
					</Link>
					<div className="mt-5 flex flex-col text-left">
						{sponsors.length ? (
							sponsors.map((sponsor, idx) => (
								<SponsorCard key={idx} sponsor={sponsor} />
							))
						) : (
							<SponsorCard
								sponsor={{
									name: parser.get("example_sponsor_card"),
									avatarUrl:
										"https://avatars.githubusercontent.com/u/35371155",
									isOneTime: false,
									login: "barbarbar338",
									tier: "10",
								}}
							/>
						)}
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
