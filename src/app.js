import { Component } from "preact";
import { Router, Route } from "preact-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";
import CONFIG from "./config";

export default class App extends Component {
    handleRedirects() {
        const redirects = [];
        CONFIG.SOCIAL_MEDIA.forEach((socialMediaData) => {
            redirects.push(
                <Redirect
                    path={socialMediaData.ROUTE}
                    redirect={socialMediaData.URL}
                />,
            );
        });
        return redirects;
    }
    render() {
        return (
            <div id="app">
                <Router>
                    <Route path="/" component={Home} />
                    {this.handleRedirects()}
                    <NotFound default />
                </Router>
            </div>
        );
    }
}
