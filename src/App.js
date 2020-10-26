import { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";
import BlogPost from "./pages/BlogPost";
import CONFIG from "./config";
import SuccessModal from "./components/SuccessModal";

export default class App extends Component {
    state = {
        redirects: [],
        posts: [],
    };
    handleBlogRedirects() {
        const posts = [];
        this.state.posts.forEach((postData, i) => {
            posts.push(
                <Route key={i} path={`/blog${postData.blogURL}`}>
                    <BlogPost {...postData} />
                </Route>,
            );
        });
        return posts;
    }
    handleRedirects() {
        const redirects = [];
        this.state.redirects.forEach((redirectData, i) => {
            redirects.push(
                <Redirect
                    key={i}
                    path={redirectData.route}
                    redirect={redirectData.url}
                />,
            );
        });
        return redirects;
    }
    async makeDataRequest() {
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/redirects.json`)
            .then((r) => r.json())
            .then((d) => {
                this.setState({
                    redirects: d,
                });
            });
    }
    async makeBlogDataRequest() {
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/blog_items.json`)
            .then((r) => r.json())
            .then((d) => {
                this.setState({
                    posts: d,
                });
            });
    }
    componentDidMount() {
        this.makeDataRequest();
        this.makeBlogDataRequest();
    }
    render() {
        return (
            <div id="app">
                <SuccessModal />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        {this.handleRedirects()}
                        {this.handleBlogRedirects()}
                        <Route path="*">
                            <NotFound default />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
