import useProjectStore from "@/store/projectStore"
import styles from '../styles/projects.module.css'
import Image from "next/image"

export default function Projects() {
    const projects = useProjectStore((state) => state.projects)
    return(
        <section className={styles.projects}>
            <div className={styles.heading}>
                <h2>My Portfolio of Projects</h2>
            </div>
            <div className={styles.slots}>
                {projects.map(project => (
                    <div key={project.id} className={styles.slot}>
                        <div className={styles.slotTitle}>
                            <h3>{project.name}</h3>
                        </div>
                        <a href={project.github} className={styles.imgWrap} target="_blank" rel="noreferrer">
                            <Image
                                className={styles.slotImg}
                                src={project.img}
                                alt={project.name}
                                width={400}
                                height={200}
                            />
                        </a>
                        <div className={styles.slotText}>
                            <p>{project.description}</p>
                        </div>
                        <div className={styles.slotUtils}>
                            {/*
                                <div className={styles.slotUtil}>
                                    <span>
                                        <label className={styles.label}>github: </label>
                                        <a className={styles.labelText}>{project.github}</a>
                                    </span>
                                </div>
                            */}
                            <div className={styles.technos}>
                                <label className={styles.label}>stack:</label>
                                {project.technologies.map(technology => (
                                    <div key={technology.id} className={styles.labeled}>
                                        <Image src={technology.icon} alt="ss" width={14} height={14} className={styles.labelIcon}/>
                                        <p>{technology.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}