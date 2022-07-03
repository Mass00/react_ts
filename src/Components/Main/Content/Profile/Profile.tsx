import React from "react";
import {PostItem} from "./Post/PostItem";
import styles from "./Profile.module.css";
import {Userinfo} from "./Userinfo/Userinfo";
import {Usersettings} from "./Usersettings/Usersettings";
import {CreatePost} from "./Post/CreatePost";
import {PostList} from "./Post/PostList";
import {IPost} from "../../../../App";

interface IProfile {
    posts: IPost[]
    activPost: boolean,
    handlerOnClickExpandPostForm(): void
    handlerOnClickAddPost(text: string, userName: string): void
    handlerOnClickRemovePost(id: number): void
}

export const Profile: React.FC<IProfile> = (props) => {

    return (
        <section className={styles.content}>
            <Usersettings/>
            <section className={styles.test}>
                <Userinfo/>
                <CreatePost
                    activPost={props.activPost}
                    handlerOnClickExpandPostForm={props.handlerOnClickExpandPostForm}
                    handlerOnClickAddPost={props.handlerOnClickAddPost}
                />
                <PostList
                    posts={props.posts}
                    handlerOnClickRemovePost={props.handlerOnClickRemovePost}
                />
            </section>
        </section>
    );
}