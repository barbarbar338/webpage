import { type FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Tetris = dynamic(() => import("react-tetris"), { ssr: false });

export const TetrisGame: FC = () => {
	const [lose, setLose] = useState(false);

	useEffect(() => {
		document.onkeydown = (e) => e.preventDefault();
	}, []);

	return (
		<div>
			<Tetris>
				{({
					HeldPiece,
					Gameboard,
					PieceQueue,
					points,
					linesCleared,
					state,
					controller,
				}) => (
					<div className="min-h-screen flex relative items-center flex-col">
						<div className="flex mb-4 ">
							<div className="w-1/2 px-2">
								<HeldPiece />
							</div>
							<div className="w-1/2 px-2">
								<p>Points: {points}</p>
								<p>Lines Cleared: {linesCleared}</p>
							</div>
						</div>
						<div className="flex mb-4 ">
							<div className="px-2">
								<Gameboard />
							</div>
							<div className="px-2">
								<PieceQueue />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4 md:flex mb-4 ">
							<div className="md:w-1/5">
								<button
									onClick={controller.moveLeft}
									className="inline-block mb-3 lg:mb-0  w-full py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
								>
									left
								</button>
							</div>
							<div className="md:w-1/5">
								<button
									onClick={controller.moveRight}
									className="inline-block mb-3 lg:mb-0  w-full  py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
								>
									right
								</button>
							</div>
							<div className="md:w-1/5">
								<button
									onClick={controller.flipClockwise}
									className="inline-block mb-3 lg:mb-0  w-full  py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
								>
									rotate
								</button>
							</div>
							<div className="md:w-1/5">
								<button
									onClick={controller.hardDrop}
									className="inline-block mb-3 lg:mb-0  w-full  py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
								>
									drop
								</button>
							</div>
							<div className="md:w-1/5">
								<button
									onClick={() => {
										setLose(false);
										controller.restart();
									}}
									className="inline-block mb-3 lg:mb-0  w-full lg:w-auto py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
								>
									restart
								</button>
							</div>
						</div>

						{state === "LOST" && !lose
							? toast.error("Game Over!") && setLose(true)
							: ""}
					</div>
				)}
			</Tetris>
		</div>
	);
};
