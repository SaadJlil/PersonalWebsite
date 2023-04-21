import styles from '../../styles/modalform.module.css'
import Button_ from '../button_' 
import Image from "next/image"

export default function Modalform() {
    return (
        <modalform className={styles.modalform}>        
            <Modal />
        </modalform>

    )
}


function Modal() {
    return (
        <div className={styles.modalFormFull}>
            <div className={styles.modalContainer}>
                <div className={styles.modalWin}>
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
                            <Button_ className={styles.button_} link="#" content="Submit" /> 
                        </div>

                    </div>
               </div>
            </div>
        </div>
    )
}