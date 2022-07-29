import { calculateWinner } from "@libs/apps/tictactoe/calculateWinner";
import { TicTacToeBoard } from "@components/Apps/TicTacToe/Board";
import { useLocaleParser } from "@libs/localeParser";
import { toast } from "react-toastify";
import { useState } from "react";

export const TicTacToeGame = () => {
	const parser = useLocaleParser();

	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(history[stepNumber]);
	const xO = xIsNext ? "X" : "O";

	if (winner)
		toast.success(
			parser.get("winner", {
				player: winner,
			}),
		);

	const handleClick = (i: number) => {
		const historyPoint = history.slice(0, stepNumber + 1);
		const current = historyPoint[stepNumber];
		const squares = [...current];
		if (winner || squares[i]) return;
		squares[i] = xO;
		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXisNext(!xIsNext);
	};

	const restart = () => {
		setStepNumber(0);
		setHistory([Array(9).fill(null)]);
		setXisNext(true);
	};

	return (
		<div className="flex min-h-screen flex-col">
			<div className="mb-4 flex justify-center">
				<button
					onClick={restart}
					className="round mx-5 mb-3 inline-block w-full bg-blue-600 py-2 px-6 font-semibold leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mb-0 lg:mr-3 lg:w-1/5"
				>
					{parser.get("restart")}
				</button>
			</div>
			<div className="flex justify-center">
				<TicTacToeBoard
					squares={history[stepNumber]}
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};
