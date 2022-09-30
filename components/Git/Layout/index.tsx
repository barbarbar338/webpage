import { useLocaleParser } from "@libs/localeParser";
import { IRepo } from "@libs/rest";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "react-use";

export interface IGitLayout {
	children: ReactNode;
	repo: IRepo;
}

export const GitLayout: FC<IGitLayout> = ({ children, repo }) => {
	const parser = useLocaleParser();
	const [, copy] = useCopyToClipboard();

	const onCopy = () => {
		copy(`https://benson.fly.dev/${repo.repo}`);
		toast.success(parser.get("copied_repo"));
	};

	return (
		<div className="min-h-screen leading-normal tracking-normal">
			<div className="container mx-auto w-full md:max-w-3xl">
				<div className="w-full text-xl leading-normal text-gray-800">
					<div className="font-sans">
						<h1 className="break-normal pt-6 pb-2 font-sans text-3xl font-bold text-black dark:text-white md:text-4xl">
							<Link href="/git">
								<span className="cursor-pointer text-purple-600 hover:text-purple-500 hover:underline">
									{parser.get("repos")}
								</span>
							</Link>
						</h1>
					</div>
					<div className="container prose text-black dark:text-white">
						<div
							title={parser.get("copy")}
							className="flex cursor-pointer items-center"
							onClick={onCopy}
						>
							<span className="rounded bg-gray-600 px-3 py-1 text-white">
								git clone https://benson.fly.dev/{repo.repo}
							</span>
							<span className="ml-2 text-xl">
								<FiCopy />
							</span>
						</div>
						<h2>
							<Link href={`/git/${repo.repo}`}>
								<span className="cursor-pointer text-purple-600 hover:text-purple-500 hover:underline">
									{repo.repo} - {repo.branch}
								</span>
							</Link>
						</h2>
						<div className="flex">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
