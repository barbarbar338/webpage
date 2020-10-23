import { Component } from "preact";
import Bio from "../components/Bio";
import CurvedButton from "../components/CurvedButton";
import CONFIG from "../config";

export default class Home extends Component {
    handleSocialMediaButtons() {
        const buttons = [];
        CONFIG.SOCIAL_MEDIA.forEach((socialMediaData) => {
            buttons.push(
                <CurvedButton
                    color={socialMediaData.COLOR}
                    url={socialMediaData.ROUTE}
                    icon={socialMediaData.ICON}
                />,
            );
        });
        return buttons;
    }
    render() {
        document.title = "Barış DEMİRCİ - Home";
        return (
            <div class="container centered text-center">
                <Bio />
                {this.handleSocialMediaButtons()}
            </div>
        );
    }
}
