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
import {IActionAddPost, IActionRemovePost, IState} from "./Redux/State";

interface IApp {
    appState: IState
    dispatch: (action: IActionAddPost | IActionRemovePost) => void
}
export interface IQuickChat {
    id: number,
    userName: string
}

const App: React.FC<IApp> = (props) => {
            /* Форма чата */
    const [quickChat, setQuickChat] = useState<IQuickChat[]>([])
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
                        users={props.appState.usersData}
                        dispatch={props.dispatch}
                        posts={props.appState.profileData.posts}

                    />}/>
                    <Route path="profile" element={<Profile
                        users={props.appState.usersData}
                        dispatch={props.dispatch}
                        posts={props.appState.profileData.posts}
                    />}/>
                    <Route path="dialogs"
                           element={<Dialogs users={props.appState.usersData}
                                             dialogs={props.appState.dialogData.dialogs}
                                             handlerOnClick={handlerOnClickAddUser}

                           />}/>
                    <Route path="dialogs/:id"
                           element={<Chat users={props.appState.usersData}
                                          dialogs={props.appState.dialogData.dialogs}
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
