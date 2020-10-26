import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function Header({ banner }) {
    return (
        <div>
            <Link
                to="/"
                className="close-blog"
                data-tooltip="close blog"
                data-position="bottom"
            >
                <i>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </i>
            </Link>
            <div className="blog-image">
                <img
                    src={banner}
                    alt="BlogBanner"
                    style={{ backgroundImage: `url("${banner}")` }}
                />
            </div>
        </div>
    );
}
