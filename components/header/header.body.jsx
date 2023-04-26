import styles from '../../styles/header.module.css'
import Image from 'next/image'
import {create} from 'zustand';
import { useState } from 'react';


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
                    <span />
                    <h1>Your software solution architect</h1>
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
         { id:2, name: 'typescript', icon: typescript, level:'confirmed' },
         { id:3, name: 'python', icon: python, level:'advanced'  },
         { id:4, name: 'pytorch', icon: pytorch, level:'learning' },
         { id:5, name: 'postgresql', icon: postgres, level:'confirmed' },
         { id:6, name: 'csharp', icon: csharp, level:'confirmed' },
         { id:7, name: 'dotnet', icon: dotnet, level:'advanced' },
         { id:8, name: 'react', icon: react, level:'confirmed' }
     ]

     let offset = 2;

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
             <button onClick={() => SlideForward()}>{count}</button>
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
         </div>
     )
 }