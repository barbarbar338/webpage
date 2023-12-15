import Favicon from "@assets/icon.svg";
import { NavbarSeperator } from "@components/Layout/NavbarSeperator";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { shimmer } from "@libs/shimmer";
import classnames from "classnames";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState, type FC } from "react";
import {
	FiArrowUp,
	FiMenu,
	FiMonitor,
	FiMoon,
	FiSun,
	FiX,
} from "react-icons/fi";
import type { IconType } from "react-icons/lib";

export const Navbar: FC = () => {
	const parser = useLocaleParser();

	const [visible, setVisible] = useState(false);
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
		/* {
			name: parser.get("bookmarks"),
			href: "/bookmarks",
		}, */
		{
			name: parser.get("apps"),
			href: "/apps",
		},
		{
			name: parser.get("changelog"),
			href: "/changelog",
		},
		{
			name: parser.get("resume"),
			href: "/resume",
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

	const onUp = () => {
		window.location.href = "#";
	};

	return (
		<>
			<nav className="flex items-center justify-between bg-white px-6 py-6 dark:bg-gray-900">
				<Link href="/#">
					<Image
						placeholder="blur"
						blurDataURL={shimmer(64, 64)}
						width={64}
						height={64}
						className="cursor-pointer"
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
				<ul className="hidden gap-2 lg:mx-auto lg:flex lg:w-full lg:items-center lg:justify-center">
					<NavbarSeperator />
					{links.map((link, idx) => (
						<Fragment key={idx}>
							<li className="cursor-pointer text-sm text-black hover:text-gray-500 hover:underline dark:text-gray-300 dark:hover:text-white">
								<Link href={link.href}>
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
				<div className="flex">
					<button
						aria-label="Change Theme"
						onClick={onTheme}
						className="mr-2 hidden h-10 w-10 rounded-xl bg-purple-700 text-sm text-white hover:bg-purple-800 focus:outline-none lg:block"
					>
						{getIcon()}
					</button>
					<Link href="/#contact">
						<span className="hidden cursor-pointer rounded-xl bg-purple-700 px-6 py-2 text-sm font-bold text-white hover:bg-purple-800 lg:block">
							{parser.get("contact")}
						</span>
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
				<nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto bg-gray-100 px-6 py-6 dark:bg-gray-900">
					<div className="mb-8 flex items-center">
						<Link href="/#">
							<Image
								width={64}
								height={64}
								src={Favicon}
								alt="Favicon"
								blurDataURL={shimmer(64, 64)}
								placeholder="blur"
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
								<li
									key={idx}
									className="mb-1 block cursor-pointer rounded-xl p-4 text-sm font-semibold text-gray-500 hover:bg-purple-600 hover:text-white dark:hover:bg-gray-800"
								>
									<Link href={link.href}>
										<span
											dangerouslySetInnerHTML={{
												__html: link.name,
											}}
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-auto">
						<Link href="/#contact">
							<div className="mb-2 block cursor-pointer rounded-xl bg-purple-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-purple-700">
								{parser.get("contact")}
							</div>
						</Link>
						<p className="my-4 text-center text-xs text-gray-600 dark:text-gray-400">
							<span>
								&copy; 2020 - {CONFIG.NOW} All rights reserved |
								Barış DEMİRCİ
							</span>
						</p>
						<div className="text-center">
							{CONFIG.CONTACT.map((social, idx) => (
								<Link
									key={idx}
									href={social.href}
									target="_blank"
								>
									<social.icon className="mx-2 inline-block cursor-pointer text-black dark:text-white" />
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
