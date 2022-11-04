import { Square } from "@components/Apps/TicTacToe/Square";
import type { FC } from "react";

export interface ITicTacToeBoard {
	squares: string[];
	onClick: (i: number) => void;
}

export const TicTacToeBoard: FC<ITicTacToeBoard> = ({ squares, onClick }) => (
	<div className="grid h-96 w-96 grid-cols-3 grid-rows-3 gap-1 border-4 border-white bg-white">
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);
