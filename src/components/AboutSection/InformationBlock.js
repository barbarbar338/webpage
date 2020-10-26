import { Component } from "react";
import CONFIG from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default class InformationBlock extends Component {
    state = {
        information: null,
    };
    async makeDataRequest() {
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/information.json`)
            .then((r) => r.json())
            .then((r) => {
                this.setState({
                    information: r.information,
                });
            });
    }
    componentDidMount() {
        this.makeDataRequest();
    }
    render() {
        return (
            <div className="col-lg-8 col-sm-12">
                <div className="info box">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4">
                            <div className="photo pt-10">
                                <img
                                    alt="avatar"
                                    src={`${CONFIG.DEFAULT_REPO_URL}/images/avatar.png`}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-8">
                            <h4>Barış DEMİRCİ</h4>
                            <div className="loc">
                                <i>
                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </i>{" "}
                                Kayseri, TURKEY
                            </div>
                            <p>{this.state.information}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
