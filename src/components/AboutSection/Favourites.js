import FavouritesHeader from "./FavouritesHeader";
import FavouriteItem from "./FavouriteItem";
import { Component } from "react";
import CONFIG from "../../config";

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
        return fetch(`${CONFIG.DEFAULT_REPO_URL}/favourites.json`)
            .then((r) => r.json())
            .then((d) => {
                this.setState({
                    favourites: d,
                });
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
