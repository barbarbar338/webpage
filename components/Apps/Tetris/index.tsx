/* eslint-disable no-mixed-spaces-and-tabs */
import { type FC, useEffect, useState } from "react";
import { useLocaleParser } from "@libs/localeParser";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Tetris = dynamic(() => import("react-simple-tetris"), { ssr: false });

export const TetrisGame: FC = () => {
	const parser = useLocaleParser();

	const [lose, setLose] = useState(false);

	const handleKeyDown = (e: KeyboardEvent) => e.preventDefault();

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
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
					<div className="relative flex flex-col items-center min-h-screen">
						<>
							<div className="flex mb-4 ">
								<div className="w-1/2 px-2">
									<HeldPiece />
								</div>
								<div className="w-1/2 px-2">
									<p>
										{parser.get("points", {
											points: points.toString(),
										})}
									</p>
									<p>
										{parser.get("cleared", {
											lines: linesCleared.toString(),
										})}
									</p>
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
							<div className="grid grid-cols-2 gap-4 mb-4 md:flex ">
								<div className="md:w-1/5">
									<button
										onClick={controller.moveLeft}
										className="inline-block w-full px-6 py-2 mb-3 font-semibold leading-loose text-white transition duration-200 bg-blue-600 lg:mb-0 hover:bg-blue-700 round"
									>
										{parser.get("left")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.moveRight}
										className="inline-block w-full px-6 py-2 mb-3 font-semibold leading-loose text-white transition duration-200 bg-blue-600 lg:mb-0 hover:bg-blue-700 round"
									>
										{parser.get("right")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.flipClockwise}
										className="inline-block w-full px-6 py-2 mb-3 font-semibold leading-loose text-white transition duration-200 bg-blue-600 lg:mb-0 hover:bg-blue-700 round"
									>
										{parser.get("rotate")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.hardDrop}
										className="inline-block w-full px-6 py-2 mb-3 font-semibold leading-loose text-white transition duration-200 bg-blue-600 lg:mb-0 hover:bg-blue-700 round"
									>
										{parser.get("drop")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={() => {
											setLose(false);
											controller.restart();
										}}
										className="inline-block w-full px-6 py-2 mb-3 font-semibold leading-loose text-white transition duration-200 bg-blue-600 lg:mb-0 lg:w-auto hover:bg-blue-700 round"
									>
										{parser.get("restart")}
									</button>
								</div>
							</div>

							{state === "LOST" && !lose
								? toast.error(parser.get("game_over")) &&
								  setLose(true)
								: ""}
						</>
					</div>
				)}
			</Tetris>
		</div>
	);
};
