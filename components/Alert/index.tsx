import {
	faCheck,
	faExclamationTriangle,
	faInfo,
	faSkullCrossbones,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FC } from "react";

export interface IAlertProps {
	type: "success" | "warning" | "error" | "info";
	message: string;
	title: string;
	onClose?: () => void;
}

const icons = {
	success: faCheck,
	warning: faExclamationTriangle,
	error: faSkullCrossbones,
	info: faInfo,
};

const bgColors = {
	success: "bg-green-100",
	warning: "bg-yellow-100",
	error: "bg-red-100",
	info: "bg-blue-100",
};

const textColors = {
	success: "text-green-700",
	warning: "text-yellow-700",
	error: "text-red-700",
	info: "text-blue-700",
};

export const Alert: FC<IAlertProps> = ({ message, type, title, onClose }) => {
	return (
		<div
			className={classNames(
				"flex",
				"rounded-lg",
				"p-4",
				"mb-4",
				"text-sm",
				textColors[type],
				bgColors[type],
			)}
			role="alert"
		>
			<FontAwesomeIcon
				icon={icons[type]}
				className="w-5 h-5 inline mr-3"
			/>
			<div>
				<span className="font-medium">{title}:</span> {message}
			</div>
			{onClose && (
				<div
					onClick={onClose}
					className="flex flex-auto flex-row-reverse"
				>
					<FontAwesomeIcon
						icon={faTimes}
						className="w-5 h-5 cursor-pointer"
					/>
				</div>
			)}
		</div>
	);
};
