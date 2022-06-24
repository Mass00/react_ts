import React from "react";
import styles from './Chat.module.css'
import {useParams} from "react-router-dom";
import {PrivateMessege} from "./Message/Message";
import {IDialog, IUser} from "../../../../Redux/State";


interface IChat {
    users: IUser[],
    dialogs: IDialog[]
}

export const Chat: React.FC<IChat> = (props) => {
    const {id} = useParams()
    const currId = Number(id)
    console.log(currId)
    return (
        <section className={styles.content}>
            <section className={styles.dialogs_list}>
                {props.dialogs
                    .filter(item => item.dialogId === currId)
                    .map(item => {
                        return (
                            <PrivateMessege username={props.users[item.id - 1].name} text={item.text}
                                            id={item.dialogId}/>
                        );
                    })
                }
            </section>
            <section className={styles.settings}>
                <div className={styles.dialogs_settings}>
                    <ul>
                        <li>Все чаты</li>
                        <li>Не прочитанные</li>
                    </ul>
                </div>
                <div className={styles.selected_chats}>
                    <ul>
                        <li>Вася Пупкин Х</li>
                        <li>Маша Калькова Х</li>
                    </ul>
                </div>
            </section>
        </section>
    );
}