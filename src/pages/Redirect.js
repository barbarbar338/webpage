import Loader from "react-loader-spinner";
import DocumentMeta from "react-document-meta";

export default function Redirect({ redirect }) {
    const meta = {
        title: "Barış DEMİRCİ - Redirecting...",
        description: "You're being redirected to another page..."
    }
    setTimeout(() => {
        window.location.href = redirect;
    }, 2000);
    return (
        <DocumentMeta {...meta}>
            <div class="container centered text-center">
                <Loader type="ThreeDots" color="#007bff" height="100" width="100" />
                <h1>🕑 Redirecting</h1>
                <p>
                    If it's not, <a href={redirect}>click here</a>
                </p>
            </div>
        </DocumentMeta>
    );
}
