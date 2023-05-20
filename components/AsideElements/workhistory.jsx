import React, { useState } from 'react';
import styles from '../../styles/workhistory.module.css'
import Image from "next/image"

export default function WorkModal({handleCloseModal, isModalOpen}) {
    return (
        <modalform className={styles.modalform}>        
            <Work isOpen={isModalOpen} onClose={() => handleCloseModal()}/>
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

function Work({isOpen, onClose}) {

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
        <div className={styles.WorkFormFull}>
            <div className={styles.modalContainer}>
                <div className={styles.modalWin}>
                        <span className={styles.close} onClick={() => onClose()}>
                            &times;
                        </span> 
                    <div className={styles.WinTitle}>
                        <h2><span className={styles.something}>Work History</span></h2>
                    </div>

                    <div className={styles.modalWinForm}>

                        <div className={styles.listAcdm}>
                            {workhistory.map((exp) => (
                               <div key={exp.id} className={styles.xp}>
                                    <h2>{exp.name}</h2>
                                    <h3>{exp.date}</h3>
                                    <p>{exp.description}</p>
                               </div>
                            ))}
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}