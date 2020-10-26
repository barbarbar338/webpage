import { Component } from "react";
import TimeLineItem from "./TimeLineItem";
import CONFIG from "../../config";

export default class TimeLineBlock extends Component {
    state = {
        timelines: [],
    };
    handleExperiences() {
        const left = [];
        const right = [];
        const clone = Array.from(this.state.timelines);
        const otherHalf = clone.splice(0, Math.ceil(clone.length / 2));
        otherHalf.forEach((timelineData, i) => {
            left.push(<TimeLineItem key={i} {...timelineData} />);
        });
        clone.forEach((timelineData, i) => {
            right.push(<TimeLineItem key={i} {...timelineData} />);
        });
        return [left, right];
    }
    async makeDataRequest() {
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/timelines.json`)
            .then((r) => r.json())
            .then((d) => {
                this.setState({
                    timelines: d,
                });
            });
    }
    componentDidMount() {
        this.makeDataRequest();
    }
    render() {
        const [left, right] = this.handleExperiences();
        return (
            <div className="row mt-100 mob-mt">
                <div className="col-lg-6 col-sm-12">
                    <div className="experience box">
                        <div className="bord-l">{left}</div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="experience box">
                        <div className="bord-l">{right}</div>
                    </div>
                </div>
            </div>
        );
    }
}
