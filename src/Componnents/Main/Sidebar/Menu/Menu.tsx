import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

type menuProps = {
    text: string,
    link: string;
}

export function Menu(props: menuProps) {
    let a = useLocation();
    console.log(a);
    
    return (
        <li>
            <NavLink to={props.link} className={styles.link}>{props.text}</NavLink>
          
        </li>
    );
}