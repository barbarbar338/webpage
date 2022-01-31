import { StrictMode } from "react";
import { render } from "react-dom";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "magnific-popup/dist/magnific-popup.css";
import "./styles/index.css";
import "./styles/404.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

window.jQuery = window.$ = $;
require("magnific-popup");
require("isotope-layout/dist/isotope.pkgd");

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root"),
);
