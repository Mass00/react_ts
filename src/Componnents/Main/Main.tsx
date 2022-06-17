import React from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import "./Main.css";
import { Outlet } from "react-router-dom";

export function Main() {
    return (
        <main className="main">
            <Sidebar />
            <Outlet />
        </main>
    );
}