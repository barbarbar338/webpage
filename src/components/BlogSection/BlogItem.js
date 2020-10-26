import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

export default function BlogItem({
    date,
    banner,
    author,
    blogURL,
    category,
    title,
    shortDescription,
}) {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="blog-item">
                <div className="thumbnail">
                    <span className="date">
                        {new Date(date).toLocaleDateString()}
                    </span>
                    <Link to={`/blog${blogURL}`}>
                        <img alt="BlogItemBanner" src={banner} />
                    </Link>
                </div>
                <div className="meta">
                    <span className="aut">
                        Author <b>{author}</b>
                    </span>
                    <span className="cat">
                        <i>
                            <FontAwesomeIcon icon={faHashtag} />
                        </i>
                        {category}
                    </span>
                </div>
                <h4>
                    <Link to={`/blog${blogURL}`}>{title}</Link>
                </h4>
                <p>{shortDescription}</p>
                <div className="blog-btn">
                    <Link to={`/blog${blogURL}`} className="btn-st">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
