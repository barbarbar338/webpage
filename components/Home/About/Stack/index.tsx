import type { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";
import { Tippy } from "@components/Utils/Tippy";
import { CONFIG } from "@libs/config";
import Tilt from "react-parallax-tilt";
import { useLocaleParser } from "@libs/localeParser";

export const Stack: FC = () => {
	const parser = useLocaleParser();

	return (
		<section className="bg-white dark:bg-gray-900 text-black dark:text-white">
			<h1 className="text-4xl mb-10 text-center font-semibold font-heading">
				{parser.get("stack")}
			</h1>
			<div className="container mx-auto px-4">
				<div className="flex flex-col justify-center">
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
						{CONFIG.STACKS.map((stack, idx) => (
							<Tilt
								key={idx}
								scale={1.05}
								tiltMaxAngleX={20}
								tiltMaxAngleY={20}
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
