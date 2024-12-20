import "./App.scss";

function App() {
    return (
        <>
            <header className="header _container">
                <div className="header__logo">
                    <img src="/logo/logo.svg" alt="logo" />
                </div>
                <nav className="header__nav nav">
                    <ul className="nav__ul">
                        <li className="nav__element_episodes">Episodes</li>
                        <li className="nav__element_about">About</li>
                        <li className="nav__element_more more">
                            More
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
                    <button className="header__button header__button--episodes">RECENT EPISODES</button>
                    <button className="header__button header__button--subscribe">SUBSCRIBE</button>
                </div>
            </header>
        </>
    );
}

export default App;
