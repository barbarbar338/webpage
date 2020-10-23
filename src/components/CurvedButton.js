import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "preact-router";

export default function NotFound({ url, icon, color }) {
    return (
        <Link
            href={url}
            class="curv grow text-reset"
            style={`border-color: ${color};`}
        >
            <FontAwesomeIcon icon={icon} />
        </Link>
    );
}
