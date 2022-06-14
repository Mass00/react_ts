import React from "react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav className="sidebar__menu">
                <ul className={styles.list}>
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
    )
}