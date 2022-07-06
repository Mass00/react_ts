import React from "react";
import styles from './Chat.module.css'
import {useParams} from "react-router-dom";
import {PrivateMessege} from "./Message/Message";
import {IDialogs, IUsersData} from "../../../../Redux/State";
import {IQuickChat} from "../../../../App";


interface IChat {
    users: IUsersData[],
    dialogs: IDialogs[],
    quickChat: IQuickChat[]
}

export const Chat: React.FC<IChat> = (props) => {
    const {id} = useParams()
    const currId = Number(id)
    return (
        <section className={styles.content}>
            <section className={styles.dialogs_list}>
                {props.dialogs
                    .filter(item => item.dialogId === currId)
                    .map(item => {
                        return (
                            <PrivateMessege key={item.id} username={props.users[item.userId - 1].name} text={item.text}
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
                        {props.quickChat?.map(item => {
                            return(
                                <li key={item.id}>{item.userName}</li>
                                )
                        })}

                    </ul>
                </div>
            </section>
        </section>
    );
}