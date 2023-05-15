import React, { useState } from 'react';
import styles from '../../styles/workhistory.module.css'
import Image from "next/image"

export default function WorkModal({handleCloseModal, isModalOpen}) {
    return (
        <modalform className={styles.modalform}>        
            <Academic isOpen={isModalOpen} onClose={() => handleCloseModal()}/>
        </modalform>
   )
}

class AsideStoredElement{
    constructor(id, name, date, description){
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date; 
    }
}

function Academic({isOpen, onClose}) {


    const MarocTbs = new AsideStoredElement(
        1,
        "Bachelor in management (General)",
        "2019 - 2020",
        'Toulouse Business School (Casablanca, Morocco)',
    )
    const Toulouse = new AsideStoredElement(
        1,
        "Bachelor in mamagement (3 semester exchange) specialisation in data analysis",
        "2020-2022",
        'Toulouse Business School (Toulouse , France/Barcelona, Spain)'
    )
    const Canada = new AsideStoredElement(
        1,
        "graduate degree in business analytics",
        "Enrolled",
        'Niagara College (Niagara On-The-Lake,Canada)'
    )

    const academicExp = [MarocTbs, Toulouse, Canada]

    if(!isOpen) return null;

    return (
        <div className={styles.AcademicFormFull}>
            <div className={styles.modalContainer}>
                <div className={styles.modalWin}>
                        <span className={styles.close} onClick={() => onClose()}>
                            &times;
                        </span> 
                    <div className={styles.WinTitle}>
                        <h2><span className={styles.something}>Academic Record</span></h2>
                    </div>

                    <div className={styles.modalWinForm}>

                        <div className={styles.listAcdm}>
                            {academicExp.map((exp) => (
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