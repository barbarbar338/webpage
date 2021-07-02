import { CSSProperties, FC } from "react";
import Img from "next/image";
import useDimensions from "react-cool-dimensions";

export interface IImageProps {
	src: StaticImageData | string;
	className?: string;
	style?: CSSProperties;
	layout?: "intrinsic" | "fixed" | "responsive" | "fill";
}

export const CustomImage: FC<IImageProps> = ({
	src,
	className,
	style,
	layout,
}) => {
	const { observe, width } = useDimensions<HTMLDivElement | null>();

	return typeof src === "string" ? (
		<img
			src={src}
			alt="Image"
			className={className}
			draggable={false}
			style={style}
		/>
	) : (
		<div ref={observe} className={className} style={style}>
			<Img
				sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
				alt={src.placeholder}
				layout={layout ? layout : "responsive"}
				draggable={false}
				quality={65}
				src={src}
			/>
		</div>
	);
};
