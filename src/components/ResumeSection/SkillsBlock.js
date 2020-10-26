import SkillsItem from "./SkillsItem";
import CONFIG from "../../config";
import { Component } from "react";

export default class SkillsBlock extends Component {
    state = {
        skillsData: [],
    };
    handleSkills() {
        const left = [];
        const right = [];
        this.state.skillsData.forEach((skillData, index) => {
            if (index % 2 === 0)
                left.push(<SkillsItem key={index} {...skillData} />);
            else right.push(<SkillsItem key={index} {...skillData} />);
        });
        return [left, right];
    }
    async getSkillData() {
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/skills.json`)
            .then((r) => r.json())
            .then((r) => {
                this.setState({
                    skillsData: r,
                });
            });
    }
    componentDidMount() {
        this.getSkillData();
    }
    render() {
        const [left, right] = this.handleSkills();
        return (
            <div style={{ marginBottom: "10rem" }}>
                <div className="row mt-100">
                    <div className="col-md-12">
                        <div className="header-box mb-50">
                            <h3>Skills</h3>
                        </div>
                    </div>
                </div>
                <div className="box skills">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">{left}</div>
                        <div className="col-lg-6 col-sm-6">{right}</div>
                    </div>
                </div>
            </div>
        );
    }
}
