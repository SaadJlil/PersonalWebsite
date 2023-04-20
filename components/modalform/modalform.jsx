import styles from '../../styles/modalform.module.css'
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
                    <label>Name</label>
                    <textarea className={styles.inputform} type="text" />
                    <label>Organisation</label>
                    <input className={styles.inputform} type="text" />
                    <label>Services you want me to be involved in</label>
                    <input className={styles.inputform} type="text" />
                    <label>Message</label>
                    <input className={styles.inputform} type="text" />

               </div>
            </div>
        </div>
    )
}