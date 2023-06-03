import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import "./School.css"
import "./SchoolQueries.css"


function School({titles}) {
    const scroll = (e) => {
        let element = e.currentTarget
        element.classList.add("exercise-box_scrolling")
        element.addEventListener("animationend", () => {element.classList.remove("exercise-box_scrolling")})
    }
    const [tpsiIndex, setTpsiIndex] = useState(0)
    const [computingIndex, setComputingIndex] = useState(0)

    const [leftRef, leftInView] = useInView()
    const [rightRef, rightInView] = useInView()
    const [titleRef, titleInView] = useInView()
    const leftControl = useAnimation()
    const rightControl = useAnimation()
    const titleControl = useAnimation()
    const leftVars = {
        visible: {x: 0, opacity: 1, transition: {duration: .6}},
        hidden: {x: -60, opacity: 0}
    }
    const rightVars = {
        visible: {x: 0, opacity: 1, transition: {duration: .6}},
        hidden: {x: 60, opacity: 0}
    }
    const titleVars = {
        visible: {x: 0, opacity: 1, transition: {duration: .4}},
        hidden: {x: -60, opacity: 0}
    }

    useEffect(() => {
        if (titleInView) {
            titleControl.start("visible")
        } else {
            titleControl.start("hidden")
        }        
    }, [titleControl, titleInView])

    useEffect(() => {
        if (rightInView) {
            rightControl.start("visible")
        } else {
            rightControl.start("hidden")
        }        
    }, [rightControl, rightInView])

    useEffect(() => {
        if (leftInView) {
            leftControl.start("visible")
        } else {
            leftControl.start("hidden")
        }        
    }, [leftControl, leftInView])


    return (
        <div className="school-container">
            <div className="school-centered">
                <motion.div ref={titleRef} animate={titleControl} initial="hidden" variants={titleVars} className="introduction">
                    <p>ABOUT</p>
                    <h1>SCHOOL</h1>
                </motion.div>
                <div className="subjects-container">
                    <motion.div className="tpsi" ref={leftRef} animate={leftControl} initial="hidden" variants={leftVars}>
                        <h1>TPSI</h1>
                        <div className="exercise-box" draggable="true" onDragStart={(e) => {
                                scroll(e)
                                setTpsiIndex(tpsiIndex+1)
                                if (tpsiIndex > titles[0].tpsi.titles.length-2) {                                    
                                    setTpsiIndex(0)
                                }                       
                                document.querySelector(".tpsi .exercise-box .link-preview").classList.add(titles[0].tpsi.preview)
                            }} onTouchStart={(e) => {
                                scroll(e)
                                setTpsiIndex(tpsiIndex+1)
                                if (tpsiIndex > titles[0].tpsi.titles.length-2) {                                    
                                    setTpsiIndex(0)
                                }  
                            }} onClick={() => {window.open(titles[0].tpsi.link+titles[0].tpsi.titles[tpsiIndex])}}>
                            <div>
                                <div className={"link-preview" + " " + titles[0].tpsi.preview[tpsiIndex]}></div>
                                <div className="name">{titles[0].tpsi.titles[tpsiIndex]}</div>
                            </div>
                        </div>
                        <div className="ex-2">
                            <div>
                                <div className={"link-preview" + " " + titles[0].tpsi.preview[tpsiIndex+1]}></div>
                                <div className="name">{titles[0].tpsi.titles[tpsiIndex+1]}</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="computing" ref={rightRef} animate={rightControl} initial="hidden" variants={rightVars}>
                        <h1>COMPUTING</h1>
                        <div className="exercise-box" draggable="true" onDragStart={(e) => {
                            scroll(e)
                            setComputingIndex(computingIndex+1)
                            if (computingIndex > titles[1].computing.titles.length-2) {                                    
                                setComputingIndex(0)
                            }   
                        }} onTouchStart={(e) => {
                            scroll(e)
                            setComputingIndex(computingIndex+1)
                            if (computingIndex > titles[1].computing.titles.length-2) {                                    
                                setComputingIndex(0)
                            }  
                        }} onClick={() => {window.open(titles[1].computing.link+titles[1].computing.titles[computingIndex])}}>
                            <div>
                                <div className="link-preview"></div>
                                <div className="name">{titles[1].computing.titles[computingIndex]}</div>
                            </div>
                        </div>
                        <div className="ex-2">
                            <div>
                                <div className="link-preview"></div>
                                <div className="name">{titles[1].computing.titles[computingIndex+1]}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default School