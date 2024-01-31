import React, { useState } from 'react';
import styles from '../../styles/academic.module.css'
import Image from "next/image"

export default function AcademicModal({handleCloseModal, isModalOpen}) {
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
        "Post graduate degree in Data Analytics",
        "2024",
        'Douglas College (Vancouver, BC, Canada)',
    )
    const Toulouse = new AsideStoredElement(
        1,
        "Post graduate degree in Business Analytics",
        "2023",
        'Niagara College (NOTL, Ontario, Canada)'
    )
    const Canada = new AsideStoredElement(
        1,
        "DEC - Diplôme d'études collégiales techniques",
        "2019-2021",
        "Université Internationale de Casablanca"
    )

    const academicExp = [MarocTbs, Toulouse, Canada]

    if(!isOpen) return null;

    document.addEventListener('mouseup', function(e) {
        var fullContainer = document.getElementById('academicfull');
        var modelContainer = document.getElementById('academiccontainer');
        if (fullContainer.contains(e.target) && !modelContainer.contains(e.target)) {
            onClose();
        }
    });

    return (
        <div className={styles.AcademicFormFull} id={'academicfull'}>
            <div className={styles.modalContainer} id={'academiccontainer'}>
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