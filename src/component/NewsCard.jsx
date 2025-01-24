import "./NewsCard.scss";

function NewsCard() {
    return (
        <>
            <div className="news-card">
                <img src="/blog/img2.png" alt="img" />
                <div className="news-card__title-container">
                    <div className="news-card__title">
                        <p>PODCAST</p>
                        <h2>Setup your own podcast</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation
                        ullamco laboris...
                    </p>
                </div>
                <div className="news-card__tags-container"></div>
            </div>
        </>
    );
}
export default NewsCard;
