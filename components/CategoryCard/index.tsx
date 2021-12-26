import Tilt from "react-tilt";
import { Link } from "@components/Link";
import { ILabel } from "@libs/graphql";
import { FC } from "react";
import { m, Variants } from "framer-motion";

export interface ICategoryCard {
	category: ILabel;
}

const item: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

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
			<m.li
				variants={item}
				className="m-1 flex flex-col max-w-sm p-2 mx-auto bg-white rounded-t-xl rounded-bl-xl shadow-md dark:bg-gray-800"
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
			</m.li>
		</Tilt>
	);
};
