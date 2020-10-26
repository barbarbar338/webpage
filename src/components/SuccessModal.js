import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

export default function SuccessModal() {
    return (
        <div>
            <div id="success-modal" className="modal fade">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <div className="icon-box">
                                <i>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </i>
                            </div>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <h4>Thanks!</h4>
                            <p>Your message has been sent successfully.</p>
                            <button
                                className="btn btn-success"
                                data-dismiss="modal"
                            >
                                <span>Continue Exploring</span>{" "}
                                <i>
                                    <FontAwesomeIcon icon={faSearchPlus} />
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
