import "./PricingCard.scss";

function PricingCard(props) {
    return (
        <>
            <div className="pricing-card">
                <div className={props.popular ? "pricing-card__block-price _popular" : "pricing-card__block-price"}>
                    <div className="pricing-card__title-container">
                        <div className="pricing-card__title">
                            <h2>{props.title}</h2>
                            {props.popular ? <p className="pricing-card__popular">MOST POPULAR</p> : ""}
                        </div>
                        <p>{props.description}</p>
                    </div>
                    <div className="pricing-card__subscribe-container">
                        <button className="_button-hover">SUBSCRIBE</button>
                        <div className="pricing-card__price-month">
                            <h3>
                                {props.price}
                                <span>
                                    <br />
                                    /month
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={props.popular ? "pricing-card__block-info _popular" : "pricing-card__block-info"}>
                    <div className="pricing-card__info">
                        <p>What’s included:</p>
                        <div className="pricing-card__benefits">
                            <ul>
                                {props.features.map((value) => (
                                    <li>• {value}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PricingCard;
