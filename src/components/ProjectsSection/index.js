import { Component } from "react";
import Header from "./Header";
import FilterRow from "./FilterRow";
import ProjectItem from "./ProjectItem";
import CONFIG from "../../config";
import { toast } from "react-toastify";

export default class ProjectsSection extends Component {
    state = {
        projects: [],
        tags: [],
    };
    cleanArray(array) {
        const newArray = [];
        array.flat().forEach((i) => {
            if (!newArray.includes(i)) newArray.push(i);
        });
        return newArray;
    }
    handleProjectItems() {
        const items = [];
        this.state.projects.forEach((projectData, i) => {
            items.push(<ProjectItem key={i} {...projectData} />);
        });
        return items;
    }
    async makeDataRequest() {
        const response = await fetch(`${CONFIG.DEFAULT_REPO_URL}/projects.json`);
        if (!response.ok) return toast.error("⛔ An error occurred while fetching projects data...", {
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
            projects: data,
            tags: this.cleanArray(data.map((i) => i.tags))
        });
    }
    componentDidMount() {
        this.makeDataRequest();
    }
    render() {
        return (
            <section className="portfolio section">
                <div className="container">
                    <Header />
                    <FilterRow tags={this.state.tags} />
                    <div className="row portfolio-items mt-100 mb-100">
                        {this.handleProjectItems()}
                    </div>
                </div>
            </section>
        );
    }
}
