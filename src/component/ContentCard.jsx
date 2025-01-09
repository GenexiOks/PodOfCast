import "./ContentCard.scss";

function ContentCard() {
    return (
        <>
            <div className="content-card">
                <div className="content-card__title">
                    <img src="/content/cover1.png" alt="card-img" />
                    <div className="content-card__title-container title-container">
                        <div className="title-container__title">
                            <p>Eps. 6</p>
                            <h3>Pandemic Becoming Endemic</h3>
                        </div>
                        <div className="title-container__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                        </div>
                    </div>
                </div>
                <div className="content-card__tag-container">
                    <div className="content-card__tag-first">covid-19</div>
                    <div className="content-card__tag-second">health</div>
                </div>
                <div className="content-card__hosteds-container">
                    <p>Hosted by: </p>
                    <div>
                        <img className="content-card__avatar-first" src="/content/avatar/avatar1.png" alt="avatar" />
                        <img className="content-card__avatar-second" src="/content/avatar/avatar2.png" alt="avatar" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContentCard;
