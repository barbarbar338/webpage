import type { FC } from "react";
import { Tippy } from "@components/Utils/Tippy";
import { CONFIG } from "@libs/config";
import { useLanyard } from "react-use-lanyard";
import classnames from "classnames";
import { useLocaleParser } from "@libs/localeParser";

export const Status: FC = () => {
	const parser = useLocaleParser();
	const { loading, status } = useLanyard({
		userId: CONFIG.LANYARD_ID,
		socket: true,
	});

	const getColor = () => {
		switch (status?.discord_status) {
			case "online":
				return {
					status: parser.get("online") as string,
					color: "bg-green-500",
				};
			case "idle":
				return {
					status: parser.get("idle") as string,
					color: "bg-yellow-500",
				};
			case "dnd":
				return {
					status: parser.get("dnd") as string,
					color: "bg-red-500",
				};
			default:
				return {
					status: parser.get("offline") as string,
					color: "bg-gray-500 dark:bg-gray-200",
				};
		}
	};

	const getStatus = () => {
		if (loading || !status || status.discord_status == "offline")
			return parser.get("offline") as string;

		const filtered = status.activities
			?.filter((activity) => activity.type !== 4)
			?.pop();
		if (!filtered) return parser.get("online") as string;

		switch (filtered.name) {
			case "Spotify":
				return parser.get("spotify_status", {
					song: filtered.details,
					author: filtered.state,
					album: filtered.assets.large_text,
				}) as string;
			case "Visual Studio Code":
				return parser.get("vscode_status", {
					doing: filtered.details,
					workspace: filtered.state,
				}) as string;
			default:
				if (filtered.name) return `Playing ${filtered.name}`;
				return parser.get("online") as string;
		}
	};

	return (
		<span className="rounded-md flex space-x-2 text-gray-700 items-center dark:text-gray-300">
			<Tippy tooltip={getColor().status}>
				<span
					className={classnames(
						"h-3",
						"w-3",
						"rounded-full",
						"flex-shrink-0",
						getColor().color,
					)}
				/>
			</Tippy>
			<Tippy tooltip={getStatus()}>
				<span className="text-sm truncate">{getStatus()}</span>
			</Tippy>
		</span>
	);
};
