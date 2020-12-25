import { FC, useState } from "react";
import { toast } from "react-toastify";
import styles from "./index.module.scss";

const ContactForm: FC = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!name || !mail || !subject || !message)
			return toast.error("❌ Please fill out the form completely.");
		window.open(
			`mailto:demirci.baris38@gmail.com?subject=${encodeURIComponent(
				subject,
			)}&body=${encodeURIComponent(`Hey, It's ${name} (${mail})\n\n${message}`)}`,
		);
		toast.success("🦄 Thanks for your message!");
	};

	return (
		<form onSubmit={submit} className={styles.form}>
			<div className={styles.flexItem}>
				<input
					onChange={(e) => setName(e.target.value)}
					type="name"
					name="name"
					id="name"
					placeholder="Full Name"
				/>
			</div>
			<div className={styles.flexItem}>
				<input
					onChange={(e) => setMail(e.target.value)}
					type="email"
					name="email"
					id="email"
					placeholder="Email"
				/>
			</div>
			<div className={styles.flexItem}>
				<input
					onChange={(e) => setSubject(e.target.value)}
					type="text"
					name="subject"
					id="subject"
					placeholder="Subject"
				/>
			</div>
			<div className={styles.flexItem}>
				<textarea
					onChange={(e) => setMessage(e.target.value)}
					name="message"
					id="message"
					placeholder="message"
				/>
			</div>
			<button className={styles.btn}>Submit</button>
		</form>
	);
};

export default ContactForm;
