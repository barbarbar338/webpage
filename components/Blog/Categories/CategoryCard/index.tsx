import type { FC } from "react";
import type { ILabel } from "@libs/graphql";
import { Link } from "@components/Utils/Link";
import Tilt from "react-tilt";

export interface ICategoryCard {
	category: ILabel;
}

export const CategoryCard: FC<ICategoryCard> = ({ category }) => {
	return (
		<Tilt
			className="Tilt"
			options={{
				max: 25,
				reverse: false,
				scale: 1.05,
			}}
		>
			<li
				className="m-1 flex flex-col max-w-sm p-2 mx-auto bg-white round shadow-md dark:bg-gray-800"
				style={{
					backgroundColor: `#${category.color}`,
				}}
			>
				<Link
					href={`/blog/category/${category.id}`}
					className="text-black"
				>
					{category.name}
				</Link>
			</li>
		</Tilt>
	);
};
