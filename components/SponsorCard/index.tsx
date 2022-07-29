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
		<div className="round h-full cursor-pointer bg-gray-200 px-4 pt-4 text-black dark:bg-gray-800 dark:text-white">
			<div className="flex items-center justify-center">
				<CustomImage alt={sponsor.name} src={sponsor.avatarUrl} />
			</div>
			<span className="h-12 text-center text-xl line-clamp-2">
				{sponsor.name}
			</span>
			<span className="h-12 text-center text-lg text-gray-500 line-clamp-2">
				@{sponsor.login}
			</span>
			<span className="h-12 text-center text-lg line-clamp-2">
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
