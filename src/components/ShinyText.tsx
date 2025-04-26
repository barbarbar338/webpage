/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React from "react";

interface ShinyTextProps {
	text: string;
	disabled?: boolean;
	speed?: number;
	className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
	text,
	disabled = false,
	speed = 5,
	className = "",
}) => {
	const animationDuration = `${speed}s`;

	return (
		<div
			className={`bg-shine inline-block bg-clip-text ${disabled ? "" : "animate-shine"} ${className}`}
			style={{
				animationDuration: animationDuration,
			}}
		>
			{text}
		</div>
	);
};

export default ShinyText;
