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
		<Layout title={parser.get("apps_overlay_creator")}>
			<section className="min-h-screen bg-white py-10 px-4 text-black dark:bg-gray-900 dark:text-white">
				<h1
					className="mb-10 text-center font-heading text-4xl font-semibold"
					dangerouslySetInnerHTML={{
						__html: parser.get("overlay_creator"),
					}}
				/>
				<div className="mx-auto mb-12 w-full max-w-2xl">
					<form onSubmit={onSubmit}>
						<div className="mb-5">
							<input
								onChange={onURLChange}
								className="round my-2 block w-full appearance-none border border-gray-200 bg-gray-50 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								type="text"
								placeholder={parser.get("avatar")}
							/>
							<select
								onChange={onSelectChange}
								className="form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
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
								className="round inline-block w-full bg-purple-600 py-4 px-8 font-semibold leading-none text-white hover:bg-purple-700"
							>
								{parser.get("submit")}
							</button>
						</div>
					</form>
					<div className="m-auto mt-5 h-96 w-96 bg-gray-500">
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
