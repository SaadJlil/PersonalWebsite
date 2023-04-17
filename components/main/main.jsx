import Header from "../header/header"
import styles from '../../styles/main.module.css'
import Aside from "../aside/aside"
import Projects from "../projects"

export default function Main() {
    return (
        <main className={styles.main}>
            <Aside></Aside>
            <Header></Header>
        </main>
    )
}