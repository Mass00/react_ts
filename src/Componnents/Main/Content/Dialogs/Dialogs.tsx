import React from "react";
import styles from "./Dialogs.module.css";
import {Messege} from "./Messege/Messege";
import {NavLink} from "react-router-dom";
import {IDialog, IUser} from "../../../../App";


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
                                    <Messege id={item.dialogId} username={props.users[item.userId].name}
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