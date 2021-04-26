import { FC, Fragment, useEffect, useState } from "react";
import Favicon from "@assets/icon.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUp,
	faBars,
	faLaptop,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarSeperator } from "@components/NavbarSeperator";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const links = [
	{
		name: "Home",
		href: "#",
	},
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Projects",
		href: "#projects",
	},
];

const socials = [
	{
		href: "https://github.com/barbarbar338",
		icon: faGithub,
	},
	{
		href: "https://instagram.com/ben_baris.d",
		icon: faInstagram,
	},
	{
		href: "https://www.youtube.com/channel/UC0tkTcxf5F3DdR3RJtaAuXg",
		icon: faYoutube,
	},
	{
		href: "https://discord.com/invite/BjEJFwh",
		icon: faDiscord,
	},
];

export const Navbar: FC = () => {
	const [visible, setVisible] = useState(false);
	const [hash, setHash] = useState("");
	const [top, setTop] = useState(false);
	const { theme, setTheme } = useTheme();
	const [icon, setIcon] = useState(faSun);
	const [color, setColor] = useState("yellow");

	const onClose = () => {
		setVisible(!visible);
	};

	const onTheme = () => {
		switch (theme) {
			case "light":
				setTheme("dark");
				setIcon(faMoon);
				setColor("blue");
				break;
			case "dark":
				setTheme("system");
				setIcon(faLaptop);
				setColor("gray");
				break;
			case "system":
				setTheme("light");
				setIcon(faSun);
				setColor("yellow");
				break;
			default:
				setTheme("system");
				setIcon(faLaptop);
				setColor("gray");
				break;
		}
	};

	useEffect(() => {
		switch (theme) {
			case "light":
				setIcon(faSun);
				setColor("yellow");
				break;
			case "dark":
				setIcon(faMoon);
				setColor("blue");
				break;
			case "system":
				setIcon(faLaptop);
				setColor("gray");
				break;
			default:
				setIcon(faSun);
				setColor("yellow");
				break;
		}
		window.onscroll = function () {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
				setTop(true);
			else setTop(false);
		};
	}, []);

	const onUp = () => {
		window.location.href = "#";
	};

	useEffect(() => {
		setHash(window.location.hash ? window.location.hash : "#");
	});

	return (
		<>
			<nav className="relative px-6 py-6 flex justify-between items-center bg-white dark:bg-gray-900">
				<Link href="#">
					<span className="cursor-pointer text-white text-3xl font-bold leading-none">
						<img
							className="h-12"
							src={Favicon}
							alt="Favicon"
							width="auto"
							draggable={false}
						/>
					</span>
				</Link>
				<div className="lg:hidden">
					<button
						onClick={onClose}
						className="flex items-center text-gray-900 dark:text-white p-3 focus:outline-none"
					>
						<FontAwesomeIcon icon={faBars} className="block h-4 w-4 fill-current" />
					</button>
				</div>
				<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
					<NavbarSeperator />
					{links.map((link, idx) => (
						<Fragment key={idx}>
							<li>
								<Link href={link.href}>
									<span
										className={`cursor-pointer text-sm ${
											hash == link.href
												? "text-purple-500 hover:text-purple-300"
												: "text-black hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
										}`}
									>
										{link.name}
									</span>
								</Link>
							</li>
							<NavbarSeperator />
						</Fragment>
					))}
				</ul>
				<Link href="#contact">
					<span className="cursor-pointer hidden lg:inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200">
						Contact
					</span>
				</Link>
			</nav>
			<div className={`${visible ? "" : "hidden "}relative z-50`}>
				<div
					onClick={onClose}
					className="fixed inset-0 bg-white dark:bg-gray-700 opacity-25"
				/>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
					<div className="flex items-center mb-8">
						<Link href="#">
							<span className="cursor-pointer mr-auto text-3xl font-bold leading-none">
								<img className="h-10" src={Favicon} alt="Favicon" width="auto" />
							</span>
						</Link>
						<button onClick={onClose} className="focus:outline-none">
							<FontAwesomeIcon
								icon={faTimes}
								className="h-6 w-6 cursor-pointer text-black dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-500"
							/>
						</button>
					</div>
					<div>
						<ul>
							{links.map((link, idx) => (
								<li key={idx} className="mb-1">
									<Link href={link.href}>
										<span
											className={`cursor-pointer block p-4 text-sm font-semibold ${
												hash == link.href ? "text-black dark:text-white" : "text-gray-500"
											} hover:bg-purple-600 dark:hover:bg-gray-800 hover:text-white rounded`}
										>
											{link.name}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-auto">
						<div className="pt-6">
							<Link href="#contact">
								<span className="cursor-pointer block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-pink-600 hover:bg-pink-700 rounded-l-xl rounded-t-xl">
									Contact
								</span>
							</Link>
						</div>
						<p className="my-4 text-xs text-center text-gray-600 dark:text-gray-400">
							<span>&copy; {new Date().getFullYear()} All rights reserved.</span>
						</p>
						<div className="text-center">
							{socials.map((social, idx) => (
								<a key={idx} href={social.href} target="_blank">
									<FontAwesomeIcon
										icon={social.icon}
										className="cursor-pointer inline-block text-black dark:text-white mx-2"
									/>
								</a>
							))}
						</div>
					</div>
				</nav>
			</div>
			<button
				onClick={onUp}
				className={`${
					top ? "block" : "hidden"
				} fixed bottom-0 right-0 mx-10 lg:mx-20 my-10 z-50 text-white w-10 h-10 bg-pink-400 rounded-full focus:outline-none`}
			>
				<FontAwesomeIcon icon={faArrowUp} />
			</button>
			<button
				onClick={onTheme}
				className="block fixed bottom-0 left-0 mx-10 lg:mx-20 my-10 z-50 text-white w-10 h-10 bg-purple-500 rounded-full focus:outline-none"
			>
				<FontAwesomeIcon icon={icon} className={`text-${color}-400 text-bold`} />
			</button>
		</>
	);
};
