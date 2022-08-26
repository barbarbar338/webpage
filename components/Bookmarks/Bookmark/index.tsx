import type { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { useCopyToClipboard } from "react-use";
import { Link } from "@components/Utils/Link";
import { toast } from "react-toastify";
import moment from "moment";
// TODO: use luxon for date formatting

export interface IBookmark {
	id: number;
	url: string;
	title: string;
	description: string;
	imageUrl: string;
	createdAt: string;
}

export const Bookmark: FC<IBookmark> = ({
	createdAt,
	description,
	imageUrl,
	title,
	url,
}) => {
	const parser = useLocaleParser();

	const [, copyToClipboard] = useCopyToClipboard();

	const onCopy = () => {
		copyToClipboard(url);
		toast.success(parser.get("url_copied"));
	};

	return (
		<div>
			<Link href={url}>
				<div
					onClick={onCopy}
					className="my-20 max-w-md rounded-lg bg-white py-4 px-8 shadow-lg dark:bg-gray-800"
				>
					<div className="-mt-16 flex justify-center md:justify-end">
						<CustomImage
							className="h-20 w-20 rounded-full border-2 border-purple-500 object-cover"
							src={imageUrl}
							alt={title}
						/>
					</div>
					<div>
						<h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
							{title}
						</h2>
						<p className="mt-2 text-gray-600 dark:text-gray-500">
							{description}
						</p>
					</div>
					<div className="mt-4 flex justify-end">
						<span className="text-xl font-medium text-indigo-500">
							{parser.get("bookmarked", {
								date: moment(createdAt).calendar(),
							})}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};
