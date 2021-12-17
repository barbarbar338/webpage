import { Link } from "@components/Link";
import { ILabel } from "@libs/graphql";
import { FC } from "react";

export interface ICategories {
	categories: ILabel[];
}

export const Categories: FC<ICategories> = ({ categories }) => {
	return (
		<div className="px-8 mt-10">
			<h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">Categories</h1>
			<div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
				<ul>
					{categories.map((category, idx) => (
						<li key={idx} className="m-1">
							<Link
								href={`/blog/category/${category.id}`}
								underline={true}
								className="p-1 text-sm text-black rounded"
								style={{
									backgroundColor: `#${category.color}`,
								}}
							>
								{category.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
