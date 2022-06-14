import React from "react";
import "./Content.css";
import { Userinfo } from "./Userinfo/Userinfo";
import { Usersettings } from "./Usersettings/Usersettings";

export function Content() {
    return (
        <section className="content">
            <Usersettings />
            <Userinfo />
            <section className="content_userposts">POSTS</section>
        </section>
    );
}