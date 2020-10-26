import Banner from "./Banner";
import Menu from "./Menu";

export default function HomeSection() {
    return (
        <section className="home">
            <Banner />
            <Menu />
            <div className="page-wrap">
                <div className="page-background" />
            </div>
            <div className="copy">
                <p>
                    {new Date().getFullYear()} © Barış DEMIRCI. All Right
                    Reserved. Made with ❤️ using <a href="https://reactjs.org/" class="text-primary">React</a>
                </p>
            </div>
        </section>
    );
}
