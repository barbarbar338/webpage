import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function TimeLineItem({ title, when, paragraph }) {
    return (
        <div className="item">
            <div className="main">
                <h4>{title}</h4>
                <p>
                    <i>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </i>
                    {when}
                </p>
            </div>
            <p>{paragraph}</p>
        </div>
    );
}
