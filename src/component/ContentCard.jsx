import "./ContentCard.scss";

function ContentCard(props) {
    return (
        <>
            <div className="content-card">
                <div className="content-card__title">
                    <img src="/content/cover1.png" alt="card-img" />
                    <div className="content-card__title-container title-container">
                        <div className="title-container__title">
                            <p>{props.episod}</p>
                            <h3>{props.title}</h3>
                        </div>
                        <div className="title-container__text">
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
                <div className="content-card__tag-container">
                    <div className="content-card__tag-first">{props.tag}</div>
                    <div className="content-card__tag-second">{props.tag2}</div>
                </div>
                <div className="content-card__hosteds-container">
                    <p>Hosted by: </p>
                    <div>
                        <img className="content-card__avatar-first" src={props.avatar1} alt="avatar" />
                        <img className="content-card__avatar-second" src={props.avatar2} alt="avatar" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContentCard;
