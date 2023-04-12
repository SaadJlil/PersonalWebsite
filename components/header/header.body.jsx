import styles from '../../styles/header.module.css'
import Image from 'next/image'

import react from '../../public/react.svg'
import csharp from '../../public/cs.svg'
import dotnet from '../../public/dotnet.svg'
import python from '../../public/python.svg'
import typescript from '../../public/ts.svg'
import javascript from '../../public/js.svg'
import pytorch from '../../public/pytorch.svg'
import postgres from '../../public/postgres.svg'


export default function HeaderBody() {
    return (
        <div className={styles.headerContent}>
            <HeaderMain/>
            <Skillset />
        </div>
    )
}

function HeaderMain() {
    return (
        <main className={styles.main}>
            <div className={styles.mainTxtSide}>
                <div className={styles.heading}>
                    <span />
                    <h1>Your software solution architect</h1>
                </div>
            </div>
            <div></div>
        </main>
    )
}

function Skillset() {
    let n1 = 1, n2 = 5;


    const skills = [
        { id:1, name: 'Javascript', icon: javascript, level:'confirmed' },
        { id:2, name: 'typescript', icon: typescript, level:'confirmed' },
        { id:3, name: 'python', icon: python, level:'advanced'  },
        { id:4, name: 'pytorch', icon: pytorch, level:'learning' },
        { id:5, name: 'postgresql', icon: postgres, level:'confirmed' },
        { id:6, name: 'csharp', icon: csharp, level:'confirmed' },
        { id:7, name: 'dotnet', icon: dotnet, level:'advanced' },
        { id:8, name: 'react', icon: react, level:'confirmed' }]

    return (
        <div className={styles.skillsetWrapper}>
            {skills.filter(skill => skill.id <= n2 && skill.id >= n1).map(skill => (
                <div key={skill.id} className={styles.skill}>
                    <Image
                        className={styles.techIcon}
                        src={skill.icon}
                        width={20}
                        height={20}
                        alt={skill.name}
                    />
                    <div className={styles.skilltxt}>
                        <p className={styles.name}>{skill.name}</p>
                        <p className={styles.level}>{skill.level}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}