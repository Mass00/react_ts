import React from "react";
import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";
import "./Main.css";


export function Main() {
    return (
        <main className="main">
            <Sidebar />
            <Content />
        </main>
    );
}