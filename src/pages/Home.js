import { Component } from "preact";
import DocumentMeta from "react-document-meta";
import Bio from "../components/Bio";
import CurvedButton from "../components/CurvedButton";
import CONFIG from "../config";

export default class Home extends Component {
    state = {
        meta: {
            title: "Barış DEMİRCİ - Home",
            description: "It's Barış DEMİRCİ!"
        }
    }
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
        return (
            <DocumentMeta {...this.state.meta}>
                <div class="container centered text-center">
                    <Bio />
                    {this.handleSocialMediaButtons()}
                </div>
            </DocumentMeta>
        );
    }
}
