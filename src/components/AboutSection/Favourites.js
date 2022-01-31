import FavouritesHeader from "./FavouritesHeader";
import FavouriteItem from "./FavouriteItem";
import { Component } from "react";
import CONFIG from "../../config";
import { toast } from "react-toastify";

export default class Favourites extends Component {
    state = {
        favourites: [],
    };
    handleFavourites() {
        const favourites = [];
        this.state.favourites.forEach((favouriteData, i) => {
            favourites.push(
                <FavouriteItem key={i}>
                    <h4>{favouriteData.name}</h4>
                    <p>{favouriteData.description}</p>
                </FavouriteItem>,
            );
        });
        return favourites;
    }
    async makeDataRequest() {
        const response = await fetch(
            `${CONFIG.DEFAULT_REPO_URL}/favourites.json`,
        );
        if (!response.ok)
            return toast.error(
                "⛔ An error occurred while fetching favourites...",
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
            favourites: data,
        });
    }
    componentDidMount() {
        this.makeDataRequest();
    }
    render() {
        return (
            <div className="row mt-100">
                <FavouritesHeader />
                {this.handleFavourites()}
            </div>
        );
    }
}
