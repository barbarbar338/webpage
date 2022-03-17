import { CategoryCard } from "@components/Blog/Categories/CategoryCard";
import { ILabel } from "@libs/graphql";
import { FC } from "react";

export interface ICategories {
	categories: ILabel[];
}

export const Categories: FC<ICategories> = ({ categories }) => {
	return (
		<div className="px-8 mt-10">
			<h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
				Categories
			</h1>
			<ul>
				{categories.map((category, idx) => (
					<CategoryCard category={category} key={idx} />
				))}
			</ul>
		</div>
	);
};
