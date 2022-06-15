import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./Content.module.css"
import { Profile } from "./Profile/Profile";

export function Content() {
    return (
        <BrowserRouter>
            <section className={styles.content}>
                <Routes>
                    <Route path="" element={<Profile />} />
                </Routes>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </section>
        </BrowserRouter>
    );
}