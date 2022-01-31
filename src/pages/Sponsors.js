import Layout from "../components/Layout";
import { Component } from "react";
import Card from "../components/Sponsors/card";
import CONFIG from "../config";
import { toast } from "react-toastify";

export default class Sponsors extends Component {
    state = {
        meta: {
            title: "Barış DEMİRCİ - ❤️ Sponsors ❤️",
            description: "Thanks to everyone who supported me ❤️",
        },
        sponsors: [],
    };
    async makeDataRequest() {
        const response = await fetch(
            `${CONFIG.DEFAULT_REPO_URL}/sponsors.json`,
        );
        if (!response.ok)
            return toast.error(
                "⛔ An error occurred while fetching sponsors...",
                {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                },
            );
        const data = await response.json();
        return this.setState({
            sponsors: data,
        });
    }
    handleSponsors() {
        const sponsors = [];
        this.state.sponsors.forEach((sponsorData, i) => {
            sponsors.push(<Card key={i} {...sponsorData} />);
        });
        return sponsors;
    }
    componentDidMount() {
        this.makeDataRequest();
    }
    render() {
        return (
            <Layout meta={this.state.meta}>
                <div
                    className="container text-center"
                    style={{
                        paddingTop: "5rem",
                    }}
                >
                    <h1 className="text-light">
                        ❤️ Thanks to everyone who supports me ❤️
                    </h1>
                    <p className="text-light">Contact me for sponsorship</p>
                    <div className="row">{this.handleSponsors()}</div>
                </div>
            </Layout>
        );
    }
}
