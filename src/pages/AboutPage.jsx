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
                        <Link to="/">
                            <img src="/MainPage/logo/logo.svg" alt="logo" />
                        </Link>
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
                    <div className={styles["block-sponsor__scroll-container"]} ref={containerRef}>
                        <div className={styles["sponsor-card"]}>
                            <div className={styles["sponsor-card__content"]}>
                                <div className={styles["sponsor-card__sponsor"]}>
                                    <div className={styles["sponsor-card__sponsor-name"]}>
                                        <img src="./AboutPage/SponsorBlock/Google.png" alt="Google" />
                                    </div>
                                </div>
                                <p className={styles["sponsor-card__discription"]}>
                                    Quis dictum cursus faucibus mattis <span>dignissim</span>. Pellentes <br /> que
                                    purus in sed sodales in mauris molestie. Eleifend estcon <br /> sctetur interdum eu
                                    in auctor. Gravida leo et.
                                </p>
                            </div>
                        </div>
                        <div className={styles["sponsor-card"]}>
                            <div className={styles["sponsor-card__content"]}>
                                <div className={styles["sponsor-card__sponsor"]}>
                                    <div className={styles["sponsor-card__sponsor-name"]}>
                                        <img src="./AboutPage/SponsorBlock/Spotify.png" alt="Spotify" />
                                    </div>
                                </div>
                                <p className={styles["sponsor-card__discription"]}>
                                    Quis dictum cursus faucibus mattis <span>dignissim</span>. Pellentes <br /> que
                                    purus in sed sodales in mauris molestie. Eleifend estcon <br /> sctetur interdum eu
                                    in auctor. Gravida leo et.
                                </p>
                            </div>
                        </div>
                        <div className={styles["sponsor-card"]}>
                            <div className={styles["sponsor-card__content"]}>
                                <div className={styles["sponsor-card__sponsor"]}>
                                    <div className={styles["sponsor-card__sponsor-name"]}>
                                        <img src="./AboutPage/SponsorBlock/Spotify.png" alt="Spotify" />
                                    </div>
                                </div>
                                <p className={styles["sponsor-card__discription"]}>
                                    Quis dictum cursus faucibus mattis <span>dignissim</span>. Pellentes <br /> que
                                    purus in sed sodales in mauris molestie. Eleifend estcon <br /> sctetur interdum eu
                                    in auctor. Gravida leo et.
                                </p>
                            </div>
                        </div>
                        <div className={styles["sponsor-card"]}>
                            <div className={styles["sponsor-card__content"]}>
                                <div className={styles["sponsor-card__sponsor"]}>
                                    <div className={styles["Sponsor-card__sponsor-name"]}>
                                        <img src="./AboutPage/SponsorBlock/Youtube.png" alt="Youtube" />
                                    </div>
                                </div>
                                <p className={styles["sponsor-card__discription"]}>
                                    Quis dictum cursus faucibus mattis <span>dignissim</span>. Pellentes <br /> que
                                    purus in sed sodales in mauris molestie. Eleifend estcon <br /> sctetur interdum eu
                                    in auctor. Gravida leo et.
                                </p>
                            </div>
                        </div>
                    </div>
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
                <div className={styles["block-message"]}>
                    <div className={styles["block-message__vector1"]}>
                        <svg
                            width="124"
                            height="124"
                            viewBox="0 0 124 124"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M86.3474 2C76.4722 11.0172 63.6396 29.7092 31.2177 32.9779C-0.450531 36.1705 74.6031 3.02726 97.5111 17.6517C124.289 34.7467 -8.1881 84.113 8.77193 64.9345C18.2604 54.205 106.907 33.3564 106.907 50.2606C106.907 71.7648 8.77179 104.986 2.66813 97.3922C-8.09955 83.9963 114.757 54.8902 121.001 72.7607C128.447 94.07 50.0547 119.321 35.4387 111.169C23.7459 104.647 110.256 89.7993 122 122"
                                stroke="#CD4631"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div className={styles["block-message__vector2"]}>
                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M69.6582 24.7408C70.078 25.2013 70.1322 25.8783 69.8072 26.42C69.5092 26.921 69.2519 27.3544 68.954 27.7606C65.8665 32.0398 64.1738 34.2742 61.1269 38.5804C60.3551 39.6637 58.4863 42.9815 57.7686 44.119C57.7551 44.1325 57.7551 44.146 57.7415 44.1596C57.0915 45.1346 55.4936 45.0669 54.979 43.9971C54.979 43.9971 54.979 43.9835 54.9655 43.9835C54.2072 42.3179 53.5978 40.5981 52.8936 38.9054C50.9572 34.2335 48.2624 30.1846 43.7801 27.5304C42.1551 26.569 42.128 25.8648 43.3874 24.47C43.8613 23.9554 44.3353 23.4273 44.8499 22.9669C49.8197 18.5387 53.2457 13.0679 55.8051 6.97417C55.9676 6.595 56.2926 6.29708 56.6447 5.99917C57.1051 5.62 57.7686 5.67417 58.1749 6.1075C58.5134 6.45958 58.8249 6.83875 59.0145 7.25854C59.4342 8.23354 59.5426 9.33042 59.7999 10.3731C61.1811 16.0471 64.2551 20.57 68.9269 24.0502C69.1842 24.2398 69.4144 24.4835 69.6582 24.7408ZM57.2134 11.145C55.6019 13.8262 54.2478 16.5887 52.4061 18.9992C50.5238 21.4502 48.1676 23.5356 46.0144 25.7971C51.4853 29.0742 54.654 34.2606 56.5634 40.6252C59.3665 34.8294 63.2394 30.2252 67.4915 25.919C60.7749 20.8002 59.1769 18.4846 57.2134 11.145Z"
                                fill="black"
                            />
                            <path
                                d="M18.5926 71.4733C17.3603 67.9796 16.2905 64.4181 14.9364 60.9785C13.6093 57.6473 11.6322 54.6817 8.78846 52.3931C7.74575 51.5535 7.77283 50.7952 8.62596 49.8473C13.4197 44.6337 17.103 38.7296 19.7437 32.1619C20.028 31.4577 20.7864 30.3337 21.3145 30.3337C22.7499 29.9952 23.2645 32.7983 23.3187 33.0556C24.5239 39.664 28.6135 44.4712 33.2041 48.9671C34.6937 50.4296 34.8155 50.8765 33.353 52.2848C27.8416 57.566 24.1853 64.066 21.0437 70.9046C20.0551 73.2879 18.7416 71.8931 18.5926 71.4733ZM10.4405 50.7817C13.3655 52.6369 15.302 55.115 16.7103 57.9181C18.078 60.6671 19.0801 63.5785 20.2176 66.3681C22.8447 60.491 26.3926 55.0608 31.7822 50.9306C26.5687 46.8275 22.452 42.1421 21.1926 35.4254C18.9312 41.465 15.3426 46.489 10.4405 50.7817Z"
                                fill="#81ADC8"
                            />
                            <path
                                d="M55.6021 56.9024C52.6094 60.9243 50.7812 65.5149 49.1021 70.1868C48.9937 70.4847 48.6417 72.1774 47.3552 72.1639C46.9896 72.1639 46.3802 71.5816 46.15 71.1212C45.1344 69.0493 44.4979 66.7337 43.2114 64.8649C41.6948 62.6441 39.6094 60.8159 37.8489 58.7712C37.5916 58.4732 37.4969 57.7962 37.6594 57.4305C37.9708 56.7534 38.526 56.2118 38.9594 55.5889C41.1666 52.3389 43.3333 49.0618 45.6083 45.8659C46.0823 45.2024 47.0167 44.4034 47.5719 44.4034C48.9531 44.3899 49.2239 45.4732 49.4677 46.2451C50.5781 49.793 52.4875 52.7587 55.2635 55.2097C56.2521 56.1305 55.7239 56.7399 55.6021 56.9024ZM40.3948 57.8368C43.6177 60.1253 45.8114 63.4295 47.1385 67.1264C49.1021 63.5243 51.1062 59.8545 53.1646 56.0628C50.4021 54.1534 48.4792 50.592 47.5989 47.9649C45.1885 51.2691 42.8052 54.5326 40.3948 57.8368Z"
                                fill="#CD4631"
                            />
                        </svg>
                    </div>
                    <div className={classNames(styles["block-message__container"], "_container")}>
                        <div className={styles["block-message__vector3"]}>
                            <svg
                                width="70"
                                height="32"
                                viewBox="0 0 70 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.8455 3.98285C15.7481 5.16747 13.7556 6.15193 11.7444 7.50053C8.79734 9.46699 5.96873 11.6377 3.09225 13.7174C2.34498 14.2521 1.63483 15.152 0.669269 14.2825C0.0374764 13.7114 0.258281 12.8061 1.31604 11.5157C1.93182 10.7728 2.59291 10.0741 3.31846 9.45596C7.42906 5.93757 11.9418 3.18446 16.8463 1.23975C17.6823 0.915971 18.5732 0.65456 19.4577 0.591515C21.1379 0.485432 22.0899 1.81301 21.5114 3.55259C21.1394 4.67526 20.4928 5.71708 19.9055 6.74556C18.7851 8.69525 17.5836 10.5749 16.4859 12.5466C16.1852 13.0896 15.7402 14.0522 15.9585 14.5939C16.3598 15.4205 18.4967 14.0165 19.456 13.3594C22.3935 11.3747 25.2735 9.2807 28.1918 7.25958C31.1136 5.22409 34.2042 3.53095 37.5662 2.56458C38.5461 2.28316 39.5739 2.09284 40.5823 2.09704C42.2082 2.09822 43.1417 3.55899 42.613 5.267C42.3574 6.08508 41.9247 6.88185 41.412 7.54721C40.1087 9.21204 38.7052 10.7704 37.3697 12.3949C35.9739 14.0941 34.5389 15.7818 33.5469 18.3545C34.3421 17.9109 34.8482 17.6749 35.3066 17.3477C38.2746 15.295 41.2008 13.1839 44.188 11.1676C46.9064 9.33406 49.73 7.70095 52.8563 6.89622C54.0369 6.59686 55.3167 6.46534 56.5098 6.63174C58.1617 6.87158 58.9345 8.53147 58.1965 10.1779C57.6491 11.3875 56.8506 12.4771 56.0662 13.5091C54.5681 15.4554 52.9924 17.3173 51.4751 19.2272C51.1336 19.6503 50.1731 20.5997 50.7598 20.8957C51.5996 20.3266 52.4428 19.7431 53.2922 19.1922C55.5522 17.6858 57.78 16.1391 60.0783 14.7056C62.1479 13.405 64.3411 12.4026 66.8096 12.5132C68.8908 12.6021 69.9513 14.3467 69.1047 16.4386C68.6919 17.4415 68.1151 18.4268 67.439 19.2444C64.4832 22.8563 61.4726 26.4058 58.4715 29.9736C58.1404 30.3536 57.7763 30.7546 57.346 30.9668C56.9489 31.158 56.3189 31.3268 56.0365 31.105C55.7541 30.8833 55.2908 30.254 55.577 29.3679C55.8457 28.5537 56.2187 28.0012 56.7018 27.3425C58.9295 24.3018 61.2251 21.3273 63.4981 18.3307C64.1148 17.5265 64.7542 16.7444 65.384 15.944C65.5945 15.7133 65.5657 15.6587 65.5118 15.535C65.185 15.2078 63.9248 15.7763 63.381 16.1091C60.271 17.9968 57.1932 19.9247 54.1249 21.8709C52.9142 22.6388 51.7574 23.5305 50.5467 24.2984C49.5516 24.9296 48.4645 25.1333 47.5191 24.2389C46.5736 23.3445 46.5671 22.0488 47.0307 20.9531C47.7023 19.3487 48.4464 17.7349 49.4493 16.3821C50.9623 14.317 52.7316 12.4659 54.3841 10.5188C54.6619 10.1847 54.9205 9.81419 55.4036 9.15549C54.6463 9.27141 54.1962 9.27753 53.7608 9.39579C50.904 10.1874 48.2969 11.6225 45.843 13.349C42.8976 15.4238 40.0611 17.6846 37.1313 19.8102C35.972 20.6548 34.7795 21.5206 33.5027 22.0996C31.0215 23.2483 29.1957 21.7097 29.6246 18.8017C29.8328 17.4306 30.3594 16.0762 30.9661 14.8532C32.4951 11.7454 34.8347 9.33831 37.0896 6.87549C37.5673 6.35383 38.045 5.83216 38.4261 5.18962C35.6527 5.46677 33.1846 6.61927 30.8566 8.05946C27.242 10.2915 23.7388 12.7565 20.1756 15.0652C19.2599 15.6582 18.2727 16.1993 17.2527 16.5305C15.5197 17.0831 14.0835 15.844 14.1729 13.868C14.2311 12.422 14.5861 10.9092 15.1187 9.58743C15.8876 7.64207 17.9987 4.27439 18.0025 4.02906C18.0551 3.8135 17.8455 3.98285 17.8455 3.98285Z"
                                    fill="#81ADC8"
                                />
                            </svg>
                        </div>
                        <div className={styles["block-message__title-container"]}>
                            <h1 className={styles["block-message__title"]}>Get in touch</h1>
                            <h3 className={styles["block-message__text"]}>Send your message to us</h3>
                        </div>
                        <div className={classNames(styles[("block-message__form-message", "form-message")])}>
                            <div className={styles["form-message__rows"]}>
                                <div className={styles["form-message__input-container"]}>
                                    <p>
                                        Full name <span>*</span>
                                    </p>
                                    <input type="text" name="username" placeholder="Porter Severus" />
                                </div>
                                <div className={styles["form-message__input-container"]}>
                                    <p>
                                        Email <span>*</span>
                                    </p>
                                    <input type="email" name="useremail" placeholder="johndoe@gmail.com" />
                                </div>
                                <div className={styles["form-message__input-container"]}>
                                    <p>
                                        Phone <span>*</span>
                                    </p>
                                    <input type="tel" name="usernumber" placeholder="Phone" />
                                </div>
                                <div className={styles["form-message__input-container"]}>
                                    <p>
                                        Subject <span>*</span>
                                    </p>
                                    <input type="text" name="usersubject" placeholder="Subject..." />
                                </div>
                            </div>
                            <div
                                className={classNames(
                                    styles["form-message__input-container"],
                                    styles["form-message__input-message"]
                                )}
                            >
                                <p>
                                    Message <span>*</span>
                                </p>
                                <textarea type="text" name="usermessage" placeholder="Your message goes here..." />
                            </div>
                        </div>
                        <p className={styles["block-message__info"]}>
                            <span>*</span>required
                        </p>
                        <button className={classNames(styles["block-message__btn"], "_button-hover")}>
                            SEND MESSAGE
                        </button>
                        <p className={styles["block-message__description"]}>
                            Viverra at port accumsan. <a href="#">Orci non</a>
                        </p>
                    </div>
                </div>
                <div className="cta">
                    <div className="cta__backgraund">
                        <img src="/MainPage/cta/Home.png" className="cta__home-img" />
                        <img src="/MainPage/cta/play.png" className="cta__play-img" />
                        <img src="/MainPage/cta/backgroundSecond.png" className="cta__background-second" />
                        <img src="/MainPage/cta/backgroundThird.png" className="cta__background-third" />
                        <img src="/MainPage/cta/backgroundFourth.png" className="cta__background-fourth" />
                        <img src="/MainPage/cta/backgroundFive.png" className="cta__background-five" />
                    </div>
                    <div className="cta__container _container">
                        <img className="scribble" src="/scribbleRed.png" />
                        <img src="/MainPage/cta/background.png" className="cta__background-first" />
                        <div className="cta__beta">
                            <p>BETA</p>
                        </div>
                        <h1>Available now Pod of Cast App</h1>
                        <h3>We just launched our podcast app!</h3>
                        <button className="cta__btm-download _button-hover">DOWNLOAD NOW</button>
                        <div className="cta__platform">
                            <p>Content also available on:</p>
                            <div className="cta__platform-container">
                                <button>
                                    <img src="/MainPage/cta/google.png" alt="google" />
                                </button>
                                <button>
                                    <img src="/MainPage/cta/spotify.png" alt="spotify" />
                                </button>
                                <button>
                                    <img src="/MainPage/cta/youtube.png" alt="youtoube" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer__container _container">
                        <img src="/MainPage/footer/logo.png" alt="logo" className="footer__logo" />
                        <p className="footer__date">©2021.</p>
                        <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="footer__social">
                            <div className="footer__twitter">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.84156 21C6.41531 21 4.15363 20.2943 2.25 19.0767C3.86624 19.1813 6.71855 18.9308 8.49268 17.2386C5.82381 17.1161 4.6202 15.0692 4.4632 14.1945C4.68997 14.2819 5.77148 14.3869 6.382 14.142C3.31192 13.3722 2.84095 10.678 2.94561 9.85573C3.52125 10.2581 4.49809 10.3981 4.88185 10.3631C2.02109 8.31618 3.05027 5.23707 3.55613 4.57226C5.60912 7.4165 8.6859 9.01393 12.4923 9.10278C12.4205 8.78802 12.3826 8.46032 12.3826 8.12373C12.3826 5.70819 14.3351 3.75 16.7435 3.75C18.0019 3.75 19.1358 4.28457 19.9318 5.13963C20.7727 4.94258 22.0382 4.4813 22.6569 4.0824C22.3451 5.20208 21.3742 6.13612 20.7869 6.48231C20.7821 6.47048 20.7918 6.49408 20.7869 6.48231C21.3028 6.40428 22.6986 6.13603 23.25 5.76192C22.9773 6.39094 21.948 7.4368 21.1033 8.02232C21.2605 14.9535 15.9574 21 8.84156 21Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="footer__insta">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.5333 6.8665C18.5333 7.6397 17.9065 8.2665 17.1333 8.2665C16.3601 8.2665 15.7333 7.6397 15.7333 6.8665C15.7333 6.09331 16.3601 5.4665 17.1333 5.4665C17.9065 5.4665 18.5333 6.09331 18.5333 6.8665Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 16.6665C14.5773 16.6665 16.6667 14.5772 16.6667 11.9998C16.6667 9.42251 14.5773 7.33317 12 7.33317C9.42268 7.33317 7.33334 9.42251 7.33334 11.9998C7.33334 14.5772 9.42268 16.6665 12 16.6665ZM12 14.7998C13.5464 14.7998 14.8 13.5462 14.8 11.9998C14.8 10.4534 13.5464 9.19984 12 9.19984C10.4536 9.19984 9.20001 10.4534 9.20001 11.9998C9.20001 13.5462 10.4536 14.7998 12 14.7998Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.66667 11.6265C2.66667 8.49021 2.66667 6.92206 3.27704 5.72416C3.81393 4.67045 4.67062 3.81376 5.72433 3.27687C6.92223 2.6665 8.49038 2.6665 11.6267 2.6665H12.3733C15.5096 2.6665 17.0778 2.6665 18.2757 3.27687C19.3294 3.81376 20.1861 4.67045 20.723 5.72416C21.3333 6.92206 21.3333 8.49021 21.3333 11.6265V12.3732C21.3333 15.5095 21.3333 17.0776 20.723 18.2755C20.1861 19.3292 19.3294 20.1859 18.2757 20.7228C17.0778 21.3332 15.5096 21.3332 12.3733 21.3332H11.6267C8.49038 21.3332 6.92223 21.3332 5.72433 20.7228C4.67062 20.1859 3.81393 19.3292 3.27704 18.2755C2.66667 17.0776 2.66667 15.5095 2.66667 12.3732V11.6265ZM11.6267 4.53317H12.3733C13.9723 4.53317 15.0592 4.53462 15.8994 4.60327C16.7178 4.67013 17.1363 4.79133 17.4282 4.94008C18.1307 5.29801 18.7018 5.86913 19.0598 6.57161C19.2085 6.86355 19.3297 7.28207 19.3966 8.10044C19.4652 8.94061 19.4667 10.0276 19.4667 11.6265V12.3732C19.4667 13.9721 19.4652 15.0591 19.3966 15.8992C19.3297 16.7176 19.2085 17.1361 19.0598 17.4281C18.7018 18.1305 18.1307 18.7017 17.4282 19.0596C17.1363 19.2084 16.7178 19.3295 15.8994 19.3964C15.0592 19.4651 13.9723 19.4665 12.3733 19.4665H11.6267C10.0277 19.4665 8.94078 19.4651 8.10061 19.3964C7.28223 19.3295 6.86372 19.2084 6.57177 19.0596C5.8693 18.7017 5.29817 18.1305 4.94025 17.4281C4.79149 17.1361 4.6703 16.7176 4.60343 15.8992C4.53479 15.0591 4.53334 13.9721 4.53334 12.3732V11.6265C4.53334 10.0276 4.53479 8.94061 4.60343 8.10044C4.6703 7.28207 4.79149 6.86355 4.94025 6.57161C5.29817 5.86913 5.8693 5.29801 6.57177 4.94008C6.86372 4.79133 7.28223 4.67013 8.10061 4.60327C8.94078 4.53462 10.0277 4.53317 11.6267 4.53317Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="footer__tiktok">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.33812 14.8444C6.45533 13.8739 6.85333 13.3306 7.60335 12.7736C8.67649 12.0193 10.017 12.446 10.017 12.446V9.91462C10.3429 9.90629 10.6689 9.92561 10.9913 9.97234V13.23C10.9913 13.23 9.65116 12.8033 8.57801 13.558C7.8284 14.1146 7.42958 14.6583 7.31278 15.6287C7.30912 16.1557 7.40801 16.8445 7.8634 17.4401C7.75081 17.3824 7.63604 17.3166 7.51911 17.2427C6.51596 16.5691 6.33324 15.5585 6.33812 14.8444ZM16.5263 5.23411C15.7881 4.42517 15.5089 3.60842 15.408 3.03467H16.3366C16.3366 3.03467 16.1515 4.53906 17.5009 6.01849L17.5197 6.03838C17.156 5.8096 16.8224 5.53956 16.5263 5.23411ZM20.9999 7.52756V10.7197C20.9999 10.7197 19.8149 10.6733 18.9379 10.4501C17.7134 10.1381 16.9263 9.65953 16.9263 9.65953C16.9263 9.65953 16.3826 9.31824 16.3387 9.29445V15.8862C16.3387 16.2532 16.2382 17.1698 15.9317 17.9343C15.5317 18.9343 14.9143 19.5908 14.8008 19.725C14.8008 19.725 14.0499 20.6123 12.7253 21.2098C11.5313 21.7489 10.483 21.7352 10.1696 21.7489C10.1696 21.7489 8.35744 21.8207 6.72677 20.7609C6.37415 20.5273 6.04499 20.2628 5.74356 19.9707L5.7517 19.9765C7.38278 21.0363 9.19455 20.9645 9.19455 20.9645C9.50831 20.9509 10.5566 20.9645 11.7502 20.4255C13.0737 19.8279 13.8257 18.9406 13.8257 18.9406C13.938 18.8064 14.5582 18.15 14.9566 17.1495C15.2623 16.3854 15.3636 15.4684 15.3636 15.1014V8.51047C15.4076 8.53465 15.9508 8.87594 15.9508 8.87594C15.9508 8.87594 16.7383 9.35491 17.9628 9.66655C18.8402 9.88966 20.0249 9.93607 20.0249 9.93607V7.43473C20.4302 7.52561 20.7757 7.55018 20.9999 7.52756Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M20.0253 7.43473V9.93529C20.0253 9.93529 18.8407 9.88887 17.9633 9.66577C16.7387 9.35374 15.9513 8.87516 15.9513 8.87516C15.9513 8.87516 15.408 8.53387 15.364 8.50969V15.1022C15.364 15.4692 15.2635 16.3862 14.9571 17.1503C14.557 18.1507 13.9397 18.8072 13.8261 18.9414C13.8261 18.9414 13.0749 19.8287 11.7507 20.4262C10.5571 20.9653 9.50874 20.9516 9.19498 20.9653C9.19498 20.9653 7.38321 21.0371 5.75213 19.9773L5.74399 19.9715C5.57178 19.8047 5.40968 19.6286 5.25849 19.4441C4.73799 18.8095 4.41894 18.0591 4.33877 17.845C4.33863 17.844 4.33863 17.8431 4.33877 17.8422C4.20976 17.4701 3.93873 16.5765 3.97576 15.711C4.04128 14.184 4.57847 13.2467 4.72049 13.0119C5.09664 12.3716 5.58587 11.7987 6.16641 11.3188C6.6787 10.9046 7.25936 10.5751 7.88458 10.3437C8.56046 10.072 9.28422 9.92637 10.017 9.91462V12.446C10.017 12.446 8.67652 12.0208 7.60378 12.7736C6.85376 13.3306 6.45576 13.8739 6.33855 14.8444C6.33367 15.5585 6.51639 16.5691 7.51873 17.2431C7.63566 17.3172 7.75042 17.383 7.86301 17.4405C8.03812 17.6681 8.25125 17.8664 8.49379 18.0275C9.47293 18.6473 10.2934 18.6906 11.3425 18.288C12.042 18.0189 12.5686 17.4124 12.8128 16.7404C12.9662 16.3207 12.9642 15.8982 12.9642 15.4614V3.03467H15.4059C15.5069 3.60842 15.786 4.42517 16.5243 5.23411C16.8204 5.53956 17.1539 5.8096 17.5176 6.03838C17.6251 6.14954 18.1745 6.69911 18.8797 7.0365C19.2444 7.21089 19.6288 7.34452 20.0253 7.43473Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M3.36691 17.0679V17.0698L3.4275 17.234C3.42054 17.2149 3.39803 17.1568 3.36691 17.0679Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M7.88461 10.344C7.25939 10.5754 6.67873 10.9049 6.16644 11.3191C5.58572 11.8001 5.09661 12.3742 4.72093 13.0158C4.57891 13.2498 4.04172 14.1878 3.9762 15.7149C3.93917 16.5804 4.2102 17.4739 4.33921 17.846C4.33907 17.847 4.33907 17.8479 4.33921 17.8488C4.4206 18.061 4.73843 18.8114 5.25893 19.4479C5.41012 19.6325 5.57222 19.8085 5.74443 19.9753C5.19268 19.6095 4.7006 19.1674 4.28427 18.6632C3.76825 18.034 3.45001 17.2914 3.36699 17.0722C3.36689 17.0706 3.36689 17.0691 3.36699 17.0675V17.0648C3.23758 16.6931 2.96573 15.7991 3.00358 14.9324C3.0691 13.4054 3.60628 12.4681 3.74831 12.2333C4.12388 11.5917 4.613 11.0176 5.19382 10.5367C5.706 10.1223 6.28669 9.79279 6.91199 9.56155C7.30202 9.40646 7.70833 9.29203 8.1239 9.22027C8.75019 9.11549 9.38984 9.1064 10.0191 9.19336V9.91493C9.2856 9.92643 8.56113 10.0721 7.88461 10.344Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M15.408 3.03476H12.9662V15.4619C12.9662 15.8987 12.9662 16.32 12.8148 16.7408C12.5682 17.4125 12.0437 18.019 11.3445 18.2881C10.295 18.6922 9.47454 18.6474 8.49581 18.0276C8.25285 17.8673 8.03917 17.6696 7.8634 17.4425C8.69726 17.8688 9.44361 17.8614 10.3682 17.5057C11.067 17.2366 11.5923 16.6301 11.8381 15.958C11.992 15.5383 11.9899 15.1159 11.9899 14.6795V2.25H15.3616C15.3616 2.25 15.3237 2.55891 15.408 3.03476ZM20.0253 6.74328V7.43483C19.6295 7.34447 19.2458 7.21085 18.8817 7.0366C18.1765 6.69921 17.6271 6.14964 17.5197 6.03848C17.6443 6.11693 17.7737 6.1883 17.9071 6.25222C18.7645 6.66255 19.609 6.78502 20.0253 6.74328Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                        <nav className="footer__nav">
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#">Features</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#">Episodes</a>
                                </li>
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="footer__app-platform app-platform">
                            <p>App available on:</p>
                            <div className="app-platform__frame">
                                <img src="/MainPage/footer/app.png" alt="app store" />
                                <img src="/MainPage/footer/googlePlay.png" alt="google play" />
                            </div>
                        </div>
                        <div className="footer__media-platform media-platform">
                            <p>Listen to episodes on your fav platform:</p>
                            <div className="media-platform__frame">
                                <img src="/MainPage/footer/google.png" alt="google" />
                                <img src="/MainPage/footer/spotify.png" alt="spotify" />
                                <img src="/MainPage/footer/youtube.png" alt="youtube" />
                            </div>
                        </div>
                        <div className="footer__footnote footnote">
                            <p>
                                ©2022. All Rights Reserved. <span>Pod of Cast</span>
                            </p>
                            <div className="footnote__frame">
                                <p>Terms</p>
                                <p>•</p>
                                <p>Privacy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage
