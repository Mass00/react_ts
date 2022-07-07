import React from "react";
import {PostItem} from "./Post/PostItem";
import styles from "./Profile.module.css";
import {Userinfo} from "./Userinfo/Userinfo";
import {Usersettings} from "./Usersettings/Usersettings";
import {CreatePost} from "./Post/CreatePost";
import {PostList} from "./Post/PostList";

import {IActionAddPost, IActionRemovePost, IPosts, IUsersData} from "../../../../Redux/State";

interface IProfile {
    posts: IPosts[]
    users: IUsersData[]
    dispatch: (action: IActionAddPost | IActionRemovePost) => void
}
export const Profile: React.FC<IProfile> = (props) => {

    return (
        <section className={styles.content}>
            <Usersettings/>
            <section className={styles.test}>
                <Userinfo/>
                <CreatePost
                    dispatch={props.dispatch}
                />
                <section className={styles.search}>
                    <div>
                        <input type={'text'}/>
                    </div>
                </section>
                <PostList
                    posts={props.posts}
                    users={props.users}
                    dispatch={props.dispatch}
                />
            </section>
        </section>
    );
}