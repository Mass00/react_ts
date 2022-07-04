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

    return (
        <section className={styles.content}>
            <section className={styles.dialogs_list}>
                <ul className={styles.list}>
                    {props.dialogs // Сортируем на уникальность, чтобы получить уникальный dialogId
                        .filter((item, index, arr) =>
                            arr.findIndex((i) => i.dialogId === item.dialogId) === index)
                        .map((dialog, index) => { // начинаем искать последние сообщения
                            return props.dialogs
                                .filter(item => item.dialogId === dialog.dialogId)
                                .reduce((acc, curr) => acc.id > curr.id ? acc : curr)
                        })
                        .map(item => { // отображаем результат
                            return (
                                <li key={item.dialogId}>
                                    <Link
                                        className={styles.link}
                                        to={"/dialogs/" + item.dialogId}
                                        onClick={() => props.handlerOnClick(item.userId, props.users[item.userId - 1].name)}>
                                        <Message
                                            id={item.dialogId}
                                            username={props.users[item.userId - 1].name}
                                            text={item.text.length > 50 ? `${item.text.slice(0, 50)}...` : item.text}/>
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