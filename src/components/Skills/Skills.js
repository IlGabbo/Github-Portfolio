import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import {motion, useAnimation} from "framer-motion"
import "./Skills.css"
import "./SkillsQueries.css"


export default function Skills({skills}) {    
    const middle = parseInt(skills.length / 2)
    const firstBoxes = skills.slice(0, middle)
    const finalBoxes = skills.slice(middle, skills.length)
    const {ref, inView, entry} = useInView()
    const control = useAnimation()
    const variants = {
        visible: {x: 0, opacity: 1, transition: {duration: .5}},
        hidden: {x: -60, opacity: 0}
    }

    useEffect(() => {
        if (inView) {
            control.start("visible")
        } else {
            control.start("hidden")
        }
    }, [control, inView])

    return (
        <div className="skills-container">           
            <div className="skills-centered">
            <div className="introduction">
                <div>
                    <motion.p
                        ref={ref}
                        variants={variants}
                        initial="hidden"
                        animate={control}
                    >
                    WHAT I DO</motion.p>
                    <motion.h1 ref={ref} variants={variants} initial="hidden" animate={control}>SKILLS</motion.h1>
                </div>                    
            </div>  
            <div className="row">
                <div className="first">
                    {                    
                        skills.map((el, key) => (
                                <div key={key} className="skill-content">
                                    <div className={"skill-logo " + el.logo}></div>
                                    <div className="skill-title">{el.name}</div>
                                    {/*<div className="skill-description"><p>{el.description}</p></div>*/}
                                </div>
                            )
                        )   
                    }
                </div>
                <div className="second">
                    {
                        skills.map((el, key) => (
                                <div key={key} className="skill-content">
                                    <div className={"skill-logo " + el.logo}></div>
                                    <div className="skill-title">{el.name}</div>
                                    {/*<div className="skill-description"><p>{el.description}</p></div>*/}
                                </div>
                            )
                        )   
                    }
                </div>
            </div>
        </div>
        </div>
    )
}