
// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./intro.module.css";
export const Intro = () => {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Mayank</h1>
                <p className={styles.description}>
                I'm currently a Technical Architect and WorkStream Head for Mobility Edge solutions at BGSW, Bangalore. Previously, I served as a Senior Technical Lead in automotive, focusing on AUTOSAR and Tri-CORE Infineon Chip. I contributed to MCU development for the Smart Multi-Purpose Camera project at Mercedes-Sweden. Earlier, I was an Assistant Manager - R&D at Napino Auto Electronics, where I designed Telematics Control Unit and led a team for IOT Products. Prior, as a Senior Engineer at WESEE, Indian Navy, I developed electronic warfare systems for Naval Ships & Submarines, winning the Innovation Trophy-2017. Throughout, 
                I've cultivated leadership skills, teamwork, and a passion for learning and adapting to new technologies.
                </p>
                <a href="mailto:mayank.stmicro@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("Me/image.png")}
                alt="image of me"
                className={styles.myImage}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}