import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import profileico from "./img/profile.png";
import messegeico from "./img/messege.png";
import defaultico from "./img/default.png";
import { Messege } from "../../Content/Dialogs/Messege/Messege";

type menuProps = {
    text: string,
    link: string,
    ico: number;
}

export function Menu(props: menuProps) {
    const icoArr = [defaultico, messegeico, profileico];
    if (props.link === '#') props.link = "/profile";

    return (
        <li>
            <NavLink to={props.link} className={({isActive}) => !isActive ?  styles.link : `${styles.link} ${styles.active}`}>
                <img src={icoArr[props.ico]}/>
                <span className={styles.span}>{props.text}</span>
            </NavLink>
          
        </li>
    );
}