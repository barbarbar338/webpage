import type { FC } from "react";
import { useLanyard } from "react-use-lanyard";
import { Tippy } from "@components/Utils/Tippy";
import { CONFIG } from "@libs/config";
import classnames from "classnames";

export const Status: FC = () => {
	const { loading, status } = useLanyard({
		userId: CONFIG.LANYARD_ID,
		socket: true,
	});

	const getColor = () => {
		switch (status?.discord_status) {
			case "online":
				return {
					status: "Online",
					color: "bg-green-500",
				};
			case "idle":
				return {
					status: "Idle",
					color: "bg-yellow-500",
				};
			case "dnd":
				return {
					status: "Do Not Disturb",
					color: "bg-red-500",
				};
			default:
				return {
					status: "Offline",
					color: "bg-gray-500 dark:bg-gray-200",
				};
		}
	};

	const getStatus = () => {
		if (loading || !status || status.discord_status == "offline")
			return "Offline";

		const filtered = status.activities
			?.filter((activity) => activity.type !== 4)
			?.pop();
		if (!filtered) return "Online";

		switch (filtered.name) {
			case "Spotify":
				return `Listening to ${filtered.details} by ${filtered.state} from ${filtered.assets.large_text} on Spotify.`;
			case "Visual Studio Code":
				return `${filtered.details} in Visual Studio Code. (${filtered.state})`;
			default:
				if (filtered.name) return `Playing ${filtered.name}`;
				return "Online";
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
