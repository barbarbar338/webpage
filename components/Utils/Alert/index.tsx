import classNames from "classnames";
import { FC } from "react";
import {
	FiAlertOctagon,
	FiCheckCircle,
	FiInfo,
	FiX,
	FiXOctagon,
} from "react-icons/fi";

export interface IAlertProps {
	type: "success" | "warning" | "error" | "info";
	title: string;
	onClose?: () => void;
}

const icons = {
	success: FiCheckCircle,
	warning: FiAlertOctagon,
	error: FiXOctagon,
	info: FiInfo,
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

export const Alert: FC<IAlertProps> = ({ children, type, title, onClose }) => {
	const Icon = icons[type];

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
			<Icon className="w-5 h-5 inline mr-3" />
			<div>
				<span className="font-medium">{title}:</span> {children}
			</div>
			{onClose && (
				<div
					onClick={onClose}
					className="flex flex-auto flex-row-reverse"
				>
					<FiX className="w-5 h-5 cursor-pointer" />
				</div>
			)}
		</div>
	);
};
