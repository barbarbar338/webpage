/* eslint-disable no-mixed-spaces-and-tabs */
import type { FC } from "react";
import type { ISponsor } from "@libs/graphql";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { Tippy } from "@components/Utils/Tippy";
import { Link } from "@components/Utils/Link";

export interface ISponsorCardProps {
	sponsor: ISponsor;
}

export const SponsorCard: FC<ISponsorCardProps> = ({ sponsor }) => {
	const parser = useLocaleParser();

	return (
		<Tippy tooltip={parser.get("click_me")}>
			<Link href={`https://github.com/${sponsor.login}`}>
				<div className="h-full cursor-pointer rounded-xl bg-gray-200 px-4 pt-4 text-black dark:bg-gray-800 dark:text-white">
					<div className="flex items-center justify-center">
						<CustomImage
							alt={sponsor.name || sponsor.login}
							src={sponsor.avatarUrl}
							className="rounded-xl"
						/>
					</div>
					<span className="mt-2 h-12 text-center text-xl line-clamp-2">
						{sponsor.name || sponsor.login}
					</span>
					<span className="h-12 text-center text-lg text-gray-500 line-clamp-2">
						@{sponsor.login}
					</span>
					<span className="h-12 text-center text-lg line-clamp-2">
						{sponsor.isOneTime
							? parser.get("one_time", {
									price: sponsor.tier,
							  })
							: parser.get("monthly", {
									price: sponsor.tier,
							  })}
					</span>
				</div>
			</Link>
		</Tippy>
	);
};
