import InformationBlock from "./InformationBlock";
import YouTubeBlock from "./YouTubeBlock";

export default function PersonalInfo() {
    return (
        <div className="row mt-100 mob-mt">
            <YouTubeBlock />
            <InformationBlock />
        </div>
    );
}
