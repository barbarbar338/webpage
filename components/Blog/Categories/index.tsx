import type { FC } from "react";
import type { ILabel } from "@libs/graphql";
import { CategoryCard } from "@components/Blog/Categories/CategoryCard";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";

export interface ICategories {
	categories: ILabel[];
}

export const Categories: FC<ICategories> = ({ categories }) => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<div className="px-8 mt-10">
			<h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
				{parser.get("categories")}
			</h1>
			<ul>
				{categories.map((category, idx) => (
					<CategoryCard category={category} key={idx} />
				))}
			</ul>
		</div>
	);
};
