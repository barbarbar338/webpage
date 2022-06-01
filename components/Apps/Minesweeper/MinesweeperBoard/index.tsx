import { type FC, type MouseEvent, useState, useEffect } from "react";
import { type ICell, reveal } from "@libs/apps/minesweeper/reveal";
import { createMinesweeperBoard } from "@libs/apps/minesweeper/createMinesweeperBoard";
import { MinesweeperCell } from "@components/Apps/Minesweeper/MinesweeperCell";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { toast } from "react-toastify";

export const MinesweeperBoard: FC = () => {
	const parser = useLocaleParser();

	const [x, setX] = useState(10);
	const [y, setY] = useState(10);
	const [mine, setMine] = useState(10);
	const [grid, setGrid] = useState<ICell[][]>([]);
	const [nonMineCount, setNonMineCount] = useState(0);
	const [mineLocations, setMineLocations] = useState<number[][]>([]);
	const [gameOver, setGameOver] = useState(false);

	const freshBoard = (x: number, y: number, mine: number) => {
		const newBoard = createMinesweeperBoard(x, y, mine);
		setNonMineCount(x * y - mine);
		setMineLocations(newBoard.mineLocation);
		setGrid(newBoard.board);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => freshBoard(x, y, mine), []);

	const restartGame = () => {
		if (x * y < mine) {
			toast.error(parser.get("mine_and_cells_doesnt_matches"));
			return;
		}
		freshBoard(x, y, mine);
		setGameOver(false);
	};

	const updateFlag = (
		e: MouseEvent<HTMLDivElement, MouseEvent>,
		x: number,
		y: number,
	) => {
		e.preventDefault();
		const newGrid = JSON.parse(JSON.stringify(grid));
		newGrid[x][y].flagged = !newGrid[x][y].flagged;
		setGrid(newGrid);
	};

	const revealCell = (x: number, y: number) => {
		if (grid[x][y].revealed || gameOver || grid[x][y].flagged) return;

		const newGrid = JSON.parse(JSON.stringify(grid));
		if (newGrid[x][y].value === "X") {
			for (let i = 0; i < mineLocations.length; i++)
				newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed =
					true;

			setGrid(newGrid);
			setGameOver(true);
			toast.error(parser.get("lose"));
		} else {
			const newRevealedBoard = reveal(newGrid, x, y, nonMineCount);
			setGrid(newRevealedBoard.arr);
			setNonMineCount(newRevealedBoard.newNonMinesCount);

			if (newRevealedBoard.newNonMinesCount === 0) {
				setGameOver(true);
				toast.success(parser.get("win"));
			}
		}
	};

	return (
		<div className="min-h-screen flex relative items-center flex-col">
			<div className="flex mb-4 ">
				<div className="w-1/3 px-2">
					<input
						onChange={(e) => setX(parseInt(e.target.value))}
						className="appearance-none w-full py-3 px-4 hidden md:block leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 round focus:outline-none"
						type="number"
						placeholder="X"
						value={x}
						min={1}
					/>
				</div>
				<div className="w-1/3 px-2">
					<input
						onChange={(e) => setY(parseInt(e.target.value))}
						className="appearance-none w-full py-3 px-4 hidden md:block leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 round focus:outline-none"
						type="number"
						placeholder="Y"
						value={y}
						min={1}
					/>
				</div>
				<div className="w-1/3 px-2">
					<input
						onChange={(e) => setMine(parseInt(e.target.value))}
						className="appearance-none w-full py-3 px-4 hidden md:block leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 round focus:outline-none"
						type="number"
						placeholder={parser.get("mine") as string}
						value={mine}
						min={1}
					/>
				</div>
			</div>
			<button
				className="inline-block mb-3 lg:mr-3 w-2/3 text-center lg:w-96 py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
				onClick={restartGame}
			>
				Restart
			</button>
			<br />
			<div>
				{grid.map((singleRow, idx) => {
					return (
						<div className="flex" key={idx}>
							{singleRow.map((singleBlock, idx) => {
								return (
									<MinesweeperCell
										revealCell={revealCell}
										details={singleBlock}
										updateFlag={updateFlag}
										key={idx}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
			<br />
			<Link
				href="/apps"
				underline={false}
				className="inline-block  lg:mr-3 w-2/3 text-center mt-3 lg:w-96 py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold round transition duration-200"
			>
				{parser.get("go_back")}
			</Link>
		</div>
	);
};
