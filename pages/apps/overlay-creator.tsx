import type { NextPage } from "next";
import { useLocaleParser } from "@libs/localeParser";
import { Layout } from "@components/Layout";
import { ChangeEvent, FormEvent, useState } from "react";
import { CustomImage } from "@components/Utils/CustomImage";

const overlays = [
	"balance",
	"bravery",
	"brilliance",
	"charmender",
	"ducklett",
	"espeon",
	"gyarados",
	"jigglypuff",
	"squirtle",
	"togepi",
	"vulpix",
];

const OverlayCreatorAppPage: NextPage = () => {
	const parser = useLocaleParser();

	const [url, setUrl] = useState("");
	const [overlay, setOverlay] = useState(overlays[0]);
	const [product, setProduct] = useState("");

	const onURLChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setProduct(
			`https://api.338.rocks/v2/canvas/overlay?overlay=${encodeURIComponent(
				overlay,
			)}&imageURL=${encodeURIComponent(url)}`,
		);
	};

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setOverlay(e.target.value);
	};

	return (
		<Layout title={parser.get("apps_overlay_creator") as string}>
			<section className="min-h-screen py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white">
				<h1
					className="text-4xl mb-10 text-center font-semibold font-heading"
					dangerouslySetInnerHTML={{
						__html: parser.get("overlay_creator") as string,
					}}
				/>
				<div className="w-full max-w-2xl mx-auto mb-12">
					<form onSubmit={onSubmit}>
						<div className="mb-5">
							<input
								onChange={onURLChange}
								className="appearance-none my-2 block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 round focus:outline-none"
								type="text"
								placeholder={parser.get("avatar") as string}
							/>
							<select
								onChange={onSelectChange}
								className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							>
								{overlays.map((overlay, idx) => (
									<option key={idx} value={overlay}>
										{overlay}
									</option>
								))}
							</select>
						</div>
						<div>
							<button
								aria-label="Submit"
								className="inline-block w-full py-4 px-8 leading-none text-white bg-purple-600 hover:bg-purple-700 font-semibold round"
							>
								{parser.get("submit")}
							</button>
						</div>
					</form>
					<div className="h-96 w-96 bg-gray-500 m-auto mt-5">
						{product && (
							<CustomImage
								alt="Overlay"
								src={product}
								className="h-full w-full"
							/>
						)}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default OverlayCreatorAppPage;
