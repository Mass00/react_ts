import React from "react";
import "./Header.css";
import logo from './img/logo.png';

export function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="#"><img src={logo} alt={logo} /></a>
            </div>
            <nav className="header__menu">
                <ul className="header__list">
                    <li>
                        <a href="#" className="header__link">Пункт меню</a>
                    </li>
                    <li>
                        <a href="#" className="header__link">Пункт меню</a>
                    </li>
                    <li>
                        <a href="#" className="header__link">Пункт меню</a>
                    </li>
                    <li>
                        <a href="#" className="header__link">Пункт меню</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


