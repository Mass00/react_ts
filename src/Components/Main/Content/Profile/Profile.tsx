import React from "react";
import {Post} from "./Post/Post";
import styles from "./Profile.module.css";
import {Userinfo} from "./Userinfo/Userinfo";
import {Usersettings} from "./Usersettings/Usersettings";
import {CreatePost} from "./Post/createPost";

interface IProfile {
    activPost: boolean,
    handlerOnClickExpandPost(): void
}

export const Profile: React.FC<IProfile> = (props) => {

    return (
        <section className={styles.content}>
            <Usersettings/>
            <section className={styles.test}>
                <Userinfo/>
                <CreatePost activPost={props.activPost} handlerOnClickExpandPost={props.handlerOnClickExpandPost}/>
                <section className={styles.userpost_content}>
                    <Post
                        text="Первый комментаpий. Жили были, и дружили. Кто его знает?"
                        userName="Gordon Friman"
                        date="29.08.2022"
                    />
                    <Post
                        text="Второй комментарий. Жили были, и дружили. Кто его знает?"
                        userName="Gordon Friman"
                        date="29.08.2022"
                    />
                    <Post
                        text="Второй комментарий. Жили были, и дружили. Кто его знает?"
                        userName="Gordon Friman"
                        date="29.08.2022"
                    />
                </section>
            </section>
        </section>
    );
}