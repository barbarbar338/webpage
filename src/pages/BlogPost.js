import { Component } from "react";
import CONFIG from "../config";
import Layout from "../components/Layout";
import BlogHeader from "../components/Blog/Header";
import PostHeader from "../components/Blog/PostHeader";
import matter from "gray-matter";
import md from "markdown";

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
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/blog${this.props.itemURL}`)
            .then((r) => r.text())
            .then(async (d) => {
                const data = matter(d);
                const contentHtml = md.parse(data.content);
                this.setState({
                    postContent: contentHtml,
                    postData: data.data,
                });
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
