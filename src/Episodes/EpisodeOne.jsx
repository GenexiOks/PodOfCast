import styles from "./scss/EpisodeOne.module.scss"
import { Link } from "react-router-dom"

function EpisodeOne() {
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
            <main className="main">
                <div className={styles["episode-block"]}>
                    <div className={styles["episode-block__background-svg1"]}>
                        <svg
                            width="326"
                            height="593"
                            viewBox="0 0 326 593"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-104.953 83.9508C-104.953 130.457 -86.9684 208.876 -154.883 293.648C-221.219 376.45 -129.959 114.254 -38.3047 98.0256C68.8327 79.0554 -115.807 518.301 -125.328 428.909C-130.654 378.898 24.3181 116.399 67.9096 159.991C123.364 215.445 -22.0467 532.191 -56.0005 526.981C-115.9 517.791 98.3315 153.446 159.118 184.826C231.603 222.244 112.128 471.949 56.6898 485.343C12.339 496.057 177.755 254.065 288.446 309.449"
                                stroke="black"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M295.941 289.989C297.022 288.054 299.98 289.052 299.667 291.246L299.091 295.288C298.904 296.605 300.029 297.734 301.346 297.552L317.061 295.372C319.181 295.078 320.219 297.871 318.421 299.033L306.744 306.583C305.389 307.459 305.576 309.496 307.067 310.111L315.016 313.393C316.844 314.148 316.585 316.813 314.647 317.203L309.444 318.248C308.269 318.484 307.564 319.694 307.938 320.833L309.414 325.327C309.978 327.044 308.156 328.569 306.565 327.711L300.221 324.291C298.593 323.413 296.749 325.026 297.4 326.756L300.89 336.022C301.647 338.032 299.135 339.66 297.61 338.147L287.746 328.364C287.11 327.733 286.132 327.602 285.353 328.043L274.234 334.334C272.381 335.382 270.391 333.195 271.609 331.449L278.157 322.062C278.756 321.204 278.592 320.028 277.78 319.367L266.362 310.073C264.903 308.885 265.743 306.522 267.625 306.522H276.421C277.415 306.522 278.258 305.791 278.4 304.807L279.779 295.245C280.078 293.176 282.949 292.894 283.645 294.864L285.879 301.188C286.452 302.811 288.671 303 289.511 301.497L295.941 289.989Z"
                                fill="#CD4631"
                            />
                        </svg>
                    </div>
                    <div className={styles["episode-block__background-svg2"]}>
                        <img src="/EpisodeOne/vector.png" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default EpisodeOne
