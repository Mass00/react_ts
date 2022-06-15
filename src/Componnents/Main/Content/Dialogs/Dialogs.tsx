import React from "react";
import styles from "./Dialogs.module.css";
import { Messege } from "./Messege/Messege";


export function Dialogs() {
    return (
        <section className={styles.content}>
            <section className={styles.dialogs_list}>
            <Messege username="Gordon Friman" text="Хоп Хей Лала Хей. Где искал ты всех друзей?" />
            <Messege username="Gordon Friman" text="Хоп Хей Лала Хей. Где искал ты всех друзей?" />
            <Messege username="Gordon Friman" text="Хоп Хей Лала Хей. Где искал ты всех друзей?" />
            <Messege username="Gordon Friman" text="Хоп Хей Лала Хей. Где искал ты всех друзей?" />
            </section>
            <section className={styles.settings}>
                <ul>
                    <li>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
            </section>
        </section>
    );
}