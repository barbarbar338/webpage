import {
	faDiscord,
	faGithub,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { ChangeEvent, FC, FormEvent, Fragment, useState } from "react";
import { toast } from "react-toastify";

const socials = [
	{
		href: "mailto:demirci.baris38@gmail.com",
		icon: faEnvelope,
		name: "demirci.baris38@gmail.com",
	},
	{
		href: "https://github.com/barbarbar338",
		icon: faGithub,
		name: "@barbarbar338",
	},
	{
		href: "https://instagram.com/ben_baris.d",
		icon: faInstagram,
		name: "@ben_baris.d",
	},
	{
		href: "https://www.youtube.com/channel/UC0tkTcxf5F3DdR3RJtaAuXg",
		icon: faYoutube,
		name: "Barış DEMİRCİ",
	},
	{
		href: "https://discord.com/invite/BjEJFwh",
		icon: faDiscord,
		name: "discord.gg/BjEJFwh",
	},
];

export const Contact: FC = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");

	const onMailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMail(e.target.value);
	};

	const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!name || !mail || !message)
			return toast.error("❌ Please fill out the form completely.");
		window.open(
			`mailto:demirci.baris38@gmail.com?body=${encodeURIComponent(
				`Hey, It's ${name} (${mail})\n\n${message}`,
			)}`,
		);
		toast.success("🦄 Thanks for your message!");
	};

	return (
		<section
			id="contact"
			className="py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white"
		>
			<h1 className="text-4xl mb-10 text-center font-semibold font-heading">
				Contact <span className="text-purple-600">Me</span>
			</h1>
			<div className="w-full max-w-2xl mx-auto mb-12">
				<form onSubmit={onSubmit}>
					<div className="flex mb-4 -mx-2">
						<div className="w-1/2 px-2">
							<input
								onChange={onMailChange}
								className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
								type="email"
								placeholder="Email"
							/>
						</div>
						<div className="w-1/2 px-2">
							<input
								onChange={onNameChange}
								className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
								type="text"
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="mb-4">
						<textarea
							onChange={onMessageChange}
							className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
							placeholder="Write something..."
							rows={5}
						></textarea>
					</div>
					<div>
						<motion.button
							aria-label="Submit"
							whileHover={{
								scale: 1.02,
							}}
							whileTap={{
								scale: 0.98,
							}}
							className="inline-block w-full py-4 px-8 leading-none text-white bg-purple-600 hover:bg-purple-700 font-semibold rounded shadow"
						>
							Submit
						</motion.button>
					</div>
				</form>
			</div>
			<div className="flex flex-col lg:flex-row justify-center -mx-4">
				{socials.map((social, idx) => (
					<a
						key={idx}
						href={social.href}
						target="_blank"
						rel="noreferrer"
					>
						<div className="cursor-pointer px-4 flex items-center">
							<FontAwesomeIcon
								icon={social.icon}
								className="inline-block w-6 h-6 mr-3 text-purple-600"
							/>
							<span>{social.name}</span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};
