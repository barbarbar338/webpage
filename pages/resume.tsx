import { ResumeAbout } from "@components/Resume/About";
import { ResumeCertificates } from "@components/Resume/Certificates";
import { ResumeEducation } from "@components/Resume/Education";
import { ResumeWorkExperience } from "@components/Resume/Experience";
import { ResumeHeader } from "@components/Resume/Header";
import { ResumeProjects } from "@components/Resume/Projects";
import { ResumeSider } from "@components/Resume/Sider";
import { CONFIG } from "@libs/config";
import {
	IStarredRepo,
	getMostStarredRepos,
	getPinnedRepos,
} from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export interface IResumePage {
	repos: IStarredRepo[];
	pinned: IStarredRepo[];
}

const ResumePage: NextPage<IResumePage> = ({ repos, pinned }) => {
	const router = useRouter();
	const parser = useLocaleParser();

	return (
		<>
			<NextSeo
				title={parser.get("resume")}
				canonical={`${CONFIG.SEO.publishDomain}${router.pathname}`}
			/>
			<div id="resume" className="flex content-center justify-center">
				<div className="mb-10 mt-10 w-4/5 rounded-sm border border-gray-300 px-10 py-10 shadow-lg">
					<p className="pb-5">{parser.get("original_file_here")}</p>
					<ResumeHeader />
					<main className="mt-10 flex gap-x-10">
						<ResumeSider />
						<div className="w-4/6">
							<ResumeAbout />
							<ResumeEducation />
							<ResumeCertificates />
							<ResumeWorkExperience />
						</div>
					</main>
					<ResumeProjects repos={repos} pinned={pinned} />
					<footer className="px-20 pt-5 text-center text-sm">
						{parser.get("resume_footer")}
					</footer>
				</div>
			</div>
		</>
	);
};

export default ResumePage;

export const getStaticProps: GetStaticProps<IResumePage> = async () => {
	const repos = await getMostStarredRepos();
	const pinned = await getPinnedRepos();

	return {
		props: {
			repos,
			pinned,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
