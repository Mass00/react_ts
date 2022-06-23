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

export interface IUser {
    id: number,
    name: string
}

export interface IDialog {
    dialogId: number,
    id: number,
    userId: number,
    text: string
}
function App() {
    const users:IUser[] = [
        {
            id: 1,
            name: "Gordon Freeman"
        }, {
            id: 2,
            name: "Chat Bot"
        }]
    const dialogs:IDialog[] = [
        {
            dialogId: 1,
            id: 1,
            userId: 1,
            text: "Здраствуйте, что вы думаете о сегодняшнем дне?"
        }, {
            dialogId: 1,
            id: 2,
            userId: 2,
            text: "Здраствуйте, моЯ твоЯ не понимать?"
        }, {
            dialogId: 2,
            id: 1,
            userId: 1,
            text: "Ololotrololol"
        }]
    return (
        /* Grid-container */
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Profile/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="dialogs" element= {<Dialogs users={users} dialogs={dialogs} />}/>
                    <Route path="dialogs/:id" element={<Chat users={users} dialogs={dialogs}/>} />
                </Route>
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
