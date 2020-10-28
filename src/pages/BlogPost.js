import { Component } from "react";
import CONFIG from "../config";
import Layout from "../components/Layout";
import BlogHeader from "../components/Blog/Header";
import PostHeader from "../components/Blog/PostHeader";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { toast } from "react-toastify";

export default class BlogPost extends Component {
    state = {
        postContent: "",
        postData: {},
        meta: {
            title: `Barış DEMİRCİ - ${this.props.title}`,
            description: this.props.shortDescription,
        },
    };
    async makeDataRequest() {
        const response = await fetch(
            `${CONFIG.DEFAULT_REPO_URL}/blog${this.props.itemURL}`,
        );
        if (!response.ok)
            return toast.error(
                "⛔ An error occurred while fetching blog data...",
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
        const data = await response.text();
        const matterResult = matter(data);
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();
        return this.setState({
            postContent: contentHtml,
            postData: matterResult.data,
        });
    }
    componentDidMount() {
        this.makeDataRequest();
    }
    render() {
        return (
            <Layout meta={this.state.meta}>
                <div className="blog-page">
                    <BlogHeader banner={this.state.postData.banner} />
                    <div className="row blog-container">
                        <div className="col-md-10 offset-md-1">
                            <PostHeader
                                title={this.state.postData.title}
                                category={this.state.postData.category}
                                author={this.state.postData.author}
                                date={this.state.postData.date}
                            />
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{
                                    __html: this.state.postContent,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
