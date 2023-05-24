import { MinesweeperCell } from "@components/Apps/Minesweeper/MinesweeperCell";
import { createMinesweeperBoard } from "@libs/apps/minesweeper/createMinesweeperBoard";
import { reveal, type ICell } from "@libs/apps/minesweeper/reveal";
import { useLocaleParser } from "@libs/localeParser";
import Link from "next/link";
import { useEffect, useState, type FC, type MouseEvent } from "react";
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
			setGrid(newRevealedBoard?.arr ?? []);
			setNonMineCount(newRevealedBoard?.newNonMinesCount || 0);

			if (newRevealedBoard?.newNonMinesCount === 0) {
				setGameOver(true);
				toast.success(parser.get("win"));
			}
		}
	};

	return (
		<div className="relative flex min-h-screen flex-col items-center">
			<div className="mb-4 flex ">
				<div className="w-1/3 px-2">
					<input
						onChange={(e) => setX(parseInt(e.target.value))}
						className="hidden w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none md:block"
						type="number"
						placeholder="X"
						value={x}
						min={1}
					/>
				</div>
				<div className="w-1/3 px-2">
					<input
						onChange={(e) => setY(parseInt(e.target.value))}
						className="hidden w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none md:block"
						type="number"
						placeholder="Y"
						value={y}
						min={1}
					/>
				</div>
				<div className="w-1/3 px-2">
					<input
						onChange={(e) => setMine(parseInt(e.target.value))}
						className="hidden w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none md:block"
						type="number"
						placeholder={parser.get("mine")}
						value={mine}
						min={1}
					/>
				</div>
			</div>
			<button
				className="mb-3 inline-block w-2/3 rounded-xl bg-blue-600 px-6 py-2 text-center font-semibold leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mr-3 lg:w-96"
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
			<Link href="/apps">
				<span className="mt-3 inline-block w-2/3 cursor-pointer rounded-xl bg-purple-600 px-6 py-2 text-center font-semibold leading-loose text-white transition duration-200 hover:bg-purple-700 lg:mr-3 lg:w-96">
					{parser.get("go_back")}
				</span>
			</Link>
		</div>
	);
};
