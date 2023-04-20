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
            <div className={styles.modalWin}>
                <h2>Hiring Form</h2>
                <h3>Name</h3>
                <input className={styles.inputform} type="text" />
                <h3>Organisation</h3>
                <input className={styles.inputform} type="text" />
                <h3>Services you want me to be involved in</h3>
                <input className={styles.inputform} type="text" />
                <h3>Message</h3>
                <input className={styles.inputform} type="text" />




                <h3>Services you want me to be involved in</h3>
                <input className={styles.inputform} type="text" />
                <h3>Message</h3>
                <input className={styles.inputform} type="text" />


                <h3>Services you want me to be involved in</h3>
                <input className={styles.inputform} type="text" />
                <h3>Message</h3>
                <input className={styles.inputform} type="text" />



            </div>
        </div>
    )
}