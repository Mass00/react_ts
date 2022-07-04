import React, {useState} from 'react';
import styles from "./CreatePost.module.css";

interface ICreatePost {
    activPost: boolean,
    handlerOnClickExpandPostForm(): void,
    handlerOnClickAddPost(text: string, userId: number): void
}

export const CreatePost: React.FC<ICreatePost> = ({activPost, handlerOnClickExpandPostForm, handlerOnClickAddPost}) => {
    const [postValue, setPostValue] = useState<string>('')
    const handlerOnChangeGetTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostValue(e.target.value)
    }
    const handlerOnClickSendPost = () => {
        handlerOnClickAddPost(postValue, 1)
        setPostValue('')
    }
    const rootStyle = [styles.userpost_add]
    if (activPost) {
        rootStyle.push(styles.active)
    }

    return (
        <section className={rootStyle.join(' ')} >
            <div>
                    <textarea
                        value={postValue}
                        onChange={handlerOnChangeGetTextAreaValue}
                        placeholder={activPost ? '' : 'Что у вас нового'}
                        onClick={handlerOnClickExpandPostForm}>
                    </textarea>

                {activPost && <div className={styles.empty}>
                    <div>
                    </div>
                    <button onClick={handlerOnClickSendPost}>Отправить</button>
                </div>}

            </div>
        </section>
    )

}
