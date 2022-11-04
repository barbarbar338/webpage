import classNames from "classnames";
import type { FC } from "react";
import { FiCircle, FiX } from "react-icons/fi";

export interface ISquare {
	value: string;
	onClick: () => void;
}

export const Square: FC<ISquare> = ({ value, onClick }) => (
	<button
		className={classNames(
			"bg-gray-300",
			"dark:bg-gray-700",
			"border-0",
			"outline-none",
			"cursor-pointer",
			"text-8xl",
			"flex",
			"items-center",
			"justify-center",
			{ "text-red-500": value === "X" },
			{ "text-green-500": value === "O" },
		)}
		onClick={onClick}
	>
		{value === "X" ? <FiX /> : value === "O" ? <FiCircle /> : ""}
	</button>
);
