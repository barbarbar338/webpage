import { type FC, Fragment, useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { NavbarSeperator } from "@components/Layout/NavbarSeperator";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { CONFIG } from "@libs/config";
import { useTheme } from "next-themes";
import {
	FiArrowUp,
	FiMenu,
	FiMonitor,
	FiMoon,
	FiSun,
	FiX,
} from "react-icons/fi";
import Favicon from "@assets/icon.svg";
import classnames from "classnames";

export const Navbar: FC = () => {
	const parser = useLocaleParser();

	const [visible, setVisible] = useState(false);
	const [hash, setHash] = useState("");
	const [top, setTop] = useState(false);
	const { theme, setTheme } = useTheme();
	const [color, setColor] = useState<"yellow" | "gray" | "blue">("yellow");

	const links = [
		{
			name: parser.get("home"),
			href: "/#",
		},
		{
			name: parser.get("about"),
			href: "/#about",
		},
		{
			name: parser.get("projects"),
			href: "/#projects",
		},
		{
			name: parser.get("sponsors"),
			href: "/sponsors",
		},
		{
			name: parser.get("accounts"),
			href: "/accounts",
		},
		{
			name: parser.get("blog"),
			href: "/blog",
		},
		{
			name: parser.get("bookmarks"),
			href: "/bookmarks",
		},
		{
			name: parser.get("apps"),
			href: "/apps",
		},
		{
			name: parser.get("changelog"),
			href: "/changelog",
		},
	];

	const getIcon = () => {
		let Icon: IconType;
		switch (theme) {
			case "dark":
				Icon = FiMoon;
				break;
			case "light":
				Icon = FiSun;
				break;
			default:
				Icon = FiMonitor;
				break;
		}
		return (
			<Icon
				className={classnames("text-bold", "h-full", "w-full", "p-2", {
					"text-yellow-400": color === "yellow",
					"text-gray-400": color === "gray",
					"text-blue-400": color === "blue",
				})}
			/>
		);
	};

	const onClose = () => {
		setVisible(!visible);
	};

	const onTheme = () => {
		switch (theme) {
			case "light":
				setTheme("dark");
				setColor("blue");
				break;
			case "dark":
				setTheme("system");
				setColor("gray");
				break;
			case "system":
				setTheme("light");
				setColor("yellow");
				break;
			default:
				setTheme("system");
				setColor("gray");
				break;
		}
	};

	useEffect(() => {
		switch (theme) {
			case "light":
				setColor("yellow");
				break;
			case "dark":
				setColor("blue");
				break;
			case "system":
				setColor("gray");
				break;
			default:
				setColor("yellow");
				break;
		}
	}, [theme]);

	useEffect(() => {
		window.onscroll = function () {
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			)
				setTop(true);
			else setTop(false);
		};
	}, []);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setHash(window.location.hash ? window.location.hash : "#");
	});

	const onUp = () => {
		window.location.href = "#";
	};

	return (
		<>
			<nav className="relative flex items-center justify-between bg-white px-6 py-6 dark:bg-gray-900">
				<Link
					href="/#"
					className="block text-3xl font-bold leading-none text-white"
				>
					<CustomImage
						className="h-12 w-12"
						src={Favicon}
						alt="Favicon"
					/>
				</Link>
				<div className="flex-grow" />
				<div className="lg:hidden">
					<button
						aria-label="Hamburger"
						onClick={onClose}
						className="flex items-center p-3 text-gray-900 focus:outline-none dark:text-white"
					>
						<FiMenu className="block h-4 w-4 fill-current" />
					</button>
				</div>
				<ul className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
					<NavbarSeperator />
					{links.map((link, idx) => (
						<Fragment key={idx}>
							<li>
								<Link
									underline
									href={link.href}
									className={classnames("text-sm", {
										"text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200":
											hash == link.href,
										"text-black hover:text-gray-500 dark:text-gray-300 dark:hover:text-white":
											hash != link.href,
									})}
								>
									{link.name}
								</Link>
							</li>
							<NavbarSeperator />
						</Fragment>
					))}
				</ul>
				<Link underline href="/#contact">
					<span className="round hidden bg-purple-700 py-2 px-6 text-sm font-bold text-white transition duration-200 hover:bg-purple-800 lg:inline-block">
						{parser.get("contact")}
					</span>
				</Link>
			</nav>
			<div
				className={classnames("relative", "z-50", {
					hidden: !visible,
				})}
			>
				<div
					onClick={onClose}
					className="fixed inset-0 bg-white opacity-25 dark:bg-gray-700"
				/>
				<nav className="fixed top-0 left-0 bottom-0 flex w-5/6 max-w-sm flex-col overflow-y-auto bg-gray-100 py-6 px-6 dark:bg-gray-900">
					<div className="mb-8 flex items-center">
						<Link
							underline
							href="/#"
							className=" mr-auto text-3xl font-bold leading-none"
						>
							<CustomImage
								className="h-10 w-10"
								src={Favicon}
								alt="Favicon"
							/>
						</Link>
						<div className="flex-grow" />
						<button
							aria-label="Close"
							onClick={onClose}
							className="focus:outline-none"
						>
							<FiX className="h-6 w-6 cursor-pointer text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500" />
						</button>
					</div>
					<div>
						<ul>
							{links.map((link, idx) => (
								<li key={idx} className="mb-1">
									<Link
										href={link.href}
										className={classnames(
											"block",
											"p-4",
											"text-sm",
											"font-semibold",
											"hover:bg-purple-600",
											"dark:hover:bg-gray-800",
											"hover:text-white",
											"round",
											{
												"text-black dark:text-white":
													hash == link.href,
												"text-gray-500":
													hash != link.href,
											},
										)}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-auto">
						<div>
							<Link href="/#contact">
								<span className="round mb-2 block bg-purple-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-purple-700">
									{parser.get("contact")}
								</span>
							</Link>
						</div>
						<p className="my-4 text-center text-xs text-gray-600 dark:text-gray-400">
							<span>
								&copy; 2020 - {CONFIG.NOW} All rights reserved |
								Barış DEMİRCİ
							</span>
						</p>
						<div className="text-center">
							{CONFIG.CONTACT.map((social, idx) => (
								<Link underline key={idx} href={social.href}>
									<social.icon className="mx-2 inline-block text-black dark:text-white" />
								</Link>
							))}
						</div>
					</div>
				</nav>
			</div>
			<button
				aria-label="Go Up"
				onClick={onUp}
				className={classnames(
					"fixed",
					"bottom-0",
					"right-0",
					"mx-10",
					"lg:mx-20",
					"my-10",
					"z-50",
					"text-white",
					"w-10",
					"h-10",
					"bg-purple-600",
					"hover:bg-purple-700",
					"round",
					"focus:outline-none",
					{
						block: top,
						hidden: !top,
					},
				)}
			>
				<FiArrowUp className="h-full w-full p-2" />
			</button>
			<button
				aria-label="Change Theme"
				onClick={onTheme}
				className="round fixed bottom-0 left-0 z-50 mx-10 my-10 block h-10 w-10 bg-purple-600 text-white hover:bg-purple-700 focus:outline-none lg:mx-20"
			>
				{getIcon()}
			</button>
		</>
	);
};
