/* eslint-disable jsx-a11y/anchor-has-content */
import { Component } from "react";
import CONFIG from "../../config";

export default class YouTubeBlock extends Component {
    state = {
        youtubeVideoID: null,
    };
    async getYouTubeData() {
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/youtube.json`)
            .then((r) => r.json())
            .then((d) => {
                this.setState({
                    youtubeVideoID: d.defaultVideoId,
                });
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
