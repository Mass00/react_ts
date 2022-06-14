import React from "react";
import "./Main.css";

export function Main() {
    return (
        <main className="main">
            <aside className="sidebar">
                <nav className="sidebar__menu">
                    <ul className="sidebar__list">
                        <li>
                            <a href="#" className="sidebar__link">Пункт меню</a>
                        </li>
                        <li>
                            <a href="#" className="sidebar__link">Пункт меню</a>
                        </li>
                        <li>
                            <a href="#" className="sidebar__link">Пункт меню</a>
                        </li>
                        <li>
                            <a href="#" className="sidebar__link">Пункт меню</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section className="content">
                <section className="content__usersettings">
                    USERSETTINGS
                </section>
                <section className="content__userinfo">
                    <div className="userinfo__username">
                    <h2>USER.NAME!</h2>
                    </div>
                    <div className="userinfo__list">
                        <div className="userinfo__birthday">
                                <div className="birthday__key">Birthday:</div>
                                <div className="birthday__value">01.01.1800</div>
                        </div>
                        <div className="userinfo__country">
                            <div className="country__key">Country:</div>
                            <div className="country__value">Pomesfritas</div>
                        </div>
                        <div className="userinfo__education">
                            <div className="education__key">Education:</div>
                            <div className="education__value">BAFF'2012</div>
                        </div>
                    </div>
                </section>
                <section className="content_userposts">POSTS</section>
            </section>
        </main>
    );
}