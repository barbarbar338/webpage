import { CSSProperties, FC } from "react";
import Img from "next/image";
import useDimensions from "react-cool-dimensions";

export interface IImageProps {
	src: StaticImageData | string;
	className?: string;
	imageClassName?: string;
	style?: CSSProperties;
	layout?: "intrinsic" | "fixed" | "responsive" | "fill";
	width?: number;
	height?: number;
}

export const CustomImage: FC<IImageProps> = ({
	src,
	className,
	imageClassName,
	style,
	layout,
	height,
	width,
}) => {
	const { observe, width: w } = useDimensions<HTMLDivElement | null>();

	return (
		<div ref={observe} className={className} style={style}>
			<Img
				sizes={w !== undefined ? `${Math.round(w)}px` : "100vw"}
				alt={"Placeholder"}
				layout={layout ? layout : "responsive"}
				draggable={false}
				quality={65}
				src={src as unknown as StaticImageData} // a little typehack for string sources
				width={width}
				height={height}
				className={imageClassName}
			/>
		</div>
	);
};
