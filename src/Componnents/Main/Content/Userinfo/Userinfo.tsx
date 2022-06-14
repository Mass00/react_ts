import React from "react";
import styles from "./Userinfo.module.css";

export function Userinfo() {
    return (
        <section className={styles.userinfo}>
            <div className={styles.username}>
                <h2>USER.NAME!</h2>
            </div>
            <div className={styles.list}>
                <div className={styles.birthday}>
                    <div className={styles.birthday__key}>Birthday:</div>
                    <div className={styles.birthday__value}>01.01.1800</div>
                </div>
                <div className={styles.country}>
                    <div className={styles.country__key}>Country:</div>
                    <div className={styles.country__value}>Pomesfritas</div>
                </div>
                <div className={styles.education}>
                    <div className={styles.education__key}>Education:</div>
                    <div className={styles.education__value}>BAFF'2012</div>
                </div>
            </div>
        </section>
    );
}