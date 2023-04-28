import useServiceStore from '@/store/serviceStore'
import styles from '../../styles/aside.module.css'
import { MdDownload } from 'react-icons/md'
import { SiUpwork, SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'
import useStoreAsideElements from '@/store/asidestoredelements'
import React from 'react'

export default function Aside() {
    return (
        <aside className={styles.aside}>
            <Profile />
            <AsideElements />
            <Medias />
        </aside>
    )
}

function AsideElements() {
    const StoredAsideElements = useStoreAsideElements((state) => state.elements)
    return (
        <div className={styles.asideelements}>
            {StoredAsideElements.map(service => (
                        <div key={service.id} className={styles.asideelement}>
                            <h2>{service.name}</h2>
                            <h3 className={styles.date}>{service.date}</h3>
                            <h3 className={styles.description}>{service.description}</h3>

                        </div>
                    )
                )
            }        
        </div>
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