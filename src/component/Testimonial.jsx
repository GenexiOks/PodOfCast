/* eslint-disable no-unused-vars */
import "./Testimonial.scss";

function Testimonial(props) {
    return (
        <>
            <div className="card">
                <p>“</p>
                <h3>Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </h3>
                <div className="card__user-container">
                    <div className="card__user">
                        <img src={props.avatar} alt="avatar1" />
                        <p>{props.userName},</p>
                    </div>
                    <div className="card__platform">
                        <div className="card__platform-logo">{props.logo}</div>
                        <div className="card__platform-name">{props.name}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
