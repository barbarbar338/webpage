import { Link } from "react-router-dom";
import { Component } from "react";
import Layout from "../components/Layout";

export default class NotFound extends Component {
    state = {
        meta: {
            title: "Barış DEMİRCİ - Page Not Found",
            description: "The page you are looking for could not be found.",
        },
    };
    render() {
        return (
            <Layout meta={this.state.meta}>
                <div>
                    <div className="container-404">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            link="http://www.w3.org/1999/xlink"
                            width="470"
                            height="290"
                            viewBox="0 0 470 290"
                        >
                            <defs>
                                <path
                                    className="abstract-bg"
                                    id="prefix__a"
                                    d="M5.063 128.67c-2.513 15.192 5.633 31.093 17.898 38.941 5.99 3.832 13.34 6.528 16.471 13.254 4.868 10.452-3.879 22.437-13.113 28.515-9.236 6.078-20.5 10.9-24.704 21.683-2.771 7.108-1.685 15.387 1.058 22.507 10.06 26.112 39.393 37.547 65.479 36.15 26.086-1.396 50.827-12.407 76.416-18.075 87.873-19.465 180.005 24.717 267.728 4.47 13.65-3.151 27.4-8.081 37.943-17.99 11.883-11.167 18.632-28.016 19.65-45.023.97-16.225-4.34-34.495-17.744-41.806-7.834-4.273-17.196-4.1-25.7-1.774-5.43 1.483-10.767 3.808-16.369 3.848-5.601.038-11.763-3-13.386-8.808-1.707-6.107 2.182-12.41 6.642-16.577 9.072-8.474 21.203-12.707 29.441-22.126 7.927-9.063 11.264-22.574 8.574-34.716-2.692-12.141-11.326-22.538-22.188-26.715-27.683-10.645-57.844 18.377-86.152 9.873-2.101-.63-4.312-1.605-5.418-3.641-1.08-1.988-.834-4.51-.214-6.716 3.468-12.348 16.939-20.21 17.528-33.102.32-7.008-3.504-13.564-8.325-18.251-33.126-32.2-81.125 6.102-114.9 18.194-55.542 19.884-112.157 36.49-167.849 55.963-20.81 7.275-44.91 18.606-48.766 41.922z"
                                />
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    fill="transparent"
                                    d="M0 0H1366V800H0z"
                                    transform="translate(-448 -157)"
                                />
                                <g transform="translate(-448 -157) translate(448 157)">
                                    <mask id="prefix__b" fill="#fff">
                                        <use href="#prefix__a" />
                                    </mask>
                                    <use fill="#335380" href="#prefix__a" />
                                    <path
                                        fill="#243b5b"
                                        fill-rule="nonzero"
                                        d="M-14.199 211.2H481.36V301.2H-14.199z"
                                        mask="url(#prefix__b)"
                                    />
                                    <g
                                        fill-rule="nonzero"
                                        stroke="#f1f2f3"
                                        stroke-linecap="round"
                                        stroke-width="1.8"
                                        className="left-sparks"
                                    >
                                        <path
                                            d="M23.684 5.789L30 1.158"
                                            transform="rotate(-90 157 13)"
                                        />
                                        <path
                                            d="M0 5.789L6.316 1.158"
                                            transform="rotate(-90 157 13) matrix(-1 0 0 1 6.316 0)"
                                        />
                                        <path
                                            d="M15.789 4.632L15.789 0"
                                            transform="rotate(-90 157 13)"
                                        />
                                    </g>
                                    <g
                                        fill-rule="nonzero"
                                        stroke="#f1f2f3"
                                        stroke-linecap="round"
                                        stroke-width="1.8"
                                        className="right-sparks"
                                    >
                                        <path
                                            d="M23.684 5.789L30 1.158"
                                            transform="matrix(0 -1 -1 0 318 170)"
                                        />
                                        <path
                                            d="M0 5.789L6.316 1.158"
                                            transform="matrix(0 -1 -1 0 318 170) matrix(-1 0 0 1 6.316 0)"
                                        />
                                        <path
                                            d="M15.789 4.632L15.789 0"
                                            transform="matrix(0 -1 -1 0 318 170)"
                                        />
                                    </g>
                                    <path
                                        fill="#f2f2f2"
                                        className="path"
                                        fill-rule="nonzero"
                                        stroke="#b3b3b3"
                                        stroke-width="2"
                                        d="M198.754 186c1.56 0 2.246-.703 2.246-2.3v-41.4c0-1.597-.686-2.3-2.246-2.3h-9.608c-1.56 0-2.247.703-2.247 2.3v19.678h-5.802c-1.185 0-1.934-.83-1.934-2.172V142.3c0-1.597-.686-2.3-2.246-2.3h-9.67c-1.56 0-2.247.703-2.247 2.3v22.425c0 7.283 3.244 10.606 11.355 10.606H186.9v8.369c0 1.597.687 2.3 2.247 2.3h9.608zm32.277 1c15.3 0 18.969-5.248 18.969-13.056V152.12c0-7.808-3.67-13.12-18.969-13.12-15.3 0-19.031 5.312-19.031 13.12v21.824c0 7.808 3.732 13.056 19.031 13.056zm.969-12c-4.25 0-5-1.27-5-2.986v-17.091c0-1.652.75-2.923 5-2.923 4.313 0 5 1.27 5 2.923v17.09c0 1.716-.688 2.987-5 2.987zm62.754 11c1.56 0 2.246-.703 2.246-2.3v-41.4c0-1.597-.686-2.3-2.246-2.3h-9.608c-1.56 0-2.247.703-2.247 2.3v19.678h-5.802c-1.185 0-1.934-.83-1.934-2.172V142.3c0-1.597-.686-2.3-2.246-2.3h-9.67c-1.56 0-2.247.703-2.247 2.3v22.425c0 7.283 3.244 10.606 11.355 10.606H282.9v8.369c0 1.597.687 2.3 2.247 2.3h9.608z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="container text-center">
                        <h1 className="text-light">⛔ Page not found...</h1>
                        <Link to="/" className="btn btn-outline-primary">
                            ↩️ Return Home
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }
}
