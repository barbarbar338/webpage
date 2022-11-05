declare module "*.yaml" {
	export const value: {
		[key: string]: string | string[];
	};
}

// this module has no type definitions and we are on strict mode. So we made a placeholder declaration for it.
declare module "react-folder-tree";
