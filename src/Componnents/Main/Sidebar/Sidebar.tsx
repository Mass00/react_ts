import React from "react";
import {Menu} from "./Menu/Menu";
import styles from "./Sidebar.module.css";
import {ISideBarMenu} from "../../../Redux/State";


interface ISidebar {
    menu: ISideBarMenu[]
}

export const Sidebar: React.FC<ISidebar> = ({menu}) => {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    {menu.map( item => {
                        return(
                            < Menu text={item.name} link={`/${item.link}`} ico={item.ico}/>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    )
}