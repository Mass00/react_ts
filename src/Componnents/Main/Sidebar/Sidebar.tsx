import React from "react";
import { Menu } from "./Menu/Menu";
import styles from "./Sidebar.module.css";


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    < Menu text="Мой профиль" link="/profile" ico={2}/>
                    < Menu text="Сообщения" link="/dialogs" ico={1}/>
                </ul>
            </nav>
        </aside>
    )
}