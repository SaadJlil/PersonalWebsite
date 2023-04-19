import styles from '../styles/button_.module.css'
import Image from 'next/image'



export default function Button_(props) {
    const {content, link} = props
    return (
        <a className={styles.cta} href={link}>{content}</a>
    )
}