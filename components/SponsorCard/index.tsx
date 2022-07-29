import type { FC } from "react";
import type { ISponsor } from "@libs/rest";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { Tippy } from "@components/Utils/Tippy";
import { Link } from "@components/Utils/Link";
import Tilt from "react-parallax-tilt";

export interface ISponsorCardProps {
	sponsor: ISponsor;
}

export const SponsorCard: FC<ISponsorCardProps> = ({
	sponsor: { sponsor, tierName },
}) => {
	const parser = useLocaleParser();

	const Card: FC = () => (
		<div className="cursor-pointer px-4 pt-4 bg-gray-200 dark:bg-gray-800 round h-full text-black dark:text-white">
			<div className="flex items-center justify-center">
				<CustomImage alt={sponsor.name} src={sponsor.avatarUrl} />
			</div>
			<span className="line-clamp-2 text-center h-12 text-xl">
				{sponsor.name}
			</span>
			<span className="line-clamp-2 text-center h-12 text-lg text-gray-500">
				@{sponsor.login}
			</span>
			<span className="line-clamp-2 text-center h-12 text-lg">
				{tierName}
			</span>
		</div>
	);

	return (
		<Tippy tooltip={parser.get("click_me")}>
			<div>
				<Tilt scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
					<Link href={`https://github.com/${sponsor.login}`}>
						<Card />
					</Link>
				</Tilt>
			</div>
		</Tippy>
	);
};
