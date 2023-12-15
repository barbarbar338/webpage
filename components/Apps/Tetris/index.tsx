/* eslint-disable no-mixed-spaces-and-tabs */
import { useLocaleParser } from "@libs/localeParser";
import dynamic from "next/dynamic";
import { useEffect, useState, type FC } from "react";
import { toast } from "react-toastify";

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
					<div className="relative flex min-h-screen flex-col items-center">
						<>
							<div className="mb-4 flex ">
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
							<div className="mb-4 flex ">
								<div className="px-2">
									<Gameboard />
								</div>
								<div className="px-2">
									<PieceQueue />
								</div>
							</div>
							<div className="mb-4 grid grid-cols-2 gap-4 md:flex ">
								<div className="md:w-1/5">
									<button
										onClick={controller.moveLeft}
										className="mb-3 inline-block w-full rounded-xl bg-blue-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mb-0"
									>
										{parser.get("left")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.moveRight}
										className="mb-3 inline-block w-full rounded-xl bg-blue-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mb-0"
									>
										{parser.get("right")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.flipClockwise}
										className="mb-3 inline-block w-full rounded-xl bg-blue-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mb-0"
									>
										{parser.get("rotate")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.hardDrop}
										className="mb-3 inline-block w-full rounded-xl bg-blue-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mb-0"
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
										className="mb-3 inline-block w-full rounded-xl bg-blue-600 px-6 py-2 font-semibold leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mb-0 lg:w-auto"
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
