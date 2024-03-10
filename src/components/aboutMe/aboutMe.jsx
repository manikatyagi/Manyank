// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./aboutMe.module.css";
export const AboutMe = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.Wrapper}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("aboutMe/image.png")}
                    alt="my pic"  className={styles.aboutImage}/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Embedded Platforms Expertise</h3>
                            <p>Possess extensive knowledge and expertise in designing and implementing embedded platforms for research and development projects. Skilled in microcontroller-based platforms, 
                                hardware design, and development processes, with a focus on SMART work principles.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Technical Proficiency</h3>
                            <p>Demonstrated solid analytical, integration, support, and debugging skills on embedded systems. Direct experience in FPGA development processes, designing Electronic Warfare System Integration Projects for Indian Naval Ships & 
                                Submarines, and integrating Qt-based applications to Electronic Warfare Systems.</p>
                        </div>
                    </li>


                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}> 
                            <h3>Management and Leadership</h3>
                            <p>Proficient in network-based and software-based applications, including Android-based applications for remote hardware control and communication. Experienced in platform-level integration 
                                projects on INS, showcasing strong managerial skills and team management abilities.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}> 
                            <h3>Intellectual Property</h3>
                            <p>Holder of three patents across diverse technology domains, including software communication and edge 
computing, AI device framework, and high-resolution navigation systems.</p>
                        </div>
                    </li>
                </ul>
            </div>

            </div>
            
        </div>
    );
}