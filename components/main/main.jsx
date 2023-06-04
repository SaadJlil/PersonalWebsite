import Header from "../header/header"
import styles from '../../styles/main.module.css'
import Aside from "../aside/aside"
import Modalform from "../modalform/modalform"
import Projects from "../projects"
import menuburg from '../../public/menubrg.svg'
import Image from "next/image"


import AcademicModal from '../AsideElements/academic'
import WorkModal from '../AsideElements/workhistory'
import AboutMeModal from '../AsideElements/aboutme'

import React, {useState, useEffect} from 'react'


export default function Main() {
    
    if (typeof window !== 'undefined') {

        const [windowDimensions, setWindowDimensions] = useState({
            width: window.innerWidth,
            height: window.innerHeight
        });




        const [isModalOpen_, setIsModalOpen_] = useState(false);
        const [isAsideOpen, setIsAsideOpen_] = useState(false);

        const [isContentOpen, setIsContentOpen_] = useState(true);

        const handleOpenContent_ = () => {
            setIsContentOpen_(true);
        }
        
        const handleCloseContent_ = () => {
            setIsContentOpen_(false);
        }



        const handleOpenModal_ = () => {
            setIsModalOpen_(true);
        }
        
        const handleCloseModal_ = () => {
            setIsModalOpen_(false);
        }

        const clickMenu = () => {
            setIsAsideOpen_(!isAsideOpen);
        }



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
            <main className={styles.main}>
                <div className={styles.iconburgContainer} style={{ backgroundColor:((isAsideOpen) ? '#1C1C27' : (windowDimensions.width <= 510) ? 'rgba(28,28,39,0.5)' : 'transparent') , borderRadius: (isAsideOpen) ? 0 : 3}} onClick={ () => clickMenu() }>
                    <Image
                        className={styles.iconburg}
                        src={menuburg}
                        alt={"menu hamburg"}
                        width={310}
                        height={259}
                    />
                </div>
                
                <Aside handleOpenModal_Academic_={() => handleOpenModal_Academic()} handleOpenModal_Work_={() => handleOpenModal_Work()} handleOpenModal_About_={() => handleOpenModal_About()} isAsideOpen_={isAsideOpen} ></Aside>
                <Header handleOpenModalHeader={() => handleOpenModal_()}></Header>
                
                <Modalform handleCloseModal={() => handleCloseModal_()} isModalOpen={isModalOpen_} isContentOpen_={isContentOpen} handleCloseContent={() => handleCloseContent_()} handleOpenContent={() => handleOpenContent_()}></Modalform>


                <AcademicModal className={styles.modal} handleCloseModal={() => handleCloseModal_Academic()} isModalOpen={isModalOpen_Academic}>
                </AcademicModal>

                <WorkModal className={styles.modal} handleCloseModal={() => handleCloseModal_Work()} isModalOpen={isModalOpen_Work}></WorkModal>

                <AboutMeModal className={styles.modal} handleCloseModal={() => handleCloseModal_About()} isModalOpen={isModalOpen_About}></AboutMeModal>
            </main>
        )
    }
}