import "./Membership.scss";

function Membership(props) {
    return (
        <>
            <div className="card__container">
                <img src={props.img} alt="" className="card__img" />
                <div className="card__title">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    );
}

export default Membership;
