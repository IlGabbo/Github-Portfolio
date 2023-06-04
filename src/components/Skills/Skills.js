import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import { TextureLoader } from "three"
import { PerspectiveCamera, View } from "@react-three/drei"
import "./Skills.css"
import "./SkillsQueries.css"


export default function Skills({skills}) {    
    const [ref, inView] = useInView()
    const control = useAnimation()
    const track = useRef()
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
            <div className="cubebox" ref={track}>
                <div className="comment">// a stupid idea</div>
                <Display language={"python"}/>
                <Display language={"java"}/>
                <Display language={"css-3"}/>
                <Display language={"js"}/>
                <Display language={"nodejs"}/>
                <Display language={"electronjs"}/>
                <Display language={"reactjs"}/>
                <Display language={"mysql"}/>
                <Display language={"git"}/>
            </div>
        </div>
        </div>
    )
}

function Display({language}) {
    return (
        <div className="canvascontainer">
            <Canvas>
                <Cube language={language} />
            </Canvas>
        </div>        
    )
} 

function Cube({language}) {
    const texture = useLoader(TextureLoader, "/static/img/languagespng/" + language + ".png") 
    const mesh = useRef()       
    useFrame(({clock}) => {
        mesh.current.rotation.x = clock.getElapsedTime()
        mesh.current.rotation.y = -clock.getElapsedTime()
    })
    return (
        <group ref={mesh}>
            <mesh scale={1}>
                <boxGeometry args={[3, 3, 3]} />                
                <meshBasicMaterial map={texture}/>
            </mesh>
        </group>
    )
}
