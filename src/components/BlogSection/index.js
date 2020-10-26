import { Component } from "react";
import Header from "./Header";
import BlogItem from "./BlogItem";
import CONFIG from "../../config";

export default class BlogSection extends Component {
    state = {
        posts: [],
    };
    handlePostItems() {
        const blogItems = [];
        this.state.posts.forEach((postData, i) => {
            blogItems.push(<BlogItem key={i} {...postData} />);
        });
        return blogItems;
    }
    async makeDataRequest() {
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
    }
    render() {
        return (
            <section className="blog section">
                <div className="container">
                    <Header />
                    <div className="row mt-100 mb-50 mob-mt">
                        {this.handlePostItems()}
                    </div>
                </div>
            </section>
        );
    }
}
