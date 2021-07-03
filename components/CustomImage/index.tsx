import { CSSProperties, FC } from "react";

export interface IImageProps {
	src: string;
	alt: string;
	className?: string;
	style?: CSSProperties;
}

export const CustomImage: FC<IImageProps> = ({
	src,
	className,
	style,
	alt,
}) => {
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={className}
			style={style}
			alt={alt}
			draggable={false}
			src={src}
		/>
	);
};
