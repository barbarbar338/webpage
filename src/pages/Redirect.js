import Loader from "react-loader-spinner";

export default function Redirect({ redirect }) {
    document.title = "Barış DEMİRCİ - Redirecting...";
    setTimeout(() => {
        window.location.href = redirect;
    }, 2000);
    return (
        <div class="container centered text-center">
            <Loader type="ThreeDots" color="#007bff" height="100" width="100" />
            <h1>🕑 Redirecting</h1>
            <p>
                If it's not, <a href={redirect}>click here</a>
            </p>
        </div>
    );
}
