import HeaderMenu from "./header.menu"
import HeaderBody from "./header.body"
import styles from '../../styles/header.module.css'
import Projects from "../projects"

export default function Header({handleOpenModalHeader}) {
    
    
    return (
        <header className={styles.header}>   
            <HeaderMenu/>
            <HeaderBody handleModalOpenBody={() => handleOpenModalHeader()}/>
        </header>
    )
}


