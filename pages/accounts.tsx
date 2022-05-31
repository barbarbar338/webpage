import type { NextPage } from "next";
import { AccountCard } from "@components/AccountCard";
import { Link } from "@components/Utils/Link";
import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { useRouter } from "next/router";
import { LocaleParser } from "@libs/localeParser";

const AccountsPage: NextPage = () => {
	const router = useRouter();
	const parser = new LocaleParser(router.locale);

	return (
		<Layout title="My Accounts">
			<section className="py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white text-center">
				<h1 className="text-4xl mb-10 font-semibold font-heading">
					{parser.get("my_accounts")}
				</h1>
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
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
							<span className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold round transition duration-200">
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
