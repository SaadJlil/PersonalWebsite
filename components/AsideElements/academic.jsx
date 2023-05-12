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


function Academic({isOpen, onClose}) {

    if(!isOpen) return null;

    return (
        <div className={styles.modalFormFull}>
            <div className={styles.modalContainer}>
                <div className={styles.modalWin}>
                        <span className={styles.close} onClick={() => onClose()}>
                            &times;
                        </span> 

                    <h2>Hiring Form</h2>

                    <div className={styles.modalWinForm}>

                        
                        <label>Name</label>
                        <input className={styles.inputform} type="text" />
                        <label>Organisation</label>
                        <input className={styles.inputform} type="text" />
                        <label>Services you want me to be involved in</label>
                        <input className={styles.inputform} type="text" />
                        <label>Message</label>
                        <textarea className={styles.inputform} type="text" />

                    </div>
               </div>
            </div>
        </div>
    )
}