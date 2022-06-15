import React from "react";
import styles from "./Messege.module.css";
import avatar from "./avatars/avatar.jpg";


type messegeProps = {
    username: string,
    text: string;
}
export function Messege(props: messegeProps) {
    return (
        <>
            <div className={styles.messege}>
                <div className={styles.avatar}>
                    <img src={avatar} />
                </div>
                <div className={styles.username}>{props.username}</div>
                <div className={styles.text}>{props.text}</div>
            </div>
        </>
    );
}