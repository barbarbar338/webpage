import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimesCircle,
    faAddressBook,
} from "@fortawesome/free-regular-svg-icons";

export default function Header() {
    return (
        <div className="header-page mt-70">
            <i className="icon-page">
                <FontAwesomeIcon icon={faAddressBook} />
            </i>
            <i
                className="close-page"
                data-tooltip="close page"
                data-position="left"
            >
                <FontAwesomeIcon icon={faTimesCircle} />
            </i>
            <h2>Resume</h2>
        </div>
    );
}
