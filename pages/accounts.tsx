import { AccountCard } from "@components/AccountCard";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import type { NextPage } from "next";

const AccountsPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title="My Accounts">
			<section className="bg-white px-4 py-10 text-center text-black dark:bg-gray-900 dark:text-white">
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
				</div>
			</section>
		</Layout>
	);
};

export default AccountsPage;
