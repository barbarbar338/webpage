import { Circle } from "@components/Apps/Minesweeper/Circle";
import { randomColor } from "@libs/apps/minesweeper/randomColor";
import type { ICell } from "@libs/apps/minesweeper/reveal";
import type { FC, MouseEvent } from "react";

export interface IMinesweeperCell {
	updateFlag: (
		e: MouseEvent<HTMLDivElement, MouseEvent>,
		x: number,
		y: number,
	) => void;
	revealCell: (x: number, y: number) => void;
	details: ICell;
}

export const MinesweeperCell: FC<IMinesweeperCell> = ({
	details,
	updateFlag,
	revealCell,
}) => {
	const cellstyle = {
		background: details.revealed
			? details.value === "X"
				? randomColor()
				: bombCheckPattern(details.x, details.y)
			: chexPattern(details.x, details.y),
		color: numColorCode(details.value as number),
	};

	return (
		<div
			onContextMenu={(e) =>
				updateFlag(
					e as unknown as MouseEvent<HTMLDivElement, MouseEvent>,
					details.x,
					details.y,
				)
			}
			onClick={() => revealCell(details.x, details.y)}
			style={cellstyle}
			className="flex h-8 w-8 cursor-pointer items-center justify-center text-xl font-black md:h-12 md:w-12"
		>
			{!details.revealed && details.flagged ? (
				"🚩"
			) : details.revealed && details.value !== 0 ? (
				details.value === "X" ? (
					<Circle />
				) : (
					details.value
				)
			) : (
				""
			)}
		</div>
	);
};

const bombCheckPattern = (x: number, y: number) => {
	if (x % 2 === 0 && y % 2 === 0) {
		return "#e5c29f";
	} else if (x % 2 === 0 && y % 2 !== 0) {
		return "#d7b899";
	} else if (x % 2 !== 0 && y % 2 === 0) {
		return "#d7b899";
	} else {
		return "#e5c29f";
	}
};

const chexPattern = (x: number, y: number) => {
	if (x % 2 === 0 && y % 2 === 0) {
		return "#228918";
	} else if (x % 2 === 0 && y % 2 !== 0) {
		return "#2fc520";
	} else if (x % 2 !== 0 && y % 2 === 0) {
		return "#2fc520";
	} else {
		return "#228918";
	}
};

const numColorCode = (num: number) => {
	switch (num) {
		case 1:
			return "#1976d2";
		case 2:
			return "#388d3c";
		case 3:
			return "#d33030";
		case 4:
			return "#7c21a2";
		case 5:
			return "#1976d2";
		case 6:
			return "#1976d2";
		default:
			return "white";
	}
};
