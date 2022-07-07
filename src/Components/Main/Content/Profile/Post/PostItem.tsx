import React from "react"
import styles from "./PostItem.module.css";
import avatarImg from "./avatars/avatar.jpg"
import { type } from "os";
import {IActionAddPost, IActionRemovePost} from "../../../../../Redux/State";



type userProps = {
    id: number
    text: string
    userName: string
    date: Date
    dispatch: (action: IActionRemovePost) => void
}

export function PostItem(props: userProps) {
    const removePost = () => {
        const action:IActionRemovePost = {type: 'ACTION_REMOVE_POST', id: props.id}
        props.dispatch(action)
    }
    return (
        <div className={styles.content}>
            <div className={styles.userpost_info}>
                <div className={styles.avatar}><img src={avatarImg} /></div>
                <div className={styles.username}>{props.userName}</div>
                <div className={styles.date}>{props.date.toLocaleDateString('ru')}</div>
            </div>
            <div className={styles.inner_content}>{props.text}</div>
            <div className={styles.settings}>
            <div></div>
                <div className={styles.empty}>
                    <a onClick={removePost}>Удалить</a>
                </div>
            </div>
        </div>
    );
}
