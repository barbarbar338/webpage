import type { FC, JSXElementConstructor, ReactElement } from "react";
import type { Instance, Props } from "tippy.js";
import TippyJS from "@tippyjs/react/headless";
import { useSpring, m } from "framer-motion";

export interface ITippyProps {
	tooltip: string;
}

export const Tippy: FC<ITippyProps> = ({ children, tooltip }) => {
	const springConfig = { damping: 15, stiffness: 300 };
	const initialScale = 0.5;
	const opacity = useSpring(0, springConfig);
	const scale = useSpring(initialScale, springConfig);

	const onMount = () => {
		scale.set(1);
		opacity.set(1);
	};

	const onHide = ({ unmount }: Instance<Props>) => {
		const cleanup = scale.onChange((value) => {
			if (value <= initialScale) {
				cleanup();
				unmount();
			}
		});

		scale.set(initialScale);
		opacity.set(0);
	};

	return (
		<TippyJS
			render={(attrs) => (
				<m.div
					style={{ scale, opacity }}
					{...attrs}
					className="bg-gray-700 text-white rounded-t-lg rounded-bl-lg p-2"
				>
					{tooltip}
				</m.div>
			)}
			animation={true}
			onMount={onMount}
			onHide={onHide}
		>
			{
				children as ReactElement<
					never,
					string | JSXElementConstructor<never>
				>
			}
		</TippyJS>
	);
};
