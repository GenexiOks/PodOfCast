import React from "react";
import "./scss/AboutPage.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./scss/AboutPage.module.scss";

const AboutPage = () => {
    return (
        <>
            <header className="header">
                <div className="header__container _container">
                    <div className="header__logo">
                        <img src="/MainPage/logo/logo.svg" alt="logo" />
                    </div>
                    <nav className="header__nav nav">
                        <ul className="nav__ul">
                            <li className="nav__element_episodes">
                                <a href="#">Episodes</a>
                            </li>
                            <li className="nav__element_about">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav__element_more more">
                                <a href="#">More</a>
                                <div className="more__arrow">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.3"
                                            d="M14.6668 7.99992C14.6668 11.6766 11.6761 14.6666 8.0001 14.6666C4.3241 14.6666 1.33344 11.6766 1.33344 7.99992C1.33344 4.32392 4.3241 1.33325 8.0001 1.33325C11.6761 1.33325 14.6668 4.32392 14.6668 7.99992"
                                            stroke="black"
                                            strokeOpacity="0.4"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M10.8139 7.0384C10.8139 7.16574 10.7653 7.29374 10.6679 7.39107L8.35459 9.71574C8.26059 9.80974 8.13326 9.8624 7.99993 9.8624C7.86726 9.8624 7.73993 9.80974 7.64593 9.71574L5.33126 7.39107C5.13659 7.19574 5.13659 6.87974 5.33259 6.6844C5.52859 6.48974 5.84526 6.4904 6.03993 6.68574L7.99993 8.6544L9.95993 6.68574C10.1546 6.4904 10.4706 6.48974 10.6666 6.6844C10.7653 6.78174 10.8139 6.9104 10.8139 7.0384Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__button_container">
                        <button className="header__button header__button--episodes _button-hover">RECENT EPISODES</button>
                        <button className="header__button header__button--subscribe _button-hover">SUBSCRIBE</button>
                    </div>
                </div>
            </header>
            <main className="page">
                <div className={classNames(styles["main-block"])}>
                    <img className={classNames("main-block__img-one", styles["main-block__img-one"])} src="/MainPage/bkgdImg/boom.png" />
                    <img className={classNames("main-block__img-second", styles["main-block__img-second"])} src="/AboutPage/mainBlock/vector.png" />
                    <div className={classNames(styles["main-block__container"], "_container")}>
                        <h1 className={styles["main-block__title"]}>
                            About <br /> <span>Pod of Cast</span>
                        </h1>
                        <p className={styles["main-block__text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
                        </p>
                        <div className={styles["main-block__btn-container"]}>
                            <button className={classNames(styles["main-block__btn-sponsor"], styles["_button"], "_button-hover")}>BECOME SPONSOR</button>
                            <button className={classNames(styles["main-block__btn-subcribe"], styles["_button"], "_button-hover")}>SUBSCRIBE</button>
                        </div>
                        <div className={styles["main-block__row"]}>
                            <div className={styles["main-block__column"]}>
                                <div className={styles["item-about"]}>
                                    <h1 className={styles["item-about__total"]}>
                                        <span>76</span>K
                                    </h1>
                                    <p className={styles["item-about__name"]}>Community Members</p>
                                </div>
                            </div>
                            <div className={styles["main-block__column"]}>
                                <div className={styles["item-about"]}>
                                    <h1 className={styles["item-about__total"]}>
                                        <span>128</span>K
                                    </h1>
                                    <p className={styles["item-about__name"]}>Podcast Subscribers</p>
                                </div>
                            </div>
                            <div className={styles["main-block__column"]}>
                                <div className={styles["item-about"]}>
                                    <h1 className={styles["item-about__total"]}>
                                        <span>59</span>K
                                    </h1>
                                    <p className={styles["item-about__name"]}>Daily Listeners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["about-block"]}></div>
            </main>
        </>
    );
};

export default AboutPage;
