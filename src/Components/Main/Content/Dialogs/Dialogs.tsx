import React, {Dispatch, SetStateAction, useState} from "react";
import styles from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {Link} from "react-router-dom";
import {IUser, IDialog} from "../../../../Redux/State";


interface IDialogs {
    users: IUser[],
    dialogs: IDialog[],

    handlerOnClick(id: number, userName: string): void
}

export function Dialogs(props: IDialogs) {

    const dialogsID = props.dialogs
        .filter((item, index, arr) =>
            arr.findIndex((i) => i.dialogId === item.dialogId) === index)
        .map(item => item.dialogId)
    const newArr = dialogsID.map((item,index) => {
        return props.dialogs
            .filter(item => item.dialogId === dialogsID[index])
            .reduce((acc, curr) => acc.id > curr.id ? acc : curr)
    })
    return (
        <section className={styles.content}>
            <section className={styles.dialogs_list}>
                <ul className={styles.list}>
                    {newArr
                        .map(item => {
                                return (
                                    <li key={item.dialogId}>
                                        <Link
                                            className={styles.link}
                                            to={"/dialogs/" + item.dialogId}
                                            onClick={() => props.handlerOnClick(item.userId, props.users[item.userId-1].name)}>
                                            <Message
                                                id={item.dialogId}
                                                username={props.users[item.userId-1].name}
                                                text={item.text}/>
                                        </Link>
                                    </li>
                                )
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