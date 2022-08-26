import { type FC, Fragment, useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { NavbarSeperator } from "@components/Layout/NavbarSeperator";
import { CustomImage } from "@components/Utils/CustomImage";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { useTheme } from "next-themes";
import { CONFIG } from "@libs/config";
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
		return <Icon className={classnames("text-bold h-full w-full p-2")} />;
	};

	const onClose = () => {
		setVisible(!visible);
	};

	const onTheme = () => {
		switch (theme) {
			case "light":
				setTheme("dark");
				break;
			case "dark":
				setTheme("system");
				break;
			case "system":
				setTheme("light");
				break;
			default:
				setTheme("system");
				break;
		}
	};

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
			<nav className="flex items-center justify-between bg-white px-6 py-6 dark:bg-gray-900">
				<Link
					href="/#"
					className="block text-3xl font-bold leading-none text-white"
				>
					<CustomImage
						className="h-16 w-16"
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
				<ul className="hidden lg:mx-auto lg:flex  lg:w-full lg:justify-between">
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
									<span
										dangerouslySetInnerHTML={{
											__html: link.name,
										}}
									/>
								</Link>
							</li>
							<NavbarSeperator />
						</Fragment>
					))}
				</ul>
				<div className="flex ">
					<button
						aria-label="Change Theme"
						onClick={onTheme}
						className="mr-2 hidden h-10 w-10 rounded-xl bg-purple-700 text-sm text-white hover:bg-purple-800 focus:outline-none lg:block"
					>
						{getIcon()}
					</button>
					<Link
						underline
						href="/#contact"
						className="hidden rounded-xl bg-purple-700 py-2 px-6 text-sm font-bold text-white hover:bg-purple-800 lg:block"
					>
						{parser.get("contact")}
					</Link>
				</div>
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
								className="h-16 w-16"
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
											"block rounded-xl p-4 text-sm font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-gray-800",
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
								<span className="mb-2 block rounded-xl bg-purple-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-purple-700">
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
			<div className="fixed bottom-0 right-0 ">
				<div
					className={classnames(
						"mx-10 my-5 flex gap-4 transition-all duration-150 ease-in-out",
						{
							"opacity-0": !top,
						},
					)}
				>
					<button
						aria-label="Change Theme"
						onClick={onTheme}
						className={classnames(
							"h-10 w-10 rounded-xl bg-purple-600 text-white hover:bg-purple-700 focus:outline-none",
							{
								hidden: !top,
							},
						)}
					>
						{getIcon()}
					</button>
					<button
						aria-label="Go Up"
						onClick={onUp}
						className={classnames(
							"h-10 w-10 rounded-xl bg-purple-600 text-white hover:bg-purple-700 focus:outline-none",
							{
								hidden: !top,
							},
						)}
					>
						<FiArrowUp className="h-full w-full p-2" />
					</button>
				</div>
			</div>
		</>
	);
};
