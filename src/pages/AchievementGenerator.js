import { Component } from "react";
import Layout from "../components/Layout";
import GeneratorSection from "../components/AchievementGenerator/index";

export default class AchievementGenerator extends Component {
    state = {
        meta: {
            title: "Barış DEMİRCİ - Achievement Generator",
            description:
                "Quickly generate custom Minecraft achievements for yourself!",
        },
    };
    render() {
        return (
            <Layout meta={this.state.meta}>
                <GeneratorSection />
            </Layout>
        );
    }
}
