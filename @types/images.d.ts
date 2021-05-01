declare module "*.jpg" {
	const image: string;
	export default image;
}

declare module "*.jpeg" {
	const image: string;
	export default image;
}

declare module "*.png" {
	const image: string;
	export default image;
}

declare module "*.gif" {
	const image: string;
	export default image;
}

declare module "*.ico" {
	const image: string;
	export default image;
}

declare module "*.webp" {
	const image: string;
	export default image;
}

type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module "*.svg" {
	export const ReactComponent: SvgrComponent;
	const url: string;
	export default url;
}
