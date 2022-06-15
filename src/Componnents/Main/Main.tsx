import React from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import "./Main.css";
import { Profile } from "./Content/Profile/Profile";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dialogs } from "./Content/Dialogs/Dialogs";


export function Main() {
    return (
        <main className="main">
            <Sidebar />
            <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dialogs" element={<Dialogs />} />
             </Routes>
        </main>
    );
}