import { Component } from "react";
//import CONFIG from "../config";
import Layout from "../components/Layout";
import Main from "../components/OverlayCreator/Main";
//import { toast } from "react-toastify";

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
                <Main />
            </Layout>
        );
    }
}
