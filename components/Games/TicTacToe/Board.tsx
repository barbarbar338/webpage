import type { FC } from "react";
import { Square } from "./Square";

export interface ITicTacToeBoard {
	squares: string[];
	onClick: (i: number) => void;
}

export const TicTacToeBoard: FC<ITicTacToeBoard> = ({ squares, onClick }) => {
	return (
		<div className="bg-white border-white border-4 gap-1 w-96 h-96 grid grid-rows-3 grid-cols-3">
			{squares.map((square, i) => (
				<Square key={i} value={square} onClick={() => onClick(i)} />
			))}
		</div>
	);
};
