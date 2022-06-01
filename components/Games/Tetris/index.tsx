import { type FC, useEffect, useState } from "react";
import { useLocaleParser } from "@libs/localeParser";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Tetris = dynamic(() => import("react-simple-tetris"), { ssr: false });

export const TetrisGame: FC = () => {
	const parser = useLocaleParser();

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
							<div className="grid grid-cols-2 gap-4 md:flex mb-4 ">
								<div className="md:w-1/5">
									<button
										onClick={controller.moveLeft}
										className="inline-block mb-3 lg:mb-0  w-full py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
									>
										{parser.get("left")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.moveRight}
										className="inline-block mb-3 lg:mb-0  w-full  py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
									>
										{parser.get("right")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.flipClockwise}
										className="inline-block mb-3 lg:mb-0  w-full  py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
									>
										{parser.get("rotate")}
									</button>
								</div>
								<div className="md:w-1/5">
									<button
										onClick={controller.hardDrop}
										className="inline-block mb-3 lg:mb-0  w-full  py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
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
										className="inline-block mb-3 lg:mb-0  w-full lg:w-auto py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold round transition duration-200"
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
