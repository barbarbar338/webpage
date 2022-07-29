import type { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { Tippy } from "@components/Utils/Tippy";
import { CONFIG } from "@libs/config";
import Tilt from "react-parallax-tilt";

export const Stack: FC = () => {
	const parser = useLocaleParser();

	return (
		<section className="bg-white text-black dark:bg-gray-900 dark:text-white">
			<h1
				className="mb-10 text-center font-heading text-4xl font-semibold"
				dangerouslySetInnerHTML={{
					__html: parser.get("stack"),
				}}
			/>
			<div className="container mx-auto px-4">
				<div className="flex flex-col justify-center">
					<div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						{CONFIG.STACKS.map((stack, idx) => (
							<Tilt
								key={idx}
								scale={1.05}
								tiltMaxAngleX={20}
								tiltMaxAngleY={20}
							>
								<Tippy tooltip={stack.alt}>
									<div className="round flex items-center justify-around bg-gray-200 p-4 dark:bg-gray-800">
										<CustomImage
											className="h-16 w-16"
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
