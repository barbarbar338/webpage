import { FC } from "react";
import TailwindSVG from "@assets/elements/tailwind.svg";
import NestSVG from "@assets/elements/nest.svg";
import MongoDBSVG from "@assets/elements/mongodb.svg";
import NextSVG from "@assets/elements/next.svg";
import { Stack } from "@components/Stack";

export const About: FC = () => {
	return (
		<section id="about" className="min-h-screen bg-gray-900">
			<div className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap items-center">
						<div className="w-full lg:w-1/2 mb-12 lg:mb-0">
							<div className="max-w-md lg:mx-auto">
								<span className="text-purple-600 font-bold">
									Being a back-end developer...
								</span>
								<h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading text-white">
									Who am I <span className="text-purple-600">&amp;</span> how did I get
									here
								</h2>
								<p className="mb-6 text-gray-500 leading-loose">
									Hello, I am Barış DEMİRCİ (a.k.a.{" "}
									<span className="text-purple-600">barbarbar338</span>
									). I am a student from Turkey who codes for fun. I have been in coding
									since 2009 and I started my career first by making simple websites. I
									have been using JavaScript (Node &amp; Client-side) for{" "}
									{new Date().getFullYear() - 2010} years. Now I'm trying to produce lots
									of open source projects and working as freelancer.
								</p>
								<ul className="text-gray-500 font-bold">
									<li className="flex mb-4">
										<svg
											className="mr-2 w-6 h-6 text-green-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>JavaScript (Node &amp; Client-Side)</span>
									</li>
									<li className="flex mb-4">
										<svg
											className="mr-2 w-6 h-6 text-green-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>TypeScript</span>
									</li>
									<li className="flex mb-4">
										<svg
											className="mr-2 w-6 h-6 text-green-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>GoLang</span>
									</li>
									<li className="flex mb-4">
										<svg
											className="mr-2 w-6 h-6 text-green-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>SQL (Postgre &amp; Sqlite)</span>
									</li>
									<li className="flex mb-4">
										<svg
											className="mr-2 w-6 h-6 text-green-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>NoSQL (MongoDB &amp; Redis)</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="w-full lg:w-1/2 flex flex-wrap -mx-4">
							<div className="mb-8 lg:mb-0 w-1/2 px-4">
								<div className="mb-8 py-6 pl-6 pr-4 shadow-md rounded bg-gray-800">
									<span className="mb-4 inline-block p-3 rounded-lg bg-red-800">
										<img src={NestSVG} className="w-10 h-10" draggable={false} />
									</span>
									<h4 className="mb-2 text-2xl font-bold font-heading text-white">
										NestJS
									</h4>
									<p className="text-gray-500 leading-loose">
										About {new Date().getFullYear() - 2020} year(s)
									</p>
								</div>
								<div className="py-6 pl-6 pr-4 shadow-md rounded bg-gray-800">
									<span className="mb-4 inline-block p-3 rounded-lg bg-green-800">
										<img src={MongoDBSVG} className="w-10 h-10" draggable={false} />
									</span>
									<h4 className="mb-2 text-2xl font-bold font-heading text-white">
										MongoDB
									</h4>
									<p className="text-gray-500 leading-loose">
										About {new Date().getFullYear() - 2010} year(s)
									</p>
								</div>
							</div>
							<div className="w-1/2 lg:mt-20 md:px-4">
								<div className="mb-8 py-6 pl-6 pr-4 shadow-md rounded-lg bg-gray-800">
									<span className="mb-4 inline-block p-3 rounded bg-gray-700">
										<img src={NextSVG} className="w-10 h-10" draggable={false} />
									</span>
									<h4 className="mb-2 text-2xl font-bold font-heading text-white">
										NextJS
									</h4>
									<p className="text-gray-500 leading-loose">
										About {new Date().getFullYear() - 2019} years
									</p>
								</div>
								<div className="py-6 pl-6 pr-4 shadow-md rounded-lg bg-gray-800">
									<span className="mb-4 inline-block p-3 rounded bg-blue-800">
										<img src={TailwindSVG} className="w-10 h-10" draggable={false} />
									</span>
									<h4 className="mb-2 text-2xl font-bold font-heading text-white">
										TailwindCSS
									</h4>
									<p className="text-gray-500 leading-loose">
										About {new Date().getFullYear() - 2020} year
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Stack />
		</section>
	);
};
