import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-page mt-70">
            <Link
                to="/"
                className="close-blog"
                data-tooltip="close"
                data-position="bottom"
            >
                <i>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </i>
            </Link>
            <h2>Overlay Creator</h2>
        </div>
    );
}
