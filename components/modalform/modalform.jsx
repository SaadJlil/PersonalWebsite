import React, { useState } from 'react';
import styles from '../../styles/modalform.module.css'
import Button_ from '../button_' 
import Image from "next/image"

export default function Modalform({handleCloseModal, isModalOpen}) {

    

    return (
        <modalform className={styles.modalform}>        
            <Modal isOpen={isModalOpen} onClose={() => handleCloseModal()}/>
        </modalform>

    )
}


function SendEmail() {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    
    const body = {
      "test": "event"
    }
    
    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }
    
    fetch("https://eok9t3vldb3m6oo.m.pipedream.net", options)

    console.log("test completed");

}


function Modal({isOpen, onClose}) {

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
                        <div className={styles.ButtonWrapper}>
                            <Button_ className={styles.button_} link="#"  content="Submit" onClick={() => SendEmail()}/> 
                        </div>

                    </div>
               </div>
            </div>
        </div>
    )
}