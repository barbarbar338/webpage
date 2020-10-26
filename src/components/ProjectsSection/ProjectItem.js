import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProjectItem({ name, img, url, tags }) {
    return (
        <div className={`item col-lg-4 col-sm-6 ${tags.join(" ")}`}>
            <figure>
                <img alt={name} src={img} />
                <figcaption>
                    <h3>{name}</h3>
                    <p>{tags.join(", ")}</p>
                    <i>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </i>
                    <Link className="image-link" to={url} />
                </figcaption>
            </figure>
        </div>
    );
}
