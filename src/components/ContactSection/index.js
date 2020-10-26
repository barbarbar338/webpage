import { Component } from "react";
import Header from "./Header";

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
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/contact_items.json`)
            .then((r) => r.json())
            .then((d) => {
                this.setState({
                    contactItems: d,
                });
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
