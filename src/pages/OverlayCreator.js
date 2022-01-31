import { Component } from "react";
import Layout from "../components/Layout";
import CreatorSection from "../components/OverlayCreator/index";

export default class OverlayCreator extends Component {
    state = {
        meta: {
            title: "Barış DEMİRCİ - Overlay Creator",
            description: "Add an overlay to your avatar!",
        },
    };
    render() {
        return (
            <Layout meta={this.state.meta}>
                <CreatorSection />
            </Layout>
        );
    }
}
