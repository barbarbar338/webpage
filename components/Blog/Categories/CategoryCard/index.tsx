import type { FC } from "react";
import type { ILabel } from "@libs/graphql";
import { Link } from "@components/Utils/Link";
import Tilt from "react-parallax-tilt";

export interface ICategoryCard {
	category: ILabel;
}

export const CategoryCard: FC<ICategoryCard> = ({ category }) => (
	<Tilt scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
		<li
			className="round m-1 mx-auto flex max-w-sm flex-col bg-white p-2 shadow-md dark:bg-gray-800"
			style={{
				backgroundColor: `#${category.color}`,
			}}
		>
			<Link href={`/blog/category/${category.id}`} className="text-black">
				{category.name}
			</Link>
		</li>
	</Tilt>
);
