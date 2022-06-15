import React from "react";
import styles from "./Menu.module.css";

type menuProps = {
    text: string,
    link: string;
}

export function Menu(props: menuProps) {
    return (
        <li>
            <a href={props.link} className={styles.link}>{props.text}</a>
        </li>
    );
}