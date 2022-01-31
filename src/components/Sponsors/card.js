export default function Card({ name, title, description, links }) {
    const linkData = [];
    links.forEach((link, i) => {
        linkData.push(
            <a
                key={i}
                className="btn btn-outline-success"
                rel="noreferrer"
                href={link.url}
                target="_blank"
            >
                {link.name}
            </a>,
        );
    });
    const split = description.split("\n");
    const descData = [];
    split.forEach((str, i) => {
        descData.push(str, <br key={i} />);
    });
    return (
        <div className="col-sm-6">
            <div className="card text-white bg-light">
                <div className="card-header text-dark">{name}</div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-dark">
                        {descData}
                        {linkData}
                    </p>
                </div>
            </div>
        </div>
    );
}
