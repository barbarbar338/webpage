/* eslint-disable no-mixed-spaces-and-tabs */
import type { ISponsor } from "@libs/graphql";
import { useLocaleParser } from "@libs/localeParser";
import { shimmer } from "@libs/shimmer";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export interface ISponsorCardProps {
	sponsor: ISponsor;
}

export const SponsorCard: FC<ISponsorCardProps> = ({ sponsor }) => {
	const parser = useLocaleParser();

	return (
		<div className="mx-auto mb-3 flex w-full items-center rounded-xl bg-gray-200 text-black dark:bg-gray-800 dark:text-white lg:w-1/3">
			<Image
				placeholder="blur"
				width={128}
				height={128}
				blurDataURL={shimmer(128, 128)}
				alt={sponsor.name || sponsor.login}
				src={sponsor.avatarUrl}
				className="h-32 w-32 rounded-xl"
			/>
			<div className="ml-5 flex flex-col justify-between">
				<div className="flex flex-col">
					<span className="text-xl leading-tight">
						{sponsor.name || sponsor.login}
					</span>
					<Link
						href={`https://github.com/${sponsor.login}`}
						target="_blank"
						className="text-md cursor-pointer text-gray-500 hover:underline"
					>
						@{sponsor.login}
					</Link>
				</div>
				<span className="mt-2 text-sm">
					{sponsor.isOneTime
						? parser.get("one_time", {
								price: sponsor.tier,
							})
						: parser.get("monthly", {
								price: sponsor.tier,
							})}
				</span>
			</div>
		</div>
	);
};
