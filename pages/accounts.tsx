import type { NextPage } from "next";
import { AccountCard } from "@components/AccountCard";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";

const AccountsPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title="My Accounts">
			<section className="bg-white py-10 px-4 text-center text-black dark:bg-gray-900 dark:text-white">
				<h1 className="mb-10 font-heading text-4xl font-semibold">
					{parser.get("my_accounts")}
				</h1>
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-3">
						{[...CONFIG.CONTACT, ...CONFIG.SOCIALS].map(
							(contact, idx) => (
								<AccountCard
									key={idx}
									icon={contact.icon}
									name={contact.name}
									value={contact.value}
									href={contact.href}
									color={contact.color}
								/>
							),
						)}
					</div>
					<div className="pt-10">
						<Link href="/">
							<span className="round mb-3 inline-block w-full bg-purple-600 py-2 px-6 font-semibold leading-loose text-white transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto">
								{parser.get("go_home")}
							</span>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AccountsPage;
