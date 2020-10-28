import { Component } from "react";
import Header from "./Header";
import { toast } from "react-toastify";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import CONFIG from "../../config";

export default class ContactSection extends Component {
    state = {
        contactItems: [],
    };
    handleContactItems() {
        const contactItems = [];
        this.state.contactItems.forEach((contactItemData, i) => {
            contactItems.push(<ContactItem key={i} {...contactItemData} />);
        });
        return contactItems;
    }
    async makeDataRequest() {
        const response = await fetch(`${CONFIG.DEFAULT_REPO_URL}/contact_items.json`);
        if (!response.ok) return toast.error("⛔ An error occurred while fetching contact items...", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const data = await response.json();
        return this.setState({
            contactItems: data
        });
    }
    componentDidMount() {
        this.makeDataRequest();
    }
    render() {
        return (
            <section className="contact section">
                <div className="container">
                    <Header />
                    <div className="row mt-100 mob-mt">
                        <div className="col-lg-8 col-sm-12">
                            <ContactForm />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="box">
                                <div className="row">
                                    {this.handleContactItems()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
