import React from 'react';
import styles from "../Profile.module.css";
import {PostItem} from "./PostItem";
import {IPost} from "../../../../../App";

interface IPostList{
    posts: IPost[]
}

export const PostList:React.FC<IPostList> = (props) => {
    return (
        <section className={styles.userpost_content}>
            {props.posts.map((item, index) => {
                return (
                <PostItem key={index}
                    text={item.text}
                    userName={item.userName}
                    date={item.date}
                />
                )
            })}
        </section>
    );
};
