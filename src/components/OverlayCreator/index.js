import { Component } from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import CONFIG from "../../config";

export default class CreatorSection extends Component {
    state = {
        imageURL: "",
        overlay: "vulpix",
        backgroundURL: "",
    };
    handleImageInput = (e) => {
        this.setState({
            imageURL: e.target.value,
        });
    };
    handleOverlayInput = (e) => {
        this.setState({
            overlay: e.target.value,
        });
    };
    handleCreateButton = (e) => {
        if (!this.state.imageURL)
            return toast.error("⛔ Please specify an image url...", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        this.testImage(this.state.imageURL)
            .then(() => {
                this.setState({
                    backgroundURL: `${CONFIG.PINKIE_API}/canvas/overlay?overlay=${this.state.overlay}&imageURL=${this.state.imageURL}`,
                });
            })
            .catch(() => {
                return toast.error("⛔ Please specify a valid image url...", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };
    async testImage(url) {
        return new Promise((resolve, reject) => {
            let timer;
            const img = new Image();
            img.onerror = img.onabort = () => {
                clearTimeout(timer);
                reject();
            };
            img.onload = () => {
                clearTimeout(timer);
                resolve();
            };
            timer = setTimeout(() => {
                img.src = "//!!!!/noexist.jpg";
                reject();
            }, 5000);
            img.src = url;
        });
    }
    render() {
        return (
            <section className="blog-page">
                <div className="container">
                    <Header />
                    <div className="row mt-100 mb-50 mob-mt">
                        <div className="col-lg-5 col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label
                                        className="input-group-text"
                                        htmlFor="overlay"
                                    >
                                        Overlay
                                    </label>
                                </div>
                                <select
                                    className="custom-select"
                                    id="overlay"
                                    onChange={this.handleOverlayInput}
                                >
                                    <option value="vulpix">Vulpix</option>
                                    <option value="charmender">
                                        Charmender
                                    </option>
                                    <option value="ducklett">Ducklett</option>
                                    <option value="espeon">Espeon</option>
                                    <option value="gyarados">Gyarados</option>
                                    <option value="jigglypuff">
                                        Jigglypuff
                                    </option>
                                    <option value="squirtle">Squirtle</option>
                                    <option value="togepi">Togepi</option>
                                    <option value="balance">Balance</option>
                                    <option value="bravery">Bravery</option>
                                    <option value="brilliance">
                                        Brilliance
                                    </option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i>
                                            <FontAwesomeIcon icon={faImage} />
                                        </i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Image URL"
                                    onChange={this.handleImageInput}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={this.handleCreateButton}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className="overlay-box">
                                {this.state.backgroundURL ? (
                                    <img
                                        alt="OverlayCreator"
                                        src={this.state.backgroundURL}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
