import styles from '../../styles/aside.module.css'
import { MdDownload } from 'react-icons/md'
import { SiUpwork, SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'

export default function Aside() {
    return (
        <aside className={styles.aside}>
            <Profile />
            <Resume />
            <Medias />
        </aside>
    )
}


function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.avatarContainer}>
                <div className={styles.avatar}></div>
            </div>
            <div className={styles.profileMain}>
                <div className={styles.profiletxt}>
                    <p className={styles.name}>Saad Jlil</p>
                    <p className={styles.function}>software developer</p>
                </div>
                <button className={styles.ctaProfile}>
                    <MdDownload />
                    <p>get resume</p>
                </button>
            </div>
        </div>
    )
}


function Medias() {
    return (
        <div className={styles.mediaWrapper}>
            <div className={styles.mediaSlot}>
                <SiGithub />
            </div>
            <div className={styles.mediaSlot}>
                <SiLinkedin />
            </div>
            <div className={styles.mediaSlot}>
                <SiGmail/>
            </div>
            <div className={styles.mediaSlot}>
                <SiUpwork />
            </div>
        </div>
    )
}

function Resume() {
    return (
        <div className={styles.resume}></div>
    )
}