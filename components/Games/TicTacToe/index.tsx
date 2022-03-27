import { calculateWinner } from "@libs/games/tictactoe/calculateWinner";
import { TicTacToeBoard } from "./Board";
import { toast } from "react-toastify";
import { useState } from "react";

export const TicTacToeGame = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(history[stepNumber]);
	const xO = xIsNext ? "X" : "O";

	if (winner) toast.success(`${winner} won!`);

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
		<div className="flex flex-col min-h-screen">
			<div className="flex justify-center mb-4">
				<button
					onClick={restart}
					className="inline-block mb-3 mx-5 lg:mb-0 lg:mr-3 w-full lg:w-1/5 py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
				>
					restart
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
