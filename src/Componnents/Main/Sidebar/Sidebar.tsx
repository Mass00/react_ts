import React from "react";
import { Menu } from "./Menu/Menu";
import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    < Menu text="Мой профиль" link="/profile"/>
                    < Menu text="Сообщения" link="/dialogs"/>
                    < Menu text="Неопределено" link="#"/>
                    < Menu text="Неопределено" link="#"/>
                </ul>
            </nav>
        </aside>
    )
}