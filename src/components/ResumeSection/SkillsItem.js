export default function SkillsItem({ percentage, skill }) {
    return (
        <div
            className="skill-item"
            data-tooltip={`${percentage}%`}
            data-position="top"
        >
            <h4 className="progress-title">{skill}</h4>
            <div className="progress">
                <div
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
