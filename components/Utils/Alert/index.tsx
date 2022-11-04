import classNames from "classnames";
import type { FC, ReactNode } from "react";
import {
	FiAlertOctagon,
	FiCheckCircle,
	FiInfo,
	FiX,
	FiXOctagon,
} from "react-icons/fi";

export type IType<T> = {
	[key in keyof typeof icons]: T;
};

const icons = {
	success: FiCheckCircle,
	warning: FiAlertOctagon,
	error: FiXOctagon,
	info: FiInfo,
};

export interface IAlertProps {
	type: keyof typeof icons;
	title: string;
	onClose?: () => void;
	children?: ReactNode;
	html?: string;
}

const bgColors: IType<string> = {
	success: "bg-green-100",
	warning: "bg-yellow-100",
	error: "bg-red-100",
	info: "bg-blue-100",
};

const textColors: IType<string> = {
	success: "text-green-700",
	warning: "text-yellow-700",
	error: "text-red-700",
	info: "text-blue-700",
};

export const Alert: FC<IAlertProps> = ({
	children,
	type,
	title,
	onClose,
	html,
}) => {
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
			<Icon className="mr-3 inline h-5 w-5" />
			<div>
				<span className="font-medium">{title}:</span>{" "}
				{html ? (
					<p
						dangerouslySetInnerHTML={{
							__html: html,
						}}
					/>
				) : (
					<p>{children}</p>
				)}
			</div>
			{onClose && (
				<div
					onClick={onClose}
					className="flex flex-auto flex-row-reverse"
				>
					<FiX className="h-5 w-5 cursor-pointer" />
				</div>
			)}
		</div>
	);
};
