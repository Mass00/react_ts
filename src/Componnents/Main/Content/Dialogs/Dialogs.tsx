import React from "react";
import styles from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";
import {IUser, IDialog} from "../../../../Redux/State";



interface IDialogs {
    users: IUser[],
    dialogs: IDialog[]
}

export function Dialogs (props: IDialogs){

    return (
        <section className={styles.content}>
            <section className={styles.dialogs_list}>
                <ul className={styles.list}>
                    {props.dialogs
                        .filter((item, index, arr) => arr.findIndex(i => i.dialogId === index))
                        .map(item => {
                            return (
                                <NavLink className={styles.link} to={"/dialogs/" + item.dialogId}>
                                    <Message id={item.dialogId} username={props.users[item.userId].name}
                                             text={item.text}/>
                                </NavLink>
                            );
                        })}
                </ul>
            </section>
            <section className={styles.settings}>
                <div className={styles.dialogs_settings}>
                    <ul>
                        <li>Все чаты</li>
                        <li>Не прочитанные</li>
                    </ul>
                </div>
            </section>
        </section>
    );
}