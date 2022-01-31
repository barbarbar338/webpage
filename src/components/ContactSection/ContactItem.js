import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Solids from "@fortawesome/free-solid-svg-icons";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Regulars from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const iconTypes = { Brands, Solids, Regulars };

export default function ContactItem({ iconType, icon, content, name, path }) {
    const data = path ? (
        <p>
            <Link to={path}>{content}</Link>
        </p>
    ) : (
        <p>{content}</p>
    );

    return (
        <div className="col-lg-12">
            <div className="info-item">
                <span className="icon">
                    <i>
                        <FontAwesomeIcon icon={iconTypes[iconType][icon]} />
                    </i>
                </span>
                <h4>{name}</h4>
                {data}
            </div>
        </div>
    );
}
