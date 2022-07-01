import React from "react";
import {Sidebar} from "./Sidebar/Sidebar";
import "./Main.css";
import {Outlet} from "react-router-dom";
import {ISideBarMenu} from "../../Redux/State";

interface IMain {
    menu: ISideBarMenu[]
}

export const Main: React.FC<IMain> = ({menu}) => {
    return (
        <main className="main">
            <Sidebar menu={menu}/>
            <Outlet/>
        </main>
    );
}