import React, {useState} from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {Footer} from './Components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './Components/Main/Content/Profile/Profile';
import {Dialogs} from './Components/Main/Content/Dialogs/Dialogs';
import {Chat} from "./Components/Main/Content/Chat/Chat";
import {NotFound} from "./Components/Main/NotFound";
import {IState} from "./Redux/State";

interface IApp {
    appState: IState
}

export interface IQuickChat {
    id: number,
    userName: string
}

export interface IPost {
    id: number
    text: string,
    userName: string,
    date: Date
}

const App: React.FC<IApp> = (props) => {
    const [posts, setPost] = useState<IPost[]>([
        {
            id: 1,
            text: 'Первый комментаpий. Жили были, и дружили. Кто его знает?',
            userName: 'Gordon Friman',
            date: new Date()
        }, {
            id: 2,
            text: 'Второй комментаpий. Жили были, и дружили. Кто его знает?',
            userName: 'Gordon Friman',
            date: new Date()
        }])
    const [quickChat, setQuickChat] = useState<IQuickChat[]>([])
    const [activatePost, setActivatePost] = useState<boolean>(false);

                /* Форма постов*/
    const handlerOnClickExpandPostForm = () => {
        setActivatePost(true)
    }
    const handlerOnClickAddPost = (text: string, userName: string) => {
        setPost(prev => [...prev, {id: Date.now() ,text: text, userName: userName, date: new Date()}])
        setActivatePost(false)
    }
    const handlerOnClickRemovePost = (id: number) => {
        setPost(prev=> prev.filter(item => item.id !== id))
    }
                /* Форма чата */
    const handlerOnClickAddUser = (id: number, userName: string) => {
        if (!(quickChat.filter(item => item.userName === userName).length)) {
            const temp: IQuickChat = {
                id: id,
                userName: userName
            }
            setQuickChat(prev => [...prev, temp])
        }
    }

    return (
        /* Grid-container */
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main menu={props.appState.sideBarMenu}/>}>
                    <Route index element={<Profile
                        activPost={activatePost}
                        handlerOnClickExpandPostForm={handlerOnClickExpandPostForm}
                        handlerOnClickAddPost={handlerOnClickAddPost}
                        handlerOnClickRemovePost={handlerOnClickRemovePost}
                        posts={posts}

                    />}/>
                    <Route path="profile" element={<Profile
                        activPost={activatePost}
                        handlerOnClickExpandPostForm={handlerOnClickExpandPostForm}
                        handlerOnClickAddPost={handlerOnClickAddPost}
                        handlerOnClickRemovePost={handlerOnClickRemovePost}
                        posts={posts}
                    />}/>
                    <Route path="dialogs"
                           element={<Dialogs users={props.appState.users}
                                             dialogs={props.appState.dialogs}
                                             handlerOnClick={handlerOnClickAddUser}

                           />}/>
                    <Route path="dialogs/:id"
                           element={<Chat users={props.appState.users}
                                          dialogs={props.appState.dialogs}
                                          quickChat={quickChat}
                           />}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
