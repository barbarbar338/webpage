import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotFound({ url, icon, color }) {
    return (
        <a
            href={url}
            class="curv grow text-reset"
            style={`border-color: ${color};`}
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}
