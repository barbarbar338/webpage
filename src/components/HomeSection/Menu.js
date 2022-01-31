import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
    faAddressBook,
    faBriefcase,
    faReceipt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
    return (
        <div className="menu">
            <div className="but-menu">
                <div className="line line-top" />
                <div className="line line-middle" />
                <div className="line line-bottom" />
            </div>
            <div className="but-about menu-item">
                <i
                    className="about-show"
                    data-tooltip="about me"
                    data-position="top"
                >
                    <FontAwesomeIcon icon={faUser} />
                </i>
            </div>
            <div className="but-resume menu-item">
                <i
                    className="resume-show"
                    data-tooltip="resume"
                    data-position="right"
                >
                    <FontAwesomeIcon icon={faAddressBook} />
                </i>
            </div>
            <div className="but-portfolio menu-item">
                <i
                    className="portfolio-show"
                    data-tooltip="projects"
                    data-position="right"
                >
                    <FontAwesomeIcon icon={faBriefcase} />
                </i>
            </div>
            <div className="but-blog menu-item">
                <i
                    className="blog-show"
                    data-tooltip="blog"
                    data-position="left"
                >
                    <FontAwesomeIcon icon={faReceipt} />
                </i>
            </div>
            <div className="but-contact menu-item">
                <i
                    className="contact-show"
                    data-tooltip="contact"
                    data-position="left"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </i>
            </div>
        </div>
    );
}
