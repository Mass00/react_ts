import React from 'react';
import './App.css';
import {Header} from './Componnents/Header/Header';
import {Main} from './Componnents/Main/Main';
import {Footer} from './Componnents/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './Componnents/Main/Content/Profile/Profile';
import {Dialogs} from './Componnents/Main/Content/Dialogs/Dialogs';
import {Chat} from "./Componnents/Main/Content/Chat/Chat";
import {NotFound} from "./Componnents/Main/NotFound";
import {IState} from "./Redux/State";

interface IApp {
    appState: IState
}

const App: React.FC<IApp> = (props) => {
    return (
        /* Grid-container */
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main menu={props.appState.sideBarMenu}/>}>
                    <Route index element={<Profile/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="dialogs"
                           element={<Dialogs users={props.appState.users} dialogs={props.appState.dialogs}/>}/>
                    <Route path="dialogs/:id"
                           element={<Chat users={props.appState.users} dialogs={props.appState.dialogs}/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
