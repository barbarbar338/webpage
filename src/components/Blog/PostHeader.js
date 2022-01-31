import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHashtag,
    faUser,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function PostHeader({ title, category, author, date }) {
    return (
        <div className="blog-heading pt-70 pb-100">
            <h2>{title}</h2>
            <span>
                <i>
                    <FontAwesomeIcon icon={faHashtag} />
                </i>
                {category}
            </span>
            <span>
                <i>
                    <FontAwesomeIcon icon={faUser} />
                </i>
                {author}
            </span>
            <span>
                <i>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </i>
                {new Date(date).toLocaleDateString()}
            </span>
        </div>
    );
}
