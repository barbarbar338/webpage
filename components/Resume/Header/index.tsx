import Photo from "@assets/resume-photo.png";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { toast } from "react-toastify";

export const ResumeHeader: FC = () => {
	const parser = useLocaleParser();
	const [loading, setLoading] = useState(false);

	const downloadAsPDF = async () => {
		if (loading) return;
		const element = document.getElementById("resume");
		if (!element) return toast.error("Something went wrong");

		setLoading(true);

		const controls = document.getElementById("controls");

		controls?.style.setProperty("display", "none");

		const style = document.createElement("style");
		document.head.appendChild(style);
		style.sheet?.insertRule(
			"body > div:last-child img { display: inline-block; }",
		);

		const canvas = await html2canvas(element, {
			backgroundColor: "black",
		});

		style.remove();

		const img = canvas.toDataURL("image/png");

		const width = 210;
		const height = 297;

		const pdf = new jsPDF({
			orientation: "portrait",
			unit: "cm",
			format: [width, height],
		});

		pdf.addImage(img, "PNG", 0, 0, width, height);

		setLoading(false);

		pdf.save("BDemirci_resume.pdf");

		controls?.style.setProperty("display", "flex");
	};

	return (
		<header>
			<ul className="flex flex-wrap justify-end gap-2" id="controls">
				<li>
					<button
						onClick={downloadAsPDF}
						className="inline-flex cursor-pointer items-center space-x-2 rounded bg-green-700 p-2 font-semibold text-white"
					>
						<FiDownload />
					</button>
				</li>
				{CONFIG.CONTACT.map((c, i) => (
					<li key={i}>
						<Link
							href={c.href}
							className="inline-flex items-center space-x-2 rounded bg-purple-700 p-2 font-semibold text-white"
							target="_blank"
						>
							<c.icon />
						</Link>
					</li>
				))}
			</ul>
			<div className="flex items-center justify-between">
				<div>
					<Image
						className="h-52 w-52 rounded-full"
						src={Photo}
						alt="Avatar"
						width={128}
						height={128}
					/>
				</div>
				<div className="grid justify-items-end">
					<h1 className="text-7xl font-extrabold">
						{parser.constants.name} {parser.constants.surname}
					</h1>
					<p className="mt-5 text-xl">{parser.constants.title}</p>
				</div>
			</div>
		</header>
	);
};
