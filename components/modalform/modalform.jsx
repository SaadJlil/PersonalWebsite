import React, { useState } from 'react';
import styles from '../../styles/modalform.module.css'
import Button_ from '../button_' 
import Image from "next/image"

export default function Modalform({handleCloseContent, handleOpenContent, isContentOpen_, handleCloseModal, isModalOpen}) {

    

    return (
        <modalform className={styles.modalform}>        
            <Modal handleCloseContent_={() => handleCloseContent()} handleOpenContent_={() => handleOpenContent()} isContentOpen={isContentOpen_} isOpen={isModalOpen} onClose={() => handleCloseModal()}/>
        </modalform>

    )
}


function Modal({handleCloseContent_, handleOpenContent_, isContentOpen, isOpen, onClose}) {

    if(!isOpen) return null;

    let SendEmail = function(successMessage, handleMessageResponse, handleCloseContent, email_, name_, organisation_, services_, message_){
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
            .then(response => {
                handleMessageResponse(successMessage)
                handleCloseContent()
            })
            .catch(error => {
                console.log(error.message)
                handleMessageResponse("An Error Has Occured!")
                handleCloseContent()
            });

    }

    let successMessage_ = "Thanks for the submission"
    const [responseMessage, setResponseMessage] = useState(successMessage_);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [services, setServices] = useState("");
    const [message, setMessage] = useState("");


    //Click outside / close
    document.addEventListener('mouseup', function(e) {
        var fullContainer = document.getElementById('modalformfull');
        var modelContainer = document.getElementById('modalformcontainer');
        if (fullContainer.contains(e.target) && !modelContainer.contains(e.target)) {
            onClose();
            handleOpenContent_();
        }
    });


    if(isContentOpen)
    { 
        return (
            <div className={styles.modalFormFull} id={'modalformfull'}>
                <div className={styles.modalContainer} id={'modalformcontainer'}>
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
                                <Button_ className={styles.button_} link="#"  content="Submit" clicked={() => SendEmail(successMessage_, (message) => setResponseMessage(message), () => handleCloseContent_(), email, name, organisation, services, message)}/> 
                            </div>

                        </div>
                </div>
                </div>
            </div>
        )
    }

    




    return (
        <div className={styles.modalFormFull} id={'modalformfull'}>
            <div className={styles.modalContainer} id={'modalformcontainer'}>
                <div className={styles.modalWin}>
                        <span className={styles.close} onClick={() => {
                                onClose();
                                handleOpenContent_();
                            }}>
                            &times;
                        </span> 

                    <h2>{responseMessage}</h2>

                </div>
            </div>
        </div>   
    )

}
