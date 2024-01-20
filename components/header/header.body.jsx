import styles from '../../styles/header.module.css'
import Image from 'next/image'
import {create} from 'zustand';
import { useEffect, useState } from 'react';
import React from 'react'

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


import main_animation from '../../public/animation.gif'



import communication from '../../public/communication.png'
import timemanagement from '../../public/timemanagement.png'
import problemsolving from '../../public/problemsolving.png'
import collaboration from '../../public/collaboration.png'
import attentationtodetail from '../../public/attentationtodetail.png'
import adaptability from '../../public/adaptability.png'
import continuouslearning from '../../public/continuouslearning.png'

import Projects from '../projects';
import Services from '../services';
  

export default function HeaderBody({handleModalOpenBody}) {
    return (
        <div className={styles.headerContent}>
            <HeaderMain handleModalOpen={() => handleModalOpenBody()}/>
            <Projects/>
            <Skillset/>
            <Services />
        </div>
    )
}




function HeaderMain({handleModalOpen}) {
    return (
        <div className={styles.main}>
           <div className={styles.mainTxtSide}>
                <div className={styles.heading}>
                    <div className={styles.saad}>
                        <p>Hi, my name is 
                            <br /><span className={styles.name}>Saad JLIL</span>    
                            <br /><span className={styles.work}>Backend Developer.</span>    
                        </p>
                    </div>
                    <div className={styles.presentation}>
                        <p>Hi there! I'm Saad, a data analytics student and FullStack developer, specializing in backend development. Originally from Morocco, I'm now based in Vancouver, Canada.</p>
                        <div className={styles.hireme} onClick={() => handleModalOpen()}>
                            <p>Hire Me</p>
                        </div>
                    </div>

                </div>
                
            </div>
            <div className={styles.animation}>

                <video className={styles.anim} autoPlay loop muted playsInline>
                    <source className={styles.anim} src={"animation.webm"} type={"video/webm"}/>
                    <source className={styles.anim} src={"animation.mp4"} type={"video/mp4"}/>
                </video>                
            </div>
        </div>
    )
}


 function Skillset() {

    if (typeof window !== 'undefined') {

        const [windowDimensions, setWindowDimensions] = useState({
            width: window.innerWidth,
            height: window.innerHeight
        });


        
        useEffect(() => {
            const handleResize = () => {
                setWindowDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            };
        
            window.addEventListener('resize', handleResize);
        
            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);



     const [numberDisplay, setNumberDisplay] = useState(1);

     useEffect(() => {
        let width = windowDimensions.width;

        setNumberDisplay(4);

        if(width > 1143){
                if( width < 1284){
                    setNumberDisplay(2)
                }
                else if( width < 1642){
                    setNumberDisplay(3)
                }
        } else {
            if( width < 779){
                setNumberDisplay(1)
            }
            else if( width < 1038){
                setNumberDisplay(2)
            }
            else{
                setNumberDisplay(3);
            }
        }


    }, [windowDimensions]);
   

    const skills_raw = [
         { id:1, name: 'Javascript', icon: javascript, level:'confirmed' },
         { id:2, name: 'Typescript', icon: typescript, level:'confirmed' },
         { id:3, name: 'Python', icon: python, level:'advanced'  },
         { id:4, name: 'Pytorch', icon: pytorch, level:'learning' },
         { id:5, name: 'Postgresql', icon: postgres, level:'confirmed' },
         { id:6, name: 'Csharp', icon: csharp, level:'confirmed' },
         { id:7, name: 'Dotnet', icon: dotnet, level:'advanced' },
         { id:8, name: 'React', icon: react, level:'confirmed' }
    ]

     const softskills_raw = [
         { id:1, name: 'Communication', icon: communication, level:'confirmed' },
         { id:2, name: 'Problem Solving', icon: problemsolving, level:'confirmed' },
         { id:3, name: 'Collaboration', icon: collaboration, level:'advanced'  },
         { id:4, name: 'Adaptability', icon: adaptability, level:'learning' },
         { id:5, name: 'Time Management', icon: timemanagement, level:'confirmed' },
         { id:6, name: 'Attention to detail', icon: attentationtodetail, level:'confirmed' },
         { id:7, name: 'Continuous Learning', icon: continuouslearning, level:'advanced' }
     ]

     const [skills, setskills] = useState(skills_raw);
     const [softskills, setsoftskills] = useState(softskills_raw);



    const SlideForward = () => {
        let firstelement = skills[0];
        firstelement.id = skills.length + 1;

        skills.shift();

        skills.push(firstelement);


        skills.forEach((element, index) => {
            skills[index].id -= 1;
        });

        setskills(prev => [...skills]);
    }

    const SlideBackward = () => {
        let lastelement = skills[skills.length - 1];
        lastelement.id = 0;

        skills.unshift(lastelement);

        skills.pop();

        skills.forEach((element, index) => {
            skills[index].id += 1;
        });

        setskills(prev => [...skills]);
    }

    const SlideForwardSoft = () => {
        let firstelement = softskills[0];

        firstelement.id = softskills.length + 1;

        softskills.shift();

        softskills.push(firstelement);


        softskills.forEach((element, index) => {
            softskills[index].id -= 1;
        });

        setsoftskills(prev => [...softskills]);
     }

     const SlideBackwardSoft = () => {
        let lastelement = softskills[softskills.length - 1];
        lastelement.id = 0;

        softskills.unshift(lastelement);

        softskills.pop();

        softskills.forEach((element, index) => {
            softskills[index].id += 1;
        });

        setsoftskills(prev => [...softskills]);
   
     }
     
     return (
         <div className={styles.skillsetWrapper}>
            <div className={styles.heading}>
                <h2>Technologies Protfolio</h2>
            </div>
            <div className={styles.skillsWrapper}>
            <div className={styles.technical}>
                <div className={styles.Title}>
                    <h2>Technical Skills</h2>
                </div>
                <div className={styles.skills}>
                    <Image
                        className={`${styles.arrowleft} ${styles.arrow}`}
                        src={arrow_left}
                        width={20}
                        height={20}
                        alt= "Left arrow"
                    onClick={() => SlideBackward()}
                    />
                    {skills.filter(
                            skill => skill.id < numberDisplay + 1 
                        ).map(skill => (
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
                        alt="Right arrow"
                        onClick={() => SlideForward()}
                    />
                </div>
            </div>
            <div className={styles.Others}>
                <div className={styles.Title}>
                    <h2>Soft Skills</h2>
                </div>
                <div className={styles.skills}>
                    <Image
                        className={`${styles.arrowleft} ${styles.arrow}`}
                        src={arrow_left}
                        width={20}
                        height={20}
                        alt= "Left arrow"
                    onClick={() => SlideBackwardSoft()}
                    />
                    {softskills.filter(
                            skill => skill.id < numberDisplay + 1 
                        )
                        .map(skill => (
                        <div key={skill.id} className={styles.skill}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    className={styles.techIcon}
                                    src={skill.icon}
                                    width={20}
                                    height={20}
                                    alt={skill.name}
                                />
                            </div>
                            
                            <div className={styles.skilltxt}>
                                <p className={styles.name}>{skill.name}</p>
                            </div>
                        </div>
                    ))}
                    <Image
                        className={`${styles.arrowright} ${styles.arrow}`}
                        src={arrow_right}
                        width={20}
                        height={20}
                        alt="Right arrow"
                        onClick={() => SlideForwardSoft()}
                    />
                </div>
            </div>
            </div>
        </div>
     )
    }
 }