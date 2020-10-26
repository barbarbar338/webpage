import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Favourites from "./Favourites";

export default function AboutSection() {
    return (
        <section className="about section">
            <div className="container">
                <Header />
                <PersonalInfo />
                <Favourites />
            </div>
        </section>
    );
}
