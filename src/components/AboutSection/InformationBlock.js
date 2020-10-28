import { Component } from "react";
import CONFIG from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default class InformationBlock extends Component {
    state = {
        information: null,
    };
    async makeDataRequest() {
        const response = await fetch(
            `${CONFIG.DEFAULT_REPO_URL}/information.json`,
        );
        if (!response.ok)
            return toast.error(
                "⛔ An error occurred while fetching information...",
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
        const data = await response.json();
        return this.setState({
            information: data.information,
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
