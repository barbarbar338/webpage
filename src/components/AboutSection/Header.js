import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
    return (
        <div className="header-page mt-70">
            <i className="icon-page">
                <FontAwesomeIcon icon={faUser} />
            </i>
            <i
                className="close-page"
                data-tooltip="close page"
                data-position="left"
            >
                <FontAwesomeIcon icon={faTimesCircle} />
            </i>
            <h2>About barbarbar338</h2>
        </div>
    );
}
