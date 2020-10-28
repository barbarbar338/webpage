/* eslint-disable jsx-a11y/anchor-has-content */
import { Component } from "react";
import CONFIG from "../../config";
import { toast } from "react-toastify";

export default class YouTubeBlock extends Component {
    state = {
        youtubeVideoID: null,
    };
    async getYouTubeData() {
        const response = await fetch(`${CONFIG.DEFAULT_REPO_URL}/youtube.json`);
        if (!response.ok) return toast.error("⛔ An error occurred while fetching youtube data...", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const data = await response.json();
        return this.setState({
            youtubeVideoID: data.defaultVideoId
        });
    }
    componentDidMount() {
        this.getYouTubeData();
    }
    render() {
        return (
            <div className="col-lg-4 col-sm-12">
                <div className="box">
                    <h4 className="text-center">YouTube Channel</h4>
                    <div className="video">
                        <a
                            className="video-play video-link"
                            href={`https://www.youtube.com/watch?v=${this.state.youtubeVideoID}`}
                        />
                        <div className="video-bg">
                            <img
                                alt="YouTubeVideoBanner"
                                src={`${CONFIG.DEFAULT_REPO_URL}/images/youtube.png`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
