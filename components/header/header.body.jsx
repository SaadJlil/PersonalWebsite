import styles from '../../styles/header.module.css'
import Image from 'next/image'
import {create} from 'zustand';
import { useState } from 'react';

import arrow_right from '../../public/arrow_right.svg'
import arrow_left from '../../public/arrow_left.svg'
import react from '../../public/react.svg'
import csharp from '../../public/cs.svg'
import dotnet from '../../public/dotnet.svg'
import python from '../../public/python.svg'
import typescript from '../../public/ts.svg'
import javascript from '../../public/js.svg'
import pytorch from '../../public/pytorch.svg'
import postgres from '../../public/postgres.svg'

import Projects from '../projects';
import Services from '../services';

export default function HeaderBody({handleModalOpenBody}) {
    return (
        <div className={styles.headerContent}>
            <HeaderMain/>
            <Projects/>
            <Skillset/>
            <Services handleModalOpen={() => handleModalOpenBody()}/>
        </div>
    )
}

function HeaderMain() {
    return (
        <main className={styles.main}>
            <div className={styles.mainTxtSide}>
                <div className={styles.heading}>
                    <h1>Your software solution architect</h1>
                </div>
                <div className={styles.intro}>
                    <h3>Welcome to my personal website! My name is Saad, I'm a business analytics student and web developer originally from Morocco, currently based in Canada. I have a passion for coding and enjoy spending my free time playing chess. </h3> 

                    <h3>On this website, you'll find information about me, my interests, and my professional background.  <br />
                        If you're a prospective employer, a fellow developer, or just curious about who I am, I invite you to take a look around and get to know me better.
                    </h3>
                    <h3>
                        Thank you for visiting, and I hope you enjoy exploring my site!
                    </h3>
                </div>

            </div>
            <div></div>
        </main>
    )
}

const useCounter = create((set) => ({
     count: 0,
     increment: () => set((state) => ({ count: state.count + 1 })),
     decrement: () => set((state) => ({ count: state.count - 1 })),
 }));

 const Carousel = ({ images }) => {

 };



 function Skillset() {
     const [n1, setN1] = useState(1);
     const [n2, setN2] = useState(5);

     const skills = [
         { id:1, name: 'Javascript', icon: javascript, level:'confirmed' },
         { id:2, name: 'Typescript', icon: typescript, level:'confirmed' },
         { id:3, name: 'Python', icon: python, level:'advanced'  },
         { id:4, name: 'Pytorch', icon: pytorch, level:'learning' },
         { id:5, name: 'Postgresql', icon: postgres, level:'confirmed' },
         { id:6, name: 'Csharp', icon: csharp, level:'confirmed' },
         { id:7, name: 'Dotnet', icon: dotnet, level:'advanced' },
         { id:8, name: 'React', icon: react, level:'confirmed' }
     ]

     let offset =  4;

     const SlideForward = () => {
         setN1(n1 + offset > skills.length ? n1 + offset - skills.length : n1 + offset);
         setN2(n2 + offset > skills.length ? n2 + offset - skills.length : n2 + offset);
     }

     const SlideBackward = () => {
         setN1(n1 - offset < 1 ? skills.length + n1 - offset : n1 - offset);
         setN2(n2 - offset < 1 ? skills.length + n2 - offset : n2 - offset);
     }

     const { count, increment, decrement } = useCounter();

     const [activeIndex, setActiveIndex] = useState(0);

     return (
         <div className={styles.skillsetWrapper}>
            <div className={styles.heading}>
                <h2>My Portfolio of Projects</h2>
            </div>
            <div className={styles.skills}>
                <Image
                    className={`${styles.arrowleft} ${styles.arrow}`}
                    src={arrow_left}
                    width={20}
                    height={20}
                    alt="thing"
                    onClick={() => SlideBackward()}
                />
                {skills.filter(skill => (n1 < n2) ? skill.id < n2 && skill.id >= n1 : skill.id < n2 || skill.id >= n1)

                    .sort((a, b) => {
                        if( a - n1 < 0 ){
                            if( b - n1 < 0 ){
                                return (a < b);
                            }
                            return -1;
                        }
                        else{
                            if( b - n1 < 0 ){
                                return 1
                            }
                            return (a < b);
                        }
                    })
                    .map(skill => (
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
                <Image
                    className={`${styles.arrowright} ${styles.arrow}`}
                    src={arrow_right}
                    width={20}
                    height={20}
                    alt="thing"
                    onClick={() => SlideForward()}
                />
            </div>
        </div>
     )
 }