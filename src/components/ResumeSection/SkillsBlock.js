import SkillsItem from "./SkillsItem";
import CONFIG from "../../config";
import { Component } from "react";
import { toast } from "react-toastify";

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
        const response = await fetch(`${CONFIG.DEFAULT_REPO_URL}/skills.json`);
        if (!response.ok) return toast.error("⛔ An error occurred while fetching skills data...", {
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
            skillsData: data
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
