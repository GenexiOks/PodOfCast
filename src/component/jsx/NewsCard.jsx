import "../scss/NewsCard.scss";

function NewsCard(props) {
    return (
        <>
            <div className="news-card">
                <img src={props.photo} alt="img" />
                <div className="news-card__title-container">
                    <div className="news-card__title">
                        <p>{props.title}</p>
                        <h2>{props.name}</h2>
                    </div>
                    <p>{props.text}</p>
                </div>
                <div className="news-card__footer">
                    <div className="news-card__tags-date">
                        <ul className="news-card__tags">
                            {props.tags.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                        <div className="news-card__date">
                            <p>{props.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewsCard;
