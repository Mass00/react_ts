import React from 'react';
import styles from "../Profile.module.css";
import {PostItem} from "./PostItem";

import {IActionAddPost, IActionRemovePost, IPosts, IUsersData} from "../../../../../Redux/State";

interface IPostList {
    posts: IPosts[]
    users: IUsersData[]
    dispatch: (action: IActionAddPost | IActionRemovePost) => void
}

export const PostList: React.FC<IPostList> = (props) => {
    return (
        <section className={styles.userpost_content}>
            {[...props.posts]
                .sort((a, b) => {
                    return b.id - a.id
                })
                .map(item => {
                    return (
                        <PostItem key={item.id}
                                  text={item.text}
                                  userName={props.users[item.userId-1].name}
                                  date={item.date}
                                  id={item.id}
                                  dispatch={props.dispatch}
                        />
                    )
                })}
        </section>
    );
};
