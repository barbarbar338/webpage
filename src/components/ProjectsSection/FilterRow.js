export default function FilterRow({ tags }) {
    const filters = [];
    tags.forEach((tag, i) => {
        filters.push(
            <li key={i + 1} data-filter={`.${tag}`}>
                {tag.toUpperCase()}
            </li>,
        );
    });
    return (
        <div className="row mt-100 mob-mt">
            <div className="col-lg-12 col-sm-12 portfolio-filter">
                <ul>
                    <li key={1} className="active" data-filter="*">
                        ALL
                    </li>
                    {filters}
                </ul>
            </div>
        </div>
    );
}
