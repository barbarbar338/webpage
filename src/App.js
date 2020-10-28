import { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";
import BlogPost from "./pages/BlogPost";
import OverlayCreator from "./pages/OverlayCreator";
import AchievementGenerator from "./pages/AchievementGenerator";
import CONFIG from "./config";
import { ToastContainer, toast } from "react-toastify";

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
        const response = await fetch(
            `${CONFIG.DEFAULT_REPO_URL}/redirects.json`,
        );
        if (!response.ok)
            return toast.error(
                "⛔ An error occurred while fetching redirects...",
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
            redirects: data,
        });
    }
    async makeBlogDataRequest() {
        const response = await fetch(
            `${CONFIG.DEFAULT_REPO_URL}/blog_items.json`,
        );
        if (!response.ok)
            return toast.error(
                "⛔ An error occurred while fetching blog redirects...",
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
            posts: data,
        });
    }
    componentDidMount() {
        this.makeDataRequest();
        this.makeBlogDataRequest();
    }
    render() {
        return (
            <div id="app">
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        {this.handleRedirects()}
                        {this.handleBlogRedirects()}
                        <Route path="/overlay-creator">
                            <OverlayCreator />
                        </Route>
                        <Route path="/achievement-generator">
                            <AchievementGenerator />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
