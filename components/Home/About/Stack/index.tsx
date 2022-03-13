import type { FC } from "react";
import { Tippy } from "@components/Utils/Tippy";
import Tilt from "react-tilt";
import { CONFIG } from "@libs/config";
import { CustomImage } from "@components/Utils/CustomImage";

export const Stack: FC = () => {
	return (
		<section className="bg-white dark:bg-gray-900 text-black dark:text-white">
			<h1 className="text-4xl mb-10 text-center font-semibold font-heading">
				Tech Stack
			</h1>
			<div className="container mx-auto px-4">
				<div className="flex flex-col justify-center">
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
						{CONFIG.STACKS.map((stack, idx) => (
							<Tilt
								key={idx}
								className="Tilt"
								options={{
									max: 20,
									reverse: false,
									scale: 1.05,
								}}
							>
								<Tippy tooltip={stack.alt}>
									<div className="p-4 round flex justify-around items-center bg-gray-200 dark:bg-gray-800">
										<CustomImage
											className="w-16 h-16"
											src={stack.icon}
											alt={stack.alt}
										/>
									</div>
								</Tippy>
							</Tilt>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
