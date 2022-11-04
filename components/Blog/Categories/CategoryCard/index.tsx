import type { ILabel } from "@libs/graphql";
import Link from "next/link";
import type { FC } from "react";

export interface ICategoryCard {
	category: ILabel;
}

export const CategoryCard: FC<ICategoryCard> = ({ category }) => (
	<li
		className="m-1 mx-auto flex max-w-sm cursor-pointer flex-col rounded-xl p-2 text-black shadow-md"
		style={{
			backgroundColor: `#${category.color}`,
		}}
	>
		<Link href={`/blog/category/${category.id}`}>{category.name}</Link>
	</li>
);
