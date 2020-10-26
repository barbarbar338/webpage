import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import CONFIG from "../../config";
import $ from "jquery";

export default class ContactForm extends Component {
    componentDidMount() {
        const form = $("#contact-form");
        form.on("submit", (e) => {
            e.preventDefault();
            window.open(
                `mailto:${CONFIG.CONTACT_MAIL}?subject=${$(
                    "#subject",
                ).val()}&body=${$("#message").val()}`,
            );
            $("#success-modal").modal("show");
        });
    }
    render() {
        return (
            <form className="form-wrap validate-form" id="contact-form">
                <div className="validate-input">
                    <input
                        id="name"
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Full name"
                        required
                    />
                    <span className="focus-input" />
                    <label className="label-input" htmlFor="name">
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                    </label>
                </div>
                <div className="validate-input">
                    <input
                        id="subject"
                        className="input"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                    <span className="focus-input" />
                    <label className="label-input" htmlFor="subject">
                        <i>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                    </label>
                </div>
                <div className="validate-input">
                    <textarea
                        id="message"
                        className="input"
                        name="message"
                        placeholder="Your thoughts..."
                        required
                    />
                    <span className="focus-input" />
                    <label className="label-input comment" htmlFor="message">
                        <i>
                            <FontAwesomeIcon icon={faComment} />
                        </i>
                    </label>
                </div>
                <div className="form-btn">
                    <button className="btn-st">Send</button>
                </div>
            </form>
        );
    }
}
