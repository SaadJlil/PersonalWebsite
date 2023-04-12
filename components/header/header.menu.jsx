import styles from '../../styles/menu.module.css'
import {MdHome, MdInfo, MdTipsAndUpdates, MdApps, MdDownload, MdHowToReg} from 'react-icons/md'

export default function HeaderMenu() {
    return (
        <menu className={styles.menu}>
            {/* <Logo /> */}
            <Navigation />
            <CallToAction />
        </menu>
    )
}

// function Logo() {
//     return (
//         <h1 className={styles.logo}>
//         <span className={styles.logoln}>JLIL </span>
//         <span className={styles.logofn}> Saad</span>
//     </h1>
//     )
// }

function Navigation() {
    const navItems = {
        home: {
            url:'',
            name:'home',
            icon: MdHome,
        }
    }
    return (
        <nav className={styles.navContainer}>
            <li className={styles.navList}>
                <div className={`${styles.navSlot} ${styles.slotHome}`}>
                    <MdHome />
                    <a href="">home</a>
                </div>
                <div className={`${styles.navSlot} ${styles.slotProjects}`}>
                    <MdTipsAndUpdates />
                    <a href="">projects</a>
                </div>
                <div className={`${styles.navSlot} ${styles.slotServices}`}>
                    <MdApps />
                    <a href="">services</a>
                </div>
                <div className={`${styles.navSlot} ${styles.slotAbout}`}>
                    <MdInfo />
                    <a href="">about me</a>
                </div>
            </li>
        </nav>
    )
}

function CallToAction() {
    return (
        <div className={styles.ctaWrapper}>
            <button className={styles.ctaPrime}>
                <MdHowToReg />
                <p>hire me</p>
            </button>
            <button className={styles.ctaSecond}>
                <MdDownload />
                <p>download resume</p>
            </button>
        </div>
    )
}