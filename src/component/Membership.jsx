import "./Membership.scss";

function Membership(props) {
    return (
        <>
            <div className="membership-card">
                <img src={props.img} alt="" className="membership-card__img" />
                <div className="membership-card__title">
                    <h3>{props.title}</h3>
                    <p>{props.children}</p>
                </div>
            </div>
        </>
    );
}

export default Membership;
