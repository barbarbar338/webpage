import DocumentMeta from "react-document-meta";
import Preloader from "./Preloader";
import { Component } from "react";
import $ from "jquery";

export default class Layout extends Component {
    componentDidMount() {
        $("#preloader").delay(1000).fadeOut();
    }
    render() {
        const { children, meta } = this.props;
        return (
            <DocumentMeta {...meta}>
                <Preloader />
                {children}
            </DocumentMeta>
        );
    }
}
