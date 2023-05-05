import styles from '../styles/services.module.css'
import Image from "next/image"
import useServiceStore from "@/store/serviceStore"

import Button_ from "./button_"

export default function Services({handleModalOpen}) {
    const services = useServiceStore((state) => state.services)
    return(
        <section className={styles.services} style={{backgroundImage: `url(/home/whoami/Desktop/FrontEnd/PersonalWebsite/public/smartphone-heart-svgrepo-com.svg)`}} >
            <div className={styles.heading}>
                <h2>My Services</h2>
            </div>
            <div className={styles.slots}>
                {services.map(service => (
                    <div key={service.id} className={styles.slot} style={{backgroundImage: `url(${service.img})`}}>
                        <Image src={service.img} height={service.height} width={service.width}/>
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