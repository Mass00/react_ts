import React, {useState} from 'react';
import styles from "./CreatePost.module.css";
import {IActionAddPost} from "../../../../../Redux/State";

interface ICreatePost {
    dispatch: (action: IActionAddPost) => void
}

export const CreatePost: React.FC<ICreatePost> = (props) => {
    const [postValue, setPostValue] = useState<string>('')
    const [activatePost, setActivatePost] = useState<boolean>(false);
    const handlerOnChangeGetTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostValue(e.target.value)
    }
    const handlerOnClickExpandPostForm = () => {
        setActivatePost(true)
    }
    const handlerOnClickSendPost = () => {
        if (postValue) {
            const action: IActionAddPost = {type: 'ACTION_ADD_POST', text: postValue, userId: 1}
            props.dispatch(action)
            setPostValue('')
            setActivatePost(false)
        }
    }
    const rootStyle = [styles.userpost_add]
    if (activatePost) {
        rootStyle.push(styles.active)
    }

    return (
        <section className={rootStyle.join(' ')}>
            <div>
                    <textarea
                        value={postValue}
                        onChange={handlerOnChangeGetTextAreaValue}
                        placeholder={activatePost ? '' : 'Что у вас нового'}
                        onClick={handlerOnClickExpandPostForm}>
                    </textarea>

                {activatePost && <div className={styles.empty}>
                    <div>
                    </div>
                    <button onClick={handlerOnClickSendPost}>Отправить</button>
                </div>}

            </div>
        </section>
    )

}
