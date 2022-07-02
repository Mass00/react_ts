import React from "react"
import styles from "./PostItem.module.css";
import avatarImg from "./avatars/avatar.jpg"
import { type } from "os";



type userProps = {
    text: string;
    userName: string;
    date: string;
}

export function PostItem(props: userProps) {
    return (
        <div>
            <div className={styles.userpost_info}>
                <div className={styles.avatar}><img src={avatarImg} /></div>
                <div className={styles.username}>{props.userName}</div>
                <div className={styles.date}>{props.date}</div>
            </div>
            <div className={styles.inner_content}>{props.text}</div>
        </div>
    );
}
