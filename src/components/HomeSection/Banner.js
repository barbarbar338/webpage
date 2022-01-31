import { Component } from "react";
import Typed from "typed.js";
import CONFIG from "../../config";

export default class Banner extends Component {
    componentDidMount() {
        new Typed("#typed", CONFIG.TYPED_OPTIONS);
    }
    render() {
        return (
            <div className="banner">
                <h1>Barış DEMİRCİ</h1>
                <p>
                    <span>I am </span>
                    <span id="typed" />
                </p>
            </div>
        );
    }
}
