import styles from '../styles/button_.module.css'
import Image from 'next/image'



export default function Button_({content, link, clicked}) {
    return (
        <button className={styles.cta} href={link} onClick={() => clicked()}>{content}</button>
    )
}