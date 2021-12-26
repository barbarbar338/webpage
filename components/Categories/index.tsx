import { Link } from "@components/Link";
import { ILabel } from "@libs/graphql";
import { FC } from "react";
import Tilt from "react-tilt";

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
					<Tilt
						key={idx}
						className="Tilt"
						options={{
							max: 25,
							reverse: false,
							scale: 1.05,
						}}
					>
						<li
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
						</li>
					</Tilt>
				))}
			</ul>
		</div>
	);
};
