import useServiceStore from '@/store/serviceStore'
import styles from '../../styles/aside.module.css'
import { MdDownload } from 'react-icons/md'
import { SiUpwork, SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'
import useStoreAsideElements from '@/store/asidestoredelements'
import AcademicModal from '../AsideElements/academic'
import WorkModal from '../AsideElements/workhistory'
import AboutMeModal from '../AsideElements/aboutme'
import Image from "next/image"

import work from '../../public/work.svg'
import academic from '../../public/academic.svg'
import aboutme from '../../public/aboutme.svg'

import React, {useState, useEffect} from 'react'




export default function Aside({isAsideOpen_}) {

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
            <AsideElements />
            <Medias />
        </aside>
    )

    }

}

function AsideElements() {
    const StoredAsideElements = useStoreAsideElements((state) => state.elements)

    const [isModalOpen_Academic, setIsModalOpen_Academic] = useState(false);

    const [isModalOpen_Work, setIsModalOpen_Work] = useState(false);

    const [isModalOpen_About, setIsModalOpen_About] = useState(false);

    const handleOpenModal_Academic = () => {
        setIsModalOpen_Academic(true);
    }
    
    const handleCloseModal_Academic = () => {
        setIsModalOpen_Academic(false);
    }

    const handleOpenModal_Work = () => {
        setIsModalOpen_Work(true);
    }
    
    const handleCloseModal_Work = () => {
        setIsModalOpen_Work(false);
    }

    const handleOpenModal_About = () => {
        setIsModalOpen_About(true);
    }
    
    const handleCloseModal_About = () => {
        setIsModalOpen_About(false);
    }



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

            <AcademicModal className={styles.asideelement} handleCloseModal={() => handleCloseModal_Academic()} isModalOpen={isModalOpen_Academic}>
            </AcademicModal>

            <WorkModal className={styles.asideelement} handleCloseModal={() => handleCloseModal_Work()} isModalOpen={isModalOpen_Work}></WorkModal>

            <AboutMeModal className={styles.asideelement} handleCloseModal={() => handleCloseModal_About()} isModalOpen={isModalOpen_About}></AboutMeModal>



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
                    <MdDownload className={styles.downloads}/>
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
                <SiGithub  size="60%"/>
            </div>
            <div className={styles.mediaSlot}>
                <SiLinkedin size="60%"/>
            </div>
            <div className={styles.mediaSlot}>
                <SiGmail size="60%"/>
            </div>
            <div className={styles.mediaSlot}>
                <SiUpwork size="60%"/>
            </div>
        </div>
    )
}

function Resume() {
    return (
        <div className={styles.resume}></div>
    )
}