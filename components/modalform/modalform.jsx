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


function Modal({isOpen, onClose}) {

    if(!isOpen) return null;

    let SendEmail = function(email_, name_, organisation_, services_, message_){
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        
        const body = {
          "name": name_,
          "email": email_,
          "organisation": organisation_,
          "message": message_,
          "services": services_ 
        }
        
        const options = {
          method: "POST",
          headers,
          mode: "cors",
          body: JSON.stringify(body),
        }
        
        fetch("https://eoxsoh07avpnozv.m.pipedream.net", options)       
    }


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [services, setServices] = useState("");
    const [message, setMessage] = useState("");



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
                        <input className={styles.inputform} type="text" onInput={e => setName(e.target.value)} />
                        <label>Organisation</label>
                        <input className={styles.inputform} type="text" onInput={e => setOrganisation(e.target.value)}/>
                        <label>Email Address</label>
                        <input className={styles.inputform} type="text" onInput={e => setEmail(e.target.value)}/>
                        <label>Services you want me to be involved in</label>
                        <input className={styles.inputform} type="text" onInput={e => setServices(e.target.value)}/>

                        <label>Message</label>
                        <textarea className={styles.inputform} type="text" onInput={e => setMessage(e.target.value)}/>
                        <div className={styles.ButtonWrapper}>
                            <Button_ className={styles.button_} link="#"  content="Submit" clicked={() => SendEmail(email, name, organisation, services, message)}/> 
                        </div>

                    </div>
               </div>
            </div>
        </div>
    )
}