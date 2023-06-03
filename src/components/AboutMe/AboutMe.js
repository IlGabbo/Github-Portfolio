import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import "./AboutMe.css"
import "./AboutMeQueries.css"


function AboutMe() {
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
    const gifVars = {
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
        <div className="aboutme-container">
            <div className="aboutme-centered">
                <motion.div ref={titleRef} animate={titleControl} initial="hidden" variants={titleVars} className="introduction">
                    <p>INTRODUCTION</p>
                    <h1>ABOUT ME</h1>
                </motion.div>
                <motion.div ref={leftRef} animate={leftControl} initial="hidden" variants={leftVars} className="aboutme-description">
                    <span className="welcome">Hey, you're welcome!</span><br/>
                    I am Gabbo, a passionate software and web <br /> developer.<br/>
                    <span></span>
                    I program small software and websites to expand my knowledge in this field with the ability to use it to <br /> collaborate with teams or individuals.<br/>
                    <span></span>
                    In addition to programming I also have a passion for <br /> the violin for at least 8 years <br/>
                </motion.div>
                <motion.div className="aboutme-image" ref={rightRef} animate={rightControl} initial="hidden" variants={gifVars}></motion.div>
            </div>
        </div>
    )
}

export default AboutMe