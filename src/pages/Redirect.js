import Loader from "react-loader-spinner";
import Layout from "../components/Layout";
import { Component } from "react";

export default class Redirect extends Component {
    state = {
        meta: {
            title: "Barış DEMİRCİ - Redirecting...",
            description: "You're being redirected to another page...",
        },
    };
    componentDidMount() {
        setTimeout(() => {
            window.location.href = this.props.redirect;
        }, 3.5 * 1000);
    }
    render() {
        const { redirect } = this.props;
        return (
            <Layout meta={this.state.meta}>
                <div className="container centered text-center">
                    <Loader
                        type="ThreeDots"
                        color="#00b300"
                        height="100"
                        width="100"
                    />
                    <h1 className="text-light">⏳ Redirecting</h1>
                    <p className="text-light">
                        If it's not,{" "}
                        <a href={redirect} className="text-success">
                            click here
                        </a>
                    </p>
                </div>
            </Layout>
        );
    }
}
