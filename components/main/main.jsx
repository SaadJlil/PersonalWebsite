import Header from "../header/header"
import styles from '../../styles/main.module.css'
import Aside from "../aside/aside"
import Modalform from "../modalform/modalform"
import Projects from "../projects"
import React, {useState} from 'react';

export default function Main() {

    const [isModalOpen_, setIsModalOpen_] = useState(false);

    const handleOpenModal_ = () => {
        setIsModalOpen_(true);
    }
    
    const handleCloseModal_ = () => {
        setIsModalOpen_(false);
    }

    return (
        <main className={styles.main}>
            <Aside></Aside>
            <Header handleOpenModalHeader={() => handleOpenModal_()}></Header>
            
            <Modalform handleCloseModal={() => handleCloseModal_()} isModalOpen={isModalOpen_}></Modalform>


        </main>
    )
}