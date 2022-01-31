import Header from "./Header";
import TimeLineBlock from "./TimeLineBlock";
import SkillsBlock from "./SkillsBlock";

export default function ResumeSection() {
    return (
        <section className="resume section">
            <div className="container">
                <Header />
                <TimeLineBlock />
                <SkillsBlock />
            </div>
        </section>
    );
}
