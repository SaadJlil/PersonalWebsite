import Header from "../header/header"
import styles from '../../styles/main.module.css'
import Aside from "../aside/aside"
import Modalform from "../modalform/modalform"
import Projects from "../projects"
import React, {useState} from 'react';
import menuburg from '../../public/menubrg.svg'
import Image from "next/image"


export default function Main() {

    const [isModalOpen_, setIsModalOpen_] = useState(false);
    const [isAsideOpen, setIsAsideOpen_] = useState(false);


    const handleOpenModal_ = () => {
        setIsModalOpen_(true);
    }
    
    const handleCloseModal_ = () => {
        setIsModalOpen_(false);
    }

    const clickMenu = () => {
        setIsAsideOpen_(!isAsideOpen);
    }
    

    return (
        <main className={styles.main}>
            <div className={styles.iconburgContainer} style={{ backgroundColor:((isAsideOpen) ? '#1C1C27' : 'transparent') }} onClick={ () => clickMenu() }>
                <Image
                    className={styles.iconburg}
                    src={menuburg}
                    alt={"menu hamburg"}
                    width={310}
                    height={259}
                />
            </div>
            
            <Aside isAsideOpen_={isAsideOpen} ></Aside>
            <Header handleOpenModalHeader={() => handleOpenModal_()}></Header>
            
            <Modalform handleCloseModal={() => handleCloseModal_()} isModalOpen={isModalOpen_}></Modalform>


        </main>
    )
}