import React from "react";
import styles from "./Message.module.css";
import avatar from "./avatars/avatar.jpg";


type messegeProps = {
    username: string,
    text: string,
    id: number
}
export function PrivateMessege(props: messegeProps) {

    return (
        <li className={styles.link} key={props.id}>
            <div className={styles.messege}>
                <div className={styles.avatar}>
                    <img src={avatar} />
                </div>
                <div className={styles.username}>{props.username}</div>
                <div className={styles.text}>{props.text}</div>
            </div>
        </li>
    );
}