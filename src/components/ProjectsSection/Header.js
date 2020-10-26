import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className="header-page mt-70">
            <i className="icon-page">
                <FontAwesomeIcon icon={faBriefcase} />
            </i>
            <i
                className="close-page"
                data-tooltip="close page"
                data-position="left"
            >
                <FontAwesomeIcon icon={faTimesCircle} />
            </i>
            <h2>Projects</h2>
        </div>
    );
}
