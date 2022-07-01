import React from 'react';
import styles from "./CreatePost.module.css";
interface ICreatePost{
    activPost: boolean,
    handlerOnClickExpandPost(): void
}

export const CreatePost: React.FC<ICreatePost> = ({activPost,handlerOnClickExpandPost}) => {
    if (activPost) {
        return (
            <section className={styles.userpost_add}>
                <div>
                    <textarea ></textarea>
                    <div className={styles.empty}>
                        <div></div>
                        <button>Отправить</button>
                    </div>
                </div>
            </section>
        )
    } else {
    return (
        <section className={styles.userpost_addd}>
            <div>
                <textarea placeholder={'Что нового  у вас?'} onClick={handlerOnClickExpandPost}></textarea>
            </div>
        </section>
    );
    }
};
