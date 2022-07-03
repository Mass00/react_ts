import React from 'react';
import styles from "../Profile.module.css";
import {PostItem} from "./PostItem";
import {IPost} from "../../../../../App";

interface IPostList {
    posts: IPost[]
    handlerOnClickRemovePost(id: number): void
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
                                  userName={item.userName}
                                  date={item.date}
                                  id={item.id}
                                  handlerOnClickRemovePost={props.handlerOnClickRemovePost}
                        />
                    )
                })}
        </section>
    );
};
