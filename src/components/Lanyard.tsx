import classnames from "classnames";
import type { FC } from "react";
import { useLanyard } from "react-use-lanyard";

export const Status: FC = () => {
	const { loading, status } = useLanyard({
		userId: "952574663916154960",
		socket: true,
	});

	const getColor = () => {
		switch (status?.discord_status) {
			case "online":
				return {
					status: "online",
					color: "bg-green-500",
				};
			case "idle":
				return {
					status: "idle",
					color: "bg-yellow-500",
				};
			case "dnd":
				return {
					status: "do not disturb",
					color: "bg-red-500",
				};
			default:
				return {
					status: "offline",
					color: "bg-gray-500 dark:bg-gray-200",
				};
		}
	};

	const getStatus = () => {
		if (loading || !status || status.discord_status == "offline")
			return "offline";

		const filtered = status.activities
			?.filter((activity) => activity.type !== 4)
			?.pop();
		if (!filtered) return "online";

		switch (filtered.name) {
			case "Spotify":
				return `listening to ${filtered.details} by ${filtered.state} from ${filtered.assets?.large_text} on spotify`;
			case "Visual Studio Code":
				return `${filtered.details} in visual studio code. (${filtered.state})`;
			default:
				if (filtered.name) return `playing ${filtered.name}`;
				return "online";
		}
	};

	return (
		<span className="mb-4 flex items-center space-x-2 rounded-md text-gray-700 dark:text-gray-300">
			<span
				title={getColor().status}
				className={classnames(
					"h-3",
					"w-3",
					"rounded-full",
					"flex-shrink-0",
					getColor().color,
				)}
			/>
			<span className="truncate text-sm" title={getStatus()}>
				{getStatus()}
			</span>
		</span>
	);
};
