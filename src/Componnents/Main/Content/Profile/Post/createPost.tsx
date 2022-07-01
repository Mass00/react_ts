import React from 'react';
import styles from "./CreatePost.module.css";

export const CreatePost: React.FC = () => {
    if (false) {
        return (
            <section className={styles.userpost_add}>
                <div>
                    <textarea></textarea>
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
                <textarea placeholder={'Что нового  у вас?'}></textarea>
            </div>
        </section>
    );
    }
};
