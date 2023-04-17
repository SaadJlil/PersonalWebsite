import styles from '../styles/services.module.css'
import Image from "next/image"
import useServiceStore from "@/store/serviceStore"

export default function Services() {
    const services = useServiceStore((state) => state.services)
    return(
        <section className={styles.services}>
            <div className={styles.heading}>
                <h2>My Services</h2>
            </div>
            <div className={styles.slots}>
                {services.map(service => (
                    <div key={service.id} className={styles.slot}>
                        <div className={styles.slotfade}>
                            <div className={styles.slotTitle}>
                                <h3>{service.name}</h3>
                            </div>
                            <div className={styles.slotText}>
                                <p>{service.description}</p>
                            </div>
                        </div>
                   </div>
                ))}
            </div>
        </section>
    )
}