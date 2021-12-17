import { Link } from "@components/Link";
import { FC, useState } from "react";
import { CONFIG } from "@libs/config";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const pages = [
	{
		name: "Home",
		path: "/blog",
	},
	{
		name: "Source",
		path: "https://github.com/barbarbar338/webpage/discussions",
	},
];

export const BlogNavbar: FC = () => {
	const [hidden, setHidden] = useState(true);

	return (
		<nav className="px-6 py-4">
			<div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<div>
						<Link
							href="/"
							underline={false}
							className="text-xl font-bold text-black dark:text-white md:text-2xl"
						>
							{CONFIG.NAME} {CONFIG.SURNAME}
						</Link>
					</div>
					<div>
						<button
							type="button"
							onClick={() => setHidden(!hidden)}
							className="block text-black dark:text-white focus:outline-none md:hidden"
						>
							<FontAwesomeIcon
								icon={faBars}
								className="w-6 h-6 fill-current"
							/>
						</button>
					</div>
				</div>
				<div
					className={classnames("flex flex-row -mx-4 md:block", {
						hidden: hidden,
					})}
				>
					{pages.map((page, idx) => (
						<Link
							key={idx}
							href={page.path}
							underline={false}
							className="my-1 text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 mx-4 my-0"
						>
							{page.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};
