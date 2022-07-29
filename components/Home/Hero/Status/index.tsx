import type { FC } from "react";
import { useLocaleParser } from "@libs/localeParser";
import { Tippy } from "@components/Utils/Tippy";
import { CONFIG } from "@libs/config";
import { useLanyard } from "react-use-lanyard";
import classnames from "classnames";

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
					status: parser.get("online"),
					color: "bg-green-500",
				};
			case "idle":
				return {
					status: parser.get("idle"),
					color: "bg-yellow-500",
				};
			case "dnd":
				return {
					status: parser.get("dnd"),
					color: "bg-red-500",
				};
			default:
				return {
					status: parser.get("offline"),
					color: "bg-gray-500 dark:bg-gray-200",
				};
		}
	};

	const getStatus = () => {
		if (loading || !status || status.discord_status == "offline")
			return parser.get("offline");

		const filtered = status.activities
			?.filter((activity) => activity.type !== 4)
			?.pop();
		if (!filtered) return parser.get("online");

		switch (filtered.name) {
			case "Spotify":
				return parser.get("spotify_status", {
					song: filtered.details,
					author: filtered.state,
					album: filtered.assets.large_text,
				});
			case "Visual Studio Code":
				return parser.get("vscode_status", {
					doing: filtered.details,
					workspace: filtered.state,
				});
			default:
				if (filtered.name)
					return parser.get("playing", {
						game: filtered.name,
					});
				return parser.get("online");
		}
	};

	return (
		<span className="rounded-md flex items-center space-x-2 text-gray-700 dark:text-gray-300">
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
				<span className="truncate text-sm">{getStatus()}</span>
			</Tippy>
		</span>
	);
};
