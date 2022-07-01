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

const App: React.FC<IApp> = (props) => {
    const [quickChat, setQuickChat] = useState<IQuickChat[]>([])
    const [activPost,setActivPost] = useState<boolean>(false);
    const handlerOnClickExpandPost = () => {
        setActivPost(true)
    }
    const handlerAddUser = (id: number, userName: string) => {
        if (!(quickChat.filter(item => item.userName === userName).length)){
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
                    <Route index element={<Profile activPost={activPost} handlerOnClickExpandPost={handlerOnClickExpandPost}/>}/>
                    <Route path="profile" element={<Profile
                        activPost={activPost }
                        handlerOnClickExpandPost={handlerOnClickExpandPost}
                    />}/>
                    <Route path="dialogs"
                           element={<Dialogs users={props.appState.users}
                                             dialogs={props.appState.dialogs}
                                             handlerOnClick={handlerAddUser}

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
