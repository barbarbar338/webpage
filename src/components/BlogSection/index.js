import { Component } from "react";
import Header from "./Header";
import BlogItem from "./BlogItem";
import CONFIG from "../../config";
import { toast } from "react-toastify";

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
        const response = await fetch(
            `${CONFIG.DEFAULT_REPO_URL}/blog_items.json`,
        );
        if (!response.ok)
            return toast.error(
                "⛔ An error occurred while fetching blog items...",
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
