import { IRepo } from "@lib/rest";

export interface IState {
	name: string;
	children?: IState[];
	url?: string;
}

export const handleTreeData = (repo: IRepo): IState => {
	const state: IState = {
		name: `${repo.repo} - ${repo.branch}`,
		children: [],
	};

	for (const file of repo.files) {
		const path = file.split("/");
		let current = state;

		for (const part of path) {
			let child = current.children?.find((c) => c.name === part);

			if (!child) {
				child = {
					name: part,
					url: `/git/${repo.repo}/browse/${file}`,
				};
				if (!current.children) current.children = [];
				if (current.url) delete current.url;
				current.children.push(child);
			}

			current = child;
		}
	}

	return state;
};
