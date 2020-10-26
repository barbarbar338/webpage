import { Component } from "react";
import Header from "./Header";
import FilterRow from "./FilterRow";
import ProjectItem from "./ProjectItem";
import CONFIG from "../../config";

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
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/projects.json`)
            .then((r) => r.json())
            .then((d) => {
                this.setState({
                    projects: d,
                    tags: this.cleanArray(d.map((i) => i.tags)),
                });
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
