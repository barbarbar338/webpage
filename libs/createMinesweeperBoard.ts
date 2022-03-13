import { ICell } from "@libs/reveal";

export const createMinesweeperBoard = (
	row: number,
	col: number,
	bombs: number,
): { board: ICell[][]; mineLocation: number[][] } => {
	const board: ICell[][] = [];
	const mineLocation: number[][] = [];

	for (let x = 0; x < row; x++) {
		const subCol: ICell[] = [];
		for (let y = 0; y < col; y++)
			subCol.push({
				value: 0,
				revealed: false,
				x: x,
				y: y,
				flagged: false,
			});

		board.push(subCol);
	}

	let bombsCount = 0;
	while (bombsCount < bombs) {
		const x = randomNum(0, row - 1);
		const y = randomNum(0, col - 1);

		if (board[x][y].value === 0) {
			board[x][y].value = "X";
			mineLocation.push([x, y]);
			bombsCount++;
		}
	}

	for (let _row = 0; _row < row; _row++) {
		for (let _col = 0; _col < col; _col++) {
			if (board[_row][_col].value === "X") continue;

			let count = 0;

			if (_row > 0 && board[_row - 1][_col].value === "X") count++;

			if (
				_row > 0 &&
				_col < col - 1 &&
				board[_row - 1][_col + 1].value === "X"
			)
				count++;

			if (_col < col - 1 && board[_row][_col + 1].value === "X") count++;

			if (
				_row < row - 1 &&
				_col < col - 1 &&
				board[_row + 1][_col + 1].value === "X"
			)
				count++;

			if (_row < row - 1 && board[_row + 1][_col].value === "X") count++;

			if (
				_row < row - 1 &&
				_col > 0 &&
				board[_row + 1][_col - 1].value === "X"
			)
				count++;

			if (_col > 0 && board[_row][_col - 1].value === "X") count++;

			if (_row > 0 && _col > 0 && board[_row - 1][_col - 1].value === "X")
				count++;

			board[_row][_col].value = count;
		}
	}
	return { board, mineLocation };
};

function randomNum(min = 0, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
