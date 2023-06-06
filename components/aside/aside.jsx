import useServiceStore from '@/store/serviceStore'
import styles from '../../styles/aside.module.css'
import { MdDownload } from 'react-icons/md'
import { SiUpwork, SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'
import useStoreAsideElements from '@/store/asidestoredelements'
import Image from "next/image"

import work from '../../public/work.svg'
import academic from '../../public/academic.svg'
import aboutme from '../../public/aboutme.svg'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'


export default function Aside({isAsideOpen_, handleOpenModal_Academic_, handleOpenModal_Work_, handleOpenModal_About_}) {

    if (typeof window !== 'undefined') {

        const [windowDimensions, setWindowDimensions] = useState({
            width: window.innerWidth,
            height: window.innerHeight
        });


        
        useEffect(() => {
            const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
            };
        
            window.addEventListener('resize', handleResize);
        
            // Clean up the event listener when the component unmounts
            return () => {
            window.removeEventListener('resize', handleResize);
            };
        }, []);

        return (
        <aside className={styles.aside} style={{ transform:((!isAsideOpen_ && windowDimensions.width < 1143) ?  'translate(100%, 0)' : 'translate(0, 0)') }}>
            <Profile />
            <AsideElements handleOpenModal_Work={() => handleOpenModal_Work_()} handleOpenModal_Academic={() => handleOpenModal_Academic_()} handleOpenModal_About={() => handleOpenModal_About_()}/>
            <Medias />
        </aside>
    )

    }

}

function AsideElements({handleOpenModal_Work, handleOpenModal_About, handleOpenModal_Academic}) {
    const StoredAsideElements = useStoreAsideElements((state) => state.elements)


    return (
        <div className={styles.asideelements}>

            <div className={styles.asideelement} onClick={() => handleOpenModal_Work()}>
                <Image
                    className={styles.asideelementicon}
                    src={work}
                    alt={"work history"}
                    width={400}
                    height={200}
                />
            </div>

            <div className={styles.asideelement} onClick={() => handleOpenModal_Academic()}>
                <Image
                    className={styles.asideelementicon}
                    src={academic}
                    alt={"academic history"}
                    width={400}
                    height={200}
                />
            </div>

            <div className={styles.asideelement} onClick={() => handleOpenModal_About()}>
                <Image
                    className={styles.asideelementicon}
                    src={aboutme}
                    alt={"about me"}
                    width={400}
                    height={200}
                />
            </div>

            

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
                <a href={'/DevResume_Saad.pdf'} target={'_blank'} className={styles.ctaProfile} download>
                    <MdDownload className={styles.downloads}/>
                    <p>get resume</p>
                </a>
            </div>
        </div>
    )
}


function Medias() {
    return (
        <div className={styles.mediaWrapper}>
            <a className={styles.mediaSlot} target="_blank" href='https://github.com/SaadJlil'>
                <SiGithub  size="60%"/>
            </a>
            <a className={styles.mediaSlot} target="_blank" href='https://www.linkedin.com/in/saad-jlil-0ab6831a9/?originalSubdomain=fr'>
                <SiLinkedin size="60%"/>
            </a>
            <a className={styles.mediaSlot} href="mailto:sailjlad@gmail.com">
                <SiGmail size="60%"/>
            </a>
            <a className={styles.mediaSlot} target="_blank" href='https://www.upwork.com/freelancers/~01f1699bdc05fec521'>
                <SiUpwork size="60%"/>
            </a>
        </div>
    )
}

function Resume() {
    return (
        <div className={styles.resume}></div>
    )
}