import React, { useState } from 'react';
import styles from '../../styles/aboutme.module.css'
import Image from "next/image"

export default function AboutMeModal({handleCloseModal, isModalOpen}) {
    return (
        <modalform className={styles.modalform}>        
            <AboutMe isOpen={isModalOpen} onClose={() => handleCloseModal()}/>
        </modalform>
   )
}

class workExp{
    constructor(id, name, date, description){
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date; 
    }
}

function AboutMe({isOpen, onClose}) {

    const islucid = new workExp(
        1,
        "LEAD SPECIALIST INTERN",
        "JUNE - August 2021",
        'IsLucid (Vilnius, Lithuania)',
    )

    const gtbconsultings = new workExp(
        2,
        "DATA ANALYST INTERN",
        "April - August 2022",
        'GTBConsultings (Gothenburg, Sweden)'
    )

    const workhistory = [islucid, gtbconsultings]

    if(!isOpen) return null;

    return (
        <div className={styles.AboutMeFormFull}>
            <div className={styles.modalContainer}>
                <div className={styles.modalWin}>
                        <span className={styles.close} onClick={() => onClose()}>
                            &times;
                        </span> 
                    <div className={styles.WinTitle}>
                        <h2><span className={styles.something}>About Me</span></h2>
                    </div>

                    <div className={styles.modalWinForm}>
                        <p>Hello! I'm Saad, a passionate and dedicated web developer with a creative flair and a strong technical background. I thrive on transforming ideas into beautiful, user-friendly websites that leave a lasting impression. <br /><br />



Collaboration is at the heart of my work ethic. I enjoy working closely with clients, designers, and other developers to bring projects to life. I value effective communication and believe in the power of teamwork to achieve outstanding results.

Continuing education is crucial in this ever-evolving field, and I make it a priority to stay up-to-date with the latest technologies, trends, and best practices.<br /> <br />I am constantly seeking opportunities to expand my skill set and explore innovative solutions to deliver the best possible outcomes for my clients.

Beyond coding, I am a creative thinker, problem solver, and an avid learner. When I'm not immersed in coding, you can find me exploring new technologies, attending tech conferences, or experimenting with personal coding projects.

 <br /><br />If you're looking for a reliable and talented web developer to turn your vision into reality, I would love to discuss your project. Feel free to reach out, and let's create something amazing together!</p>
                    </div>
               </div>
            </div>
        </div>
    )
}