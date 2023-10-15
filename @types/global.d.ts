declare module "*.yaml" {
	export const value: {
		[key: string]: string | string[];
	};
}
