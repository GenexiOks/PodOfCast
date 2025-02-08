import React, { useRef } from "react"
import "./scss/AboutPage.module.scss"
import { Link } from "react-router-dom"
import classNames from "classnames"
import styles from "./scss/AboutPage.module.scss"

const AboutPage = () => {
    const containerRef = useRef(null)

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: "smooth" })
        }
    }

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" })
        }
    }

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
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
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
                        <button className="header__button header__button--episodes _button-hover">
                            RECENT EPISODES
                        </button>
                        <button className="header__button header__button--subscribe _button-hover">SUBSCRIBE</button>
                    </div>
                </div>
            </header>
            <main className="page">
                <div className={styles["main-block"]}>
                    <img
                        className={classNames("main-block__img-one", styles["main-block__img-one"])}
                        src="/MainPage/bkgdImg/boom.png"
                    />
                    <img
                        className={classNames("main-block__img-second", styles["main-block__img-second"])}
                        src="/AboutPage/MainBlock/vector.png"
                    />
                    <div className={classNames(styles["main-block__container"], "_container")}>
                        <h1 className={styles["main-block__title"]}>
                            About <br /> <span>Pod of Cast</span>
                        </h1>
                        <p className={styles["main-block__text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt <br /> ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
                        </p>
                        <div className={styles["main-block__btn-container"]}>
                            <button
                                className={classNames(
                                    styles["main-block__btn-sponsor"],
                                    styles["_button"],
                                    "_button-hover"
                                )}
                            >
                                BECOME SPONSOR
                            </button>
                            <button
                                className={classNames(
                                    styles["main-block__btn-subcribe"],
                                    styles["_button"],
                                    "_button-hover"
                                )}
                            >
                                SUBSCRIBE
                            </button>
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
                <div className={styles["about-block"]}>
                    <img
                        className={styles["about-block__img-background1"]}
                        src="./AboutPage/AboutBlock/vector1.png"
                        alt="img"
                    />
                    <div className={classNames(styles["about-block__container"], "_container")}>
                        <div className={styles["about-block__backgrounds-img"]}>
                            <img
                                className={styles["about-block__img-background2"]}
                                src="./AboutPage/AboutBlock/vector2.png"
                                alt="img"
                            />
                            <img
                                className={styles["about-block__img-background3"]}
                                src="./AboutPage/AboutBlock/vector3.png"
                                alt="img"
                            />
                        </div>
                        <div className={styles["title-container"]}>
                            <h1 className={styles["title-container__title"]}>What our listeners say</h1>
                            <p className={styles["title-container__text"]}>
                                Their experience throughout every platform
                            </p>
                        </div>
                        <img className={styles["about-block__img"]} src="./AboutPage/AboutBlock/img.png" alt="img" />
                        <h2 className={styles["about-block__title"]}>About and History</h2>
                        <div className={styles["about-block__about"]}>
                            <div className={styles["about-block__about-text"]}>
                                <p>
                                    Eu non <span>diam</span> phasellus vestibulum lorem. Fringilla est ullamcorper eget
                                    nulla facilisi etiam dignissim. Id diam vel quam <span>elementum pulvinar</span>.
                                </p>
                                <p>
                                    Elementum eu facilisis sed odio morbi quis commodo. <br /> Sed odio morbi quis
                                    commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.
                                </p>
                            </div>
                            <div className={styles["about-block__about-text"]}>
                                <p>
                                    Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span> elit. Quam
                                    pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et
                                    integer in. Sit vel, senectus iaculis morbi. <span>Amet</span> interdum imperdiet
                                    laoreet <span>morbi</span> tincidunt fermentum, libero. Ante enim eget.
                                </p>
                                <p>
                                    Viverra at porttitor accumsan. <a href="#">Orci non here</a>
                                </p>
                            </div>
                        </div>
                        <h2 className={styles["about-block__bottom-title"]}>Founder and Main Host</h2>
                        <div className={styles["about-block__host-container"]}>
                            <div className={styles["host-card"]}>
                                <div className={styles["host-card__host-photo"]}>
                                    <img src="./AboutPage/AboutBlock/avatar1.png" alt="photo" />
                                </div>
                                <img
                                    className={styles["host-card__background-vector"]}
                                    src="./AboutPage/AboutBlock/hostVector.png"
                                    alt="vector"
                                />
                                <div className={styles["host-card__info"]}>
                                    <div className={styles["host-card__title"]}>
                                        <p className={styles["host-card__host-number"]}>Host 1</p>
                                        <h1 className={styles["host-card__host-name"]}>Porter Severus</h1>
                                    </div>
                                    <p className={styles["host-card__host-discription"]}>
                                        Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor
                                        rarylet podofcast.
                                    </p>
                                </div>
                                <div className={styles["host-card__host-sosial-block"]}>
                                    <div className={styles["host-card__host-social"]}>
                                        <p>follow me:</p>
                                        <div className={styles["host-card__social-icons"]}>
                                            <a href="#">
                                                <img src="./AboutPage/AboutBlock/tiktok.png" alt="tiktok" />
                                            </a>
                                            <a href="#">
                                                <img src="./AboutPage/AboutBlock/twitter.png" alt="twitter" />
                                            </a>
                                            <a href="#">
                                                <img src="./AboutPage/AboutBlock/instagram.png" alt="instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["host-card"]}>
                                <div className={styles["host-card__host-photo"]}>
                                    <img src="./AboutPage/AboutBlock/avatar2.png" alt="photo" />
                                </div>
                                <img
                                    className={styles["host-card__background-vector"]}
                                    src="./AboutPage/AboutBlock/hostVector2.png"
                                    alt="vector"
                                />
                                <div className={styles["host-card__info"]}>
                                    <div className={styles["host-card__title"]}>
                                        <p className={styles["host-card__host-number"]}>Host 2</p>
                                        <h1 className={styles["host-card__host-name"]}>Marques Keiths</h1>
                                    </div>
                                    <p className={styles["host-card__host-discription"]}>
                                        Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor
                                        rarylet podofcast.
                                    </p>
                                </div>
                                <div className={styles["host-card__host-sosial-block"]}>
                                    <div className={styles["host-card__host-social"]}>
                                        <p>follow me:</p>
                                        <div className={styles["host-card__social-icons"]}>
                                            <a href="#">
                                                <img src="./AboutPage/AboutBlock/tiktok.png" alt="tiktok" />
                                            </a>
                                            <a href="#">
                                                <img src="./AboutPage/AboutBlock/twitter.png" alt="twitter" />
                                            </a>
                                            <a href="#">
                                                <img src="./AboutPage/AboutBlock/instagram.png" alt="instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["block-sponsor"]}>
                    <div className={classNames(styles["block-sponsor__container"], "_container")}>
                        <div className={styles["block-sponsor__background-vector"]}>
                            <svg
                                width="74"
                                height="74"
                                viewBox="0 0 74 74"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M63.3754 43.9371C60.5234 43.2048 55.7185 42.4211 53.9456 41.2135C53.2133 40.7125 53.3032 40.16 53.4317 39.7746C53.5602 39.4149 54.2924 39.0423 54.7421 39.068C55.757 39.1066 56.772 39.325 57.7484 39.5948C59.9195 40.1857 62.0779 40.8024 64.2105 41.509C65.3411 41.8816 65.7008 42.7423 65.0456 43.2948C64.6602 43.6159 64.3004 43.9371 63.3754 43.9371Z"
                                    fill="#CD4631"
                                />
                                <path
                                    d="M18.4103 63.7861C18.5387 63.1052 18.7957 62.7455 19.1682 62.2187C20.62 60.1889 22.136 58.1975 23.6262 56.2062C23.7162 56.0906 23.8189 55.9621 23.9346 55.8722C24.4485 55.4354 25.0266 54.9215 25.6946 55.3968C26.3627 55.885 26.1314 56.6045 25.7717 57.1826C24.2814 59.6107 22.7655 62.026 21.2238 64.4284C20.9926 64.801 20.5943 65.1222 20.196 65.3149C19.2068 65.7902 18.3332 65.135 18.4103 63.7861Z"
                                    fill="#CD4631"
                                />
                                <path
                                    d="M50.5154 63.337C50.5154 63.9152 50.0657 64.3263 49.7317 64.3905C49.2821 64.4804 48.8966 64.4034 48.2543 63.9666C48.0359 63.8252 47.9074 63.4784 47.7789 63.2086C46.8411 61.1787 45.8904 59.1617 44.9782 57.119C44.747 56.6179 44.5157 56.0398 44.5543 55.5131C44.5928 55.0377 44.8883 54.3568 45.2737 54.1898C45.6463 54.0228 46.1473 53.9714 46.7383 54.5495C46.9567 54.7551 47.1623 55.102 47.3036 55.4231C48.2286 57.5686 49.1536 59.7141 50.0529 61.8725C50.2199 62.2836 50.3227 62.7332 50.5154 63.337Z"
                                    fill="#CD4631"
                                />
                                <path
                                    d="M9.73827 45.6334C9.1473 45.4664 8.76188 45.1837 8.67195 44.7983C8.55633 44.3101 8.80043 43.6549 9.08306 43.1924C9.30147 42.8455 9.80251 42.6271 10.2265 42.4858C12.3463 41.7792 14.4789 41.0855 16.6244 40.4303C16.9841 40.3146 17.4466 40.2761 17.7935 40.3917C18.3588 40.5844 18.6029 41.0341 18.1404 41.5737C17.8834 41.882 17.5879 42.2032 17.241 42.3702C15.2369 43.3723 13.2199 44.3358 11.19 45.2865C10.8174 45.4535 10.3164 45.8132 9.73827 45.6334Z"
                                    fill="#CD4631"
                                />
                                <path
                                    d="M53.2646 23.5875C52.9819 23.4719 52.7378 23.0094 52.725 22.7011C52.7122 22.2771 52.8406 21.7632 53.0976 21.4164C54.2924 19.7719 55.5514 18.1532 56.7976 16.5473C56.9774 16.3032 57.2215 16.1105 57.4656 15.9178C58.0181 15.4938 58.7375 15.1212 59.2257 15.7636C59.5083 16.1362 59.5983 17.0868 59.3285 17.408C57.684 19.4122 55.9111 21.3264 54.151 23.2407C54.0097 23.4077 53.7271 23.6775 53.2646 23.5875Z"
                                    fill="#CD4631"
                                />
                                <path
                                    d="M12.0763 20.7996C12.7958 21.018 13.3482 21.1464 13.875 21.3391C15.4038 21.8916 16.9326 22.4569 18.4486 23.035C18.8725 23.202 19.3222 23.369 19.669 23.6388C19.9131 23.8315 20.1829 24.3197 20.093 24.4996C19.9388 24.795 19.7076 25.1676 19.1809 25.1291C18.9624 25.1162 18.6798 25.1034 18.4357 25.0391C16.7142 24.5766 14.9927 24.1398 13.284 23.6259C12.7059 23.4589 12.102 23.2148 11.6395 22.8423C11.3055 22.5725 10.9972 21.9687 11.0871 21.6089C11.1642 21.2749 11.4468 20.7996 12.0763 20.7996Z"
                                    fill="#CD4631"
                                />
                                <path
                                    d="M35.5868 15.4808C35.574 15.6349 35.5611 15.7891 35.5097 15.9304C35.2913 16.5599 35.15 17.2665 34.2635 17.2023C33.3257 17.1381 33.2872 16.3672 33.3 15.7377C33.3385 14.2218 33.4799 12.7058 33.5955 11.177C33.6469 10.6245 33.7111 10.0593 33.8653 9.53252C34.0195 8.99293 34.2379 8.4405 34.983 8.53043C35.6767 8.62036 35.908 9.08286 35.9208 9.69953C35.9208 10.3676 35.7153 14.2218 35.5868 15.4808Z"
                                    fill="#CD4631"
                                />
                            </svg>
                        </div>
                        <div className={styles["block-sponsor__title-container"]}>
                            <h1 className={styles["block-sponsor__title"]}>Our Sponsor</h1>
                            <h3 className={styles["block-sponsor__text"]}>Our current official sponsor</h3>
                        </div>
                        <div className={styles["block-sponsor__scroll-container"]}>
                            <div className={styles["sponsors-card"]}>
                                <div className={styles["sponsor-card__content"]}>
                                    <div className={styles["sponsor-card__sponsor"]}>
                                        <div className={styles["sponsor-card__sponsor-name"]}>
                                            <img src="./AboutPage/SponsorBlock/Google.png" alt="Google" />
                                        </div>
                                    </div>
                                    <p className={styles["sponsor-card__discription"]}>
                                        Quis dictum cursus faucibus mattis <span>dignissim</span>. Pellentes que purus
                                        in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in
                                        auctor. Gravida leo et.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={classNames(styles["block-sponsor__buttons"], "scroll-buttons")}>
                            <button onClick={handleScrollLeft}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24 5.50049C13.784 5.50049 5.5 13.7825 5.5 24.0005C5.5 34.2165 13.784 42.5005 24 42.5005C34.216 42.5005 42.5 34.2165 42.5 24.0005C42.5 13.7825 34.216 5.50049 24 5.50049Z"
                                        stroke="black"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M26.8847 17.0581L19.9127 24.0001L26.8847 30.9421"
                                        stroke="black"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button onClick={handleScrollRight}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24 42.4996C34.216 42.4996 42.5 34.2176 42.5 23.9996C42.5 13.7836 34.216 5.49963 24 5.49963C13.784 5.49963 5.5 13.7836 5.5 23.9996C5.5 34.2176 13.784 42.4996 24 42.4996Z"
                                        stroke="black"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.1153 30.942L28.0873 24L21.1153 17.058"
                                        stroke="black"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage
